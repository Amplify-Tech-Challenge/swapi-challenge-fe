import {characters} from '../../tests/testData'

export const fetchLiveSearch = async (query, updatedPageNo = "") => {
    const results = await characters.filter(c => c.name.includes(query))
    const resultObj = results.map(c => {
      const urlsplit = c.url.split('/')
      const obj = {name: c.name, url: urlsplit[urlsplit.length - 2]}
      return obj
    })
    const orderedList = resultObj.sort((a, b) => a.url - b.url)
    if (orderedList) {
      const stateObject = {
        results,
        message: !results.length ? `No matching results for "${query}"` : "",
        loading: false,
      }
      return stateObject;
    }
};