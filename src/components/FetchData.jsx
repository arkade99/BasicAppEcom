import axios from "axios";

export const FetchUserData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user");
    console.log("Fetch Data ", response);
    return response.data;
  } catch (error) {
    console.log("Fetch Data Error", error);
    alert("Api Unavilable");
    throw error;
  }
};

export const FetchDataProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    console.log("Fetch Data ", response);
    return response.data;
  } catch (error) {
    console.log("Fetch Data Error", error);
    alert("Api Unavilable");
    throw error;
  }
};
