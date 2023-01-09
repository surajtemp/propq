import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_PATH = process.env.NEXT_PUBLIC_API_URL;

export const login = async (idToken) => {
  const result = await axios.post(
    `${API_PATH}/auth`,
    {
      idToken: idToken,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};

export const logout = async (refreshToken) => {
  const result = await axios.post(
    `${API_PATH}/auth/logout`,
    {
      refreshToken: refreshToken,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};

export const editProfile = async (data, token) => {
  const result = await axios.put(
    `${API_PATH}/auth`,
    {
      email: data.email,
      name: data.name,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};

export const search = async (searchText) => {
  const result = await axios.get(
    `${API_PATH}/analytics/search?searchText=${searchText}&apikey=${API_KEY}`,

    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
      },
    }
  );

  return result;
};

export const contactUs = async (data) => {
  const result = await axios.post(
    `${API_PATH}/contact`,
    {
      message: data.message,
      name: data.name,
      phone: data.phone,
      email: data.email,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};

export const analytics = async (searchText, type, token) => {
  const result = await axios.get(
    `${API_PATH}/analytics?searchText=${searchText}&type=${type}`,

    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};

export const getTransactions = async (searchText, type, offset, token) => {
  const result = await axios.get(
    `${API_PATH}/analytics/transactions?type=${type}&searchText=${searchText}&offset=${offset}`,

    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};

export const comparePrices = async (searchText, type, token) => {
  const result = await axios.get(
    `${API_PATH}/analytics/compareprices?type=${type}&searchText=${searchText}`,

    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json; charset=utf-8",
        apikey: API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // .then(function (response) {
  //   console.log(response);
  // });
  return result;
};
