const axios = require("axios");

export async function makeRequest(method, url, data) {
  try {
    let response = await axios[method](url, data);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
