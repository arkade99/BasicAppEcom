import axios from "axios";

export const PostSignUpData = async (NewUser) => {
  try {
    const response = await axios.post("http://localhost:3000/posts", NewUser);
    console.log("Fetch Data ", response);
    return response.data;
  } catch (error) {
    console.log("Fetch Data Error", error);
    alert("Api Unavilable");
    throw error;
  }
};

// export const FetchDataProducts = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/products");
//     return response.data;
//   } catch (error) {
//     console.log("Fetch Data Error", error);
//     alert("Api Unavilable");
//     throw error;
//   }
// };
