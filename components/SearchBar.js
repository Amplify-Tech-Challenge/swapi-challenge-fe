import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  background: red;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 3em;
  font-size: 2em;
  padding: 1em;
`;

const SearchBar = () => {
  const [inputString, setInputString] = useState("");
  const [state, setState] = useState({});

  useEffect(() => {
    console.log('USEEFFECT',state)
  }, [() => setInputString()])

  const handleChange = query => {
    setInputString(query);
    setState({ loading: true, message: '', results: [] });
    if (query !== "") fetchLiveSearch(query, "");
  };

  const fetchLiveSearch = async (query, updatedPageNo = "") => {
    const pageNo = updatedPageNo ? updatedPageNo : "";
    const apiEndpoint = `https://swapi.py4e.com/api/people/?search=${query}&page=${pageNo}`;

    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      const results = data.results;

      if (results) {
        setState({
          results,
          message: !results.length ? "No matching results for " + query : "",
          loading: false,
        });
      }

    } catch (error) {
      setState({
        loading: false,
        message:
          "Failed to fetch results. Please check network. Error: " + error,
      });
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search characters by name"
        aria-label="Character Search Bar"
        name="input"
        value={inputString}
        onChange={event => handleChange(event.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;


  // const response = await fetch(apiEndpoint)
  // const parsed = await response.json()
  // const results = parsed.results

  // console.log(state)
  // console.log(results)


// try to get axios going
// const [cancel, setCancel] = useState("")
// const [state, setState] = useState({
//   query: "",
//   results: [],
//   loading: false,
//   message: "",
// })

// const fetchLiveSearch = async (updatedPageNo = '', query) => {
//   const pageNo = updatedPageNo ? `&page=${updatedPageNo}` : "";
//   const apiEndpoint = `https://swapi.py4e.com/api/people/?search=${query}&page=${pageNo}`

//   if (cancel) {
//     cancel.cancel()
//   }

//   setCancel(axios.CancelToken.source())

//   try {
//     const response = await axios.get(apiEndpoint, {cancelToken: cancel.token})
//     const results = await response.data.results

//     if (results) {
//       setState({
//         results: results,
//         message: !results.length ? "No matching results for " + query : "",
//         loading: false,
//       })
//     }
//   } catch (error) {
//     if (axios.isCancel(error) || error) {
//       setState({
//         results: {},
//         loading: false,
//         message: "Failed to fetch results. Please check network",
//       });
//       console.log(error)
//     }
//   }

//   // const response = await fetch(apiEndpoint)
//   // const parsed = await response.json()
//   // const results = parsed.results

//   // console.log(state)
//   // console.log(results)
// }
