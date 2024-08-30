export const BASE_URL = "http://localhost:8055";

export const client = {
  get: async (url) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: { "Content-Type": "application/json" },
    }).catch(console.error);
    const data = await response.json();
    return data;
  },
};
