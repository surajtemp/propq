import BarChart from "./Components/charts/BarChart";
import Image from "next/image";
import { useEffect } from "react";
import LineChart from "./Components/charts/LineChart";
import { DataProvider } from "../context";
import axios from "axios";
import { login, logout } from "../server";
import loader from "../public/loader.svg";
import LoginModel from "../pages/Components/loginmodel";

function MyApp() {
  // axios
  //   .post(
  //     `https://propq-api.herokuapp.com/auth`,
  //     {
  //       idToken:
  //         "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvcHEtNmEwN2YiLCJhdWQiOiJwcm9wcS02YTA3ZiIsImF1dGhfdGltZSI6MTY0ODQ3NTI2NywidXNlcl9pZCI6ImdlWUs4NjNEbUhmTEs2ODJSdERvWnVvWnNRazEiLCJzdWIiOiJnZVlLODYzRG1IZkxLNjgyUnREb1p1b1pzUWsxIiwiaWF0IjoxNjQ4NDc1MjY3LCJleHAiOjE2NDg0Nzg4NjcsInBob25lX251bWJlciI6Iis5MTcyMDk3MDQ5MjEiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis5MTcyMDk3MDQ5MjEiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwaG9uZSJ9fQ.nOATTikUZTIooP2cVHGUFyu9FY-rrS-AlyMb60PycZo1gJKbS_VSsoK4nhSV8yMnftrsUMiw_P0bdohdbyGohGO3wAu0SEbDOyujR30HF-HWHzHcG-6vxREQ9T7q_pAXqIseAQrw9XaXIRKni9FnUwZL-_KYOFbNHGKUvWu09zwCYegyn6Wh2OLIld4F7G9OU53sFbhg7RJlUajS5bJeg8s_meRs0iXBuhw2lUxJb3n0oFtQzG7jcYzW3mbLE_OdNDB9Yj1T6XwF5DiZ-mt5GclpdbJJ6bwB0df87eS5O_O-MfBL9D9RdiAv0jriQL6Umco1jKFmnrf7Lu-ZvNTd4g",
  //     },
  //     {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "*",
  //         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  //         "Content-Type": "application/json; charset=utf-8",
  //         apikey: `jnjdklswj2423lw`
  //       },
  //     }
  //   )
  //   .then(function (response) {
  //     console.log(response);
  //   });
  // useEffect(() => {
  //   logout(
  //     "9cfb8b2c6ae3c854f4c4a9d6a1575a88cb53a59959470838cfd517f86f25dfb41bd3a8e0131dba70"
  //   );
  // }, []);

  return (
    <DataProvider>
      {/* <p>byeeeeeee</p> */}
      {/* <Image src={loader} alt="loader" /> */}
      <LineChart />
      {/* <LoginModel /> */}
    </DataProvider>
  );
}

export default MyApp;
