import { React, useContext, useState, useEffect } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import loader from "../../../public/loader.svg";
import { Bar } from "react-chartjs-2";
import { analytics } from "../../../server";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ searchText, type, yearPeriod }) {
  const [isLoading, setIsLoading] = useState(true);
  const [areaPricesData, setareaPricesData] = useState([]);
  const [areaPricesYear, setareaPricesYear] = useState([]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: " Bar ",
      },
    },
  };

  //   const labels = ["January", "February", "March", "April", "May", "June", "July"];

  useEffect(() => {
    const token = localStorage.getItem("idAccessToken");
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    analytics(
      searchText,
      type,
      token
      // "MY HOME AVATAR",
      // "apartment",
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNlZGVkZTFlZTYzOTNiM2YzYTI1ODciLCJwaG9uZSI6Iis5MTcyMDk3MDQ5MjEiLCJpYXQiOjE2NDg2NTE3NzMsImV4cCI6MTY1MTI0Mzc3M30.m0kVSPiAFSPtDwioimYyFMLYjAuM9dGFw_UWAKf6PCs"
    )
      .then((res) => {
        // console.log(res);
        return res;
      })
      .then((items) => {
        const value1 = items;
        // console.log(value1.data.data.areaPrices);
        const areaPricesData = [];
        const areaPricesYear = [];

        value1.data.data.areaPrices.forEach((arrayItem) => {
          const x = arrayItem.max;
          const y = arrayItem.year;
          if (y > currentYear - yearPeriod) {
            areaPricesYear.push(y);
            areaPricesData.push(x);
          }
          // areaPricesYear.push(y);
          // areaPricesData.push(x);
        });
        setareaPricesData(areaPricesData);
        setareaPricesYear(areaPricesYear);
        setIsLoading(false);
      });
  }, []);
  // console.log(areaPricesData);
  // console.log(areaPricesYear);
  const data = {
    labels: areaPricesYear,
    datasets: [
      {
        label: "AREA PRICES",
        data: areaPricesData,
        // change colours here******
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
      <Bar options={options} data={data} />
    </div>
  );
}
