const API_URL = process.env.RESTURL_MYAPI;

export const fetchLiveSearch = async (query, updatedPageNo = "") => {
  const pageNo = updatedPageNo ? updatedPageNo : "";
  const apiEndpoint = `${API_URL}/characters/?search=${query}&page=${pageNo}`;
  
  try {
    const response = await fetch(apiEndpoint);
    const results = await response.json();
    if (results) {
      const stateObject = {
        results,
        message: !results.length ? `No matching results for "${query}"` : "",
      }
      return stateObject;
    }
    
  } catch (error) {
    const stateObject = {
      message:
        "Failed to fetch results. Please check network. Error: " + error,
    }
    return stateObject;
  }
};