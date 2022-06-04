import axios from "axios";

export const BASE_URL = "https://influencer-portal-api-v3.herokuapp.com/home/api/";

const request = (api, method, header = null, data, onSuccess, onFailure) => {
  const axiosConfig = {
    method,
    url: `${BASE_URL}${api}`,
    data,
  };

  if (header) {
    axiosConfig.headers = header;
  }
  axios(axiosConfig)
    .then(function (response) {
      if ([200, 201, 204].indexOf(response.status) !== -1) {
        onSuccess(response.data);
      } else {
        onFailure();
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log(error?.response?.status);
      console.log(error?.response);
      if (error.response?.status == 401) {
        console.log(`getting 401`);
        // window.localStorage.setItem("redirectURL", currentURL);
        window.location.href = "/login";
        window.localStorage.removeItem("token");
        return;
      }
      onFailure(error);
    });
};

export function networkRequest(url, method, header = true, payload = null, onSuccess, onFailure) {
  if (header === "JSON") {
    console.log("payload1" + payload);

    const headers = { "Content-Type": "application/x-www-form-urlencoded" };
    return request(url, method, headers, payload, onSuccess, onFailure);
  }
  // else if (header) {
  //   const headers = {
  //     Authorization: localStorage.getItem("token"),
  //   };
  console.log("payload2" + payload);

  return request(url, method, false, payload, onSuccess, onFailure);
}
