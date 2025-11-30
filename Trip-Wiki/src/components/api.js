const API_URL = "https://trip-wiki-api.vercel.app/";
export const request = async (startIdx, region, sortBy, searchWorld) => {
  try {
    let url = `${API_URL}`;
    if (region && region !== "All") {
      //region의 값이 존재하고, region의 값이 All과 동일하지 않다면
      url += `${region}?start=${startIdx}`;
    } else {
      url += `?start=${startIdx}`;
    }
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }
    if (searchWorld) {
      url += `&search=${searchWorld}`;
    }

    const response = await fetch(url);
    if (response) {
      let data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }

};
