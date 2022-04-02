const baseUrl = "http://localhost:4000";

export const fetchApi = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method !== "GET") {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return fetch(url);
};
