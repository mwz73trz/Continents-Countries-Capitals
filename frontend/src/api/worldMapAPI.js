const BASE_URL = "http://localhost:8000/";

const getInit = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init);
    if (response.ok) {
      if (response.status !== 204) {
        let data = response.json();
        return data;
      } else {
        return { success: true };
      }
    }
  } catch (error) {
    console.error(":ERR:", error);
    return null;
  }
};

const getContinents = async () => {
  let url = `${BASE_URL}api/continents/`;
  return await tryCatchFetch(url, getInit());
};

const getContinentById = async (continentId) => {
  let url = `${BASE_URL}api/continents/${continentId}/`;
  return await tryCatchFetch(url, getInit());
};

const myExports = {
  getContinents,
  getContinentById,
};

export default myExports;
