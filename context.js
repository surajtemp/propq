import { useState, createContext, useEffect } from "react";
import { analytics } from "./server";
export const DataContext = createContext();



export const DataProvider = (props) => {
  const [data, setData] = useState({
    success: true,
    data: {
      prices: [
        {
          quarter: 1,
          year: 2011,
          count: 4,
          max: 2138.6831275720165,
        },
        {
          quarter: 2,
          year: 2011,
          count: 11,
          max: 2138.6831275720165,
        },
        {
          quarter: 3,
          year: 2011,
          count: 19,
          max: 1748.9711934156378,
        },
        {
          quarter: 4,
          year: 2011,
          count: 15,
          max: 2160.883280757098,
        },
        {
          quarter: 1,
          year: 2012,
          count: 26,
          max: 3966.35687732342,
        },
        {
          quarter: 2,
          year: 2012,
          count: 23,
          max: 4141.630041152263,
        },
        {
          quarter: 3,
          year: 2012,
          count: 22,
          max: 4219.341563786008,
        },
        {
          quarter: 4,
          year: 2012,
          count: 20,
          max: 4545.716411378556,
        },
        {
          quarter: 1,
          year: 2013,
          count: 18,
          max: 4197.530864197531,
        },
        {
          quarter: 2,
          year: 2013,
          count: 18,
          max: 3684.463894967177,
        },
        {
          quarter: 3,
          year: 2013,
          count: 1,
          max: 2000,
        },
        {
          quarter: 4,
          year: 2013,
          count: 10,
          max: 3810.4089219330854,
        },
        {
          quarter: 1,
          year: 2014,
          count: 13,
          max: 5205.047318611987,
        },
        {
          quarter: 2,
          year: 2014,
          count: 4,
          max: 4873.817034700315,
        },
        {
          quarter: 3,
          year: 2014,
          count: 5,
          max: 3039.9814126394053,
        },
        {
          quarter: 4,
          year: 2014,
          count: 4,
          max: 3279.8353909465022,
        },
        {
          quarter: 1,
          year: 2015,
          count: 3,
          max: 3159.8513011152418,
        },
        {
          quarter: 2,
          year: 2015,
          count: 3,
          max: 5349.794238683127,
        },
        {
          quarter: 3,
          year: 2015,
          count: 2,
          max: 3943.217665615142,
        },
        {
          quarter: 4,
          year: 2015,
          count: 3,
          max: 4100.946372239748,
        },
        {
          quarter: 2,
          year: 2016,
          count: 4,
          max: 5432.098765432099,
        },
        {
          quarter: 3,
          year: 2016,
          count: 4,
          max: 5637.860082304527,
        },
        {
          quarter: 4,
          year: 2016,
          count: 4,
          max: 6042.134831460674,
        },
        {
          quarter: 1,
          year: 2017,
          count: 2,
          max: 5349.794238683127,
        },
        {
          quarter: 2,
          year: 2017,
          count: 6,
          max: 6296.2962962962965,
        },
        {
          quarter: 3,
          year: 2017,
          count: 1,
          max: 3817.0347003154575,
        },
        {
          quarter: 4,
          year: 2017,
          count: 3,
          max: 7242.798353909465,
        },
        {
          quarter: 1,
          year: 2018,
          count: 3,
          max: 3292.1810699588477,
        },
        {
          quarter: 2,
          year: 2018,
          count: 2,
          max: 3717.472118959108,
        },
        {
          quarter: 3,
          year: 2018,
          count: 1,
          max: 6529.968454258675,
        },
        {
          quarter: 4,
          year: 2018,
          count: 4,
          max: 3943.217665615142,
        },
        {
          quarter: 1,
          year: 2019,
          count: 2,
          max: 7381.703470031545,
        },
        {
          quarter: 2,
          year: 2019,
          count: 7,
          max: 8148.148148148148,
        },
        {
          quarter: 3,
          year: 2019,
          count: 1,
          max: 6172.83950617284,
        },
        {
          quarter: 4,
          year: 2019,
          count: 1,
          max: 5576.208178438662,
        },
        {
          quarter: 4,
          year: 2020,
          count: 1,
          max: 3624.53531598513,
        },
        {
          quarter: 1,
          year: 2021,
          count: 6,
          max: 8215.613382899628,
        },
        {
          quarter: 2,
          year: 2021,
          count: 3,
          max: 8806.584362139918,
        },
        {
          quarter: 3,
          year: 2021,
          count: 4,
          max: 8024.691358024691,
        },
        {
          quarter: 4,
          year: 2021,
          count: 8,
          max: 7818.930041152264,
        },
        {
          quarter: 1,
          year: 2022,
          count: 4,
          max: 9200.743494423792,
        },
      ],
      transactions: [
        {
          year: 2011,
          quarter: 1,
          count: 5,
        },
        {
          year: 2011,
          quarter: 2,
          count: 11,
        },
        {
          year: 2011,
          quarter: 3,
          count: 19,
        },
        {
          year: 2011,
          quarter: 4,
          count: 15,
        },
        {
          year: 2012,
          quarter: 1,
          count: 26,
        },
        {
          year: 2012,
          quarter: 2,
          count: 23,
        },
        {
          year: 2012,
          quarter: 3,
          count: 22,
        },
        {
          year: 2012,
          quarter: 4,
          count: 20,
        },
        {
          year: 2013,
          quarter: 1,
          count: 19,
        },
        {
          year: 2013,
          quarter: 2,
          count: 18,
        },
        {
          year: 2013,
          quarter: 3,
          count: 1,
        },
        {
          year: 2013,
          quarter: 4,
          count: 10,
        },
        {
          year: 2014,
          quarter: 1,
          count: 13,
        },
        {
          year: 2014,
          quarter: 2,
          count: 4,
        },
        {
          year: 2014,
          quarter: 3,
          count: 5,
        },
        {
          year: 2014,
          quarter: 4,
          count: 4,
        },
        {
          year: 2015,
          quarter: 1,
          count: 3,
        },
        {
          year: 2015,
          quarter: 2,
          count: 3,
        },
        {
          year: 2015,
          quarter: 3,
          count: 2,
        },
        {
          year: 2015,
          quarter: 4,
          count: 3,
        },
        {
          year: 2016,
          quarter: 2,
          count: 4,
        },
        {
          year: 2016,
          quarter: 3,
          count: 4,
        },
        {
          year: 2016,
          quarter: 4,
          count: 4,
        },
        {
          year: 2017,
          quarter: 1,
          count: 2,
        },
        {
          year: 2017,
          quarter: 2,
          count: 6,
        },
        {
          year: 2017,
          quarter: 3,
          count: 1,
        },
        {
          year: 2017,
          quarter: 4,
          count: 3,
        },
        {
          year: 2018,
          quarter: 1,
          count: 4,
        },
        {
          year: 2018,
          quarter: 2,
          count: 3,
        },
        {
          year: 2018,
          quarter: 3,
          count: 1,
        },
        {
          year: 2018,
          quarter: 4,
          count: 4,
        },
        {
          year: 2019,
          quarter: 1,
          count: 2,
        },
        {
          year: 2019,
          quarter: 2,
          count: 7,
        },
        {
          year: 2019,
          quarter: 3,
          count: 1,
        },
        {
          year: 2019,
          quarter: 4,
          count: 1,
        },
        {
          year: 2020,
          quarter: 4,
          count: 1,
        },
        {
          year: 2021,
          quarter: 1,
          count: 6,
        },
        {
          year: 2021,
          quarter: 2,
          count: 3,
        },
        {
          year: 2021,
          quarter: 3,
          count: 5,
        },
        {
          year: 2021,
          quarter: 4,
          count: 8,
        },
        {
          year: 2022,
          quarter: 1,
          count: 4,
        },
      ],
      areaPrices: [
        {
          quarter: 1,
          year: 2011,
          count: 234,
          max: 3867.1023965141612,
        },
        {
          quarter: 2,
          year: 2011,
          count: 210,
          max: 4312.267657992565,
        },
        {
          quarter: 3,
          year: 2011,
          count: 160,
          max: 3921.5686274509803,
        },
        {
          quarter: 4,
          year: 2011,
          count: 165,
          max: 3839,
        },
        {
          quarter: 1,
          year: 2012,
          count: 176,
          max: 4313.725490196079,
        },
        {
          quarter: 2,
          year: 2012,
          count: 154,
          max: 7779.482262703739,
        },
        {
          quarter: 3,
          year: 2012,
          count: 187,
          max: 4258.373205741626,
        },
        {
          quarter: 4,
          year: 2012,
          count: 163,
          max: 5494.505494505494,
        },
        {
          quarter: 1,
          year: 2013,
          count: 283,
          max: 5338.823529411765,
        },
        {
          quarter: 2,
          year: 2013,
          count: 169,
          max: 5072.854830005396,
        },
        {
          quarter: 3,
          year: 2013,
          count: 150,
          max: 6274.509803921569,
        },
        {
          quarter: 4,
          year: 2013,
          count: 133,
          max: 5882.35294117647,
        },
        {
          quarter: 1,
          year: 2014,
          count: 151,
          max: 6603.773584905661,
        },
        {
          quarter: 2,
          year: 2014,
          count: 119,
          max: 7351.778656126482,
        },
        {
          quarter: 3,
          year: 2014,
          count: 137,
          max: 5212.2114668652275,
        },
        {
          quarter: 4,
          year: 2014,
          count: 139,
          max: 5291.644908616188,
        },
        {
          quarter: 1,
          year: 2015,
          count: 156,
          max: 7894.736842105263,
        },
        {
          quarter: 2,
          year: 2015,
          count: 129,
          max: 6930,
        },
        {
          quarter: 3,
          year: 2015,
          count: 102,
          max: 8593.75,
        },
        {
          quarter: 4,
          year: 2015,
          count: 96,
          max: 7254.901960784314,
        },
        {
          quarter: 1,
          year: 2016,
          count: 105,
          max: 8215.613382899628,
        },
        {
          quarter: 2,
          year: 2016,
          count: 85,
          max: 6575,
        },
        {
          quarter: 3,
          year: 2016,
          count: 112,
          max: 6260.118726389638,
        },
        {
          quarter: 4,
          year: 2016,
          count: 87,
          max: 9600,
        },
        {
          quarter: 1,
          year: 2017,
          count: 77,
          max: 7812.5,
        },
        {
          quarter: 2,
          year: 2017,
          count: 79,
          max: 7695.3125,
        },
        {
          quarter: 3,
          year: 2017,
          count: 63,
          max: 8274.509803921568,
        },
        {
          quarter: 4,
          year: 2017,
          count: 84,
          max: 7829.457364341085,
        },
        {
          quarter: 1,
          year: 2018,
          count: 104,
          max: 15564.853556485356,
        },
        {
          quarter: 2,
          year: 2018,
          count: 116,
          max: 7812.5,
        },
        {
          quarter: 3,
          year: 2018,
          count: 148,
          max: 7311.320754716981,
        },
        {
          quarter: 4,
          year: 2018,
          count: 127,
          max: 9530.91684434968,
        },
        {
          quarter: 1,
          year: 2019,
          count: 96,
          max: 8907.923263327948,
        },
        {
          quarter: 2,
          year: 2019,
          count: 138,
          max: 8877.498388136686,
        },
        {
          quarter: 3,
          year: 2019,
          count: 116,
          max: 7531.914893617021,
        },
        {
          quarter: 4,
          year: 2019,
          count: 122,
          max: 9848.484848484848,
        },
        {
          quarter: 1,
          year: 2020,
          count: 70,
          max: 10617.283950617284,
        },
        {
          quarter: 2,
          year: 2020,
          count: 40,
          max: 7989.464442493415,
        },
        {
          quarter: 3,
          year: 2020,
          count: 66,
          max: 8102.766798418972,
        },
        {
          quarter: 4,
          year: 2020,
          count: 29,
          max: 9154.714678059201,
        },
        {
          quarter: 1,
          year: 2021,
          count: 122,
          max: 11538.461538461539,
        },
        {
          quarter: 2,
          year: 2021,
          count: 88,
          max: 8832.807570977919,
        },
        {
          quarter: 3,
          year: 2021,
          count: 115,
          max: 8024.691358024691,
        },
        {
          quarter: 4,
          year: 2021,
          count: 123,
          max: 9375,
        },
        {
          quarter: 1,
          year: 2022,
          count: 102,
          max: 15175.718849840256,
        },
      ],
      trendingProjects: [
        {
          apartment: "RAMKY TOWERS",
          count: 73,
        },
        {
          apartment: "NCC URBAN GARDENIA",
          count: 48,
        },
        {
          apartment: "ETERNA BY PHOENIX TOWER-2",
          count: 28,
        },
        {
          apartment: "ETERNA BY PHOENIX",
          count: 20,
        },
        {
          apartment: "NAGARJUNA RESIDENCY",
          count: 19,
        },
      ],
    },
  });
//   useEffect(() => {
//     const token = localStorage.getItem("idAccessToken");
//     // const currentYear = new Date().getFullYear();
//     // console.log(currentYear);
// token?
//     analytics(
//       "MY HOME AVATAR",
//       // searchText,
//       "apartment",
//       // type,
//       // token
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY2Y2YzZTFiYTI5ODAwMTY4OGVlMjQiLCJuYW1lIjoiVmlzaGFsIFNvbnkiLCJlbWFpbCI6InZpc2hhbHNvbnlhYmNAZ21haWwuY29tIiwicGhvbmUiOiIrOTE3MjA5NzA0OTIxIiwiaWF0IjoxNjUyMTAzMTMxLCJleHAiOjE2NTQ2OTUxMzF9.Qks6rz5-MQ5WNB2eZRstltWnsUHlstNKOLl0ipuJKZI"
   
//     )
//       .then((res) => {
//         // console.log(res);
//         return res;
//       })
//       .then((items) => {
//         const value1 = items;
//         // console.log(value1.data.data.areaPrices);
//         setData(value1.data)
//       }):setData([])
//     }, []);
//     console.log(data);
  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
