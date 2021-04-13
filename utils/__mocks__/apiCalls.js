import {characters} from '../../pages/characters/testData'

export const fetchLiveSearch = async (query, updatedPageNo = "") => {
  // const pageNo = updatedPageNo ? updatedPageNo : "";
  // const apiEndpoint = `https://swapi.py4e.com/api/people/?search=${query}&page=${pageNo}`;
  
  // try {

    const results = characters.filter(c => c.name.includes(query))

    // const response = await fetch(apiEndpoint);
    // const data = await response.json();
    // const results = data.results;

    if (results) {
      const stateObject = {
        results,
        message: !results.length ? `No matching results for "${query}"` : "",
        loading: false,
      }
      return stateObject;
    }
    
  // } catch (error) {
  //   const stateObject = {
  //     loading: false,
  //     message:
  //       "Failed to fetch results. Please check network. Error: " + error,
  //   }
  //   return stateObject;
  // }
};