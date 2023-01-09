import { React, useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { analytics } from "../../../server";
import loader from "../../../public/loader.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ searchText, type, yearPeriod }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pricesData, setPricesData] = useState([]);
  const [pricesYear, setPricesYear] = useState([]);
  const options = {
    responsive: true,
    radius: 5,
    hitRadius: 20,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "Rs. " + value;
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: " Line ",
      },
    },
  };

  useEffect(() => {
    const token = localStorage.getItem("idAccessToken");
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    try{

  
    analytics(
      // "MY HOME AVATAR",
      searchText,
      // "apartment",
      type,
      token
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNlZGVkZTFlZTYzOTNiM2YzYTI1ODciLCJwaG9uZSI6Iis5MTcyMDk3MDQ5MjEiLCJpYXQiOjE2NDg2NTE3NzMsImV4cCI6MTY1MTI0Mzc3M30.m0kVSPiAFSPtDwioimYyFMLYjAuM9dGFw_UWAKf6PCs"
    )
      .then((res) => {
        // console.log(res);
        return res;
      })
      .then((items) => {
        const value1 = items;
        // console.log(value1.data.data.areaPrices);
        const PricesData = [];
        const PricesYear = [];

        value1.data.data.prices.forEach((arrayItem) => {
          const x = arrayItem.max;
          const y = arrayItem.year;
          if (y > currentYear - yearPeriod) {
            PricesYear.push(y);
            PricesData.push(x);
          }
        });
        setPricesData(PricesData);
        setPricesYear(PricesYear);
        setIsLoading(false);
      });  }catch(err){
        console.log(err);
      }
  }, []);

  const data = {
    labels: pricesYear,
    datasets: [
      {
        label: "PRICES",
        data: pricesData,
        // change colours here******
        borderColor: "#A8D8EA",
        backgroundColor: "#00ADB5",
      },
    ],
  };
  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={loader} alt="loader" />
      </div>
    );
  }
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
