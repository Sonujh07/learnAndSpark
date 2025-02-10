import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1", // Use environment variable for production
  withCredentials: true, // Allow credentials (cookies, auth tokens)
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiConnector = async (method, url, bodyData, headers, params) => {
  try {
    const response = await axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
      });

    console.log("RESPONSE:::::::",response)
    return response; // Return the successful response
    
  } catch (error) {
    console.error("API ERROR:", error?.response?.data || error.message);

    // Throw an error object with useful details
    throw new Error(error?.response?.data?.message || "Something went wrong. Please try again.");
  }
};





// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };


