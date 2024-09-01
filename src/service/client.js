import { BASE_URL } from "../app/variables";

export const client = {
  get: async (url) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: { "Content-Type": "application/json" },
    }).catch(console.error);
    const data = await response.json();
    return data;
  },
};
