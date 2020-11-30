import { Result, SearchEngine } from "../types";

const initialState: { searchResults: Result[] } = {
  searchResults: [
    {
      id: 1,
      url: "sympli.com.au",
      searchTokens: [
        {
          id: 1,
          token: "token1",
          searchOccurences: [
            { engineType: SearchEngine.Google, count: 1 },
            { engineType: SearchEngine.Bing, count: 1 },
          ],
        },
        {
          id: 2,
          token: "token2",
          searchOccurences: [
            { engineType: SearchEngine.Google, count: 1 },
            { engineType: SearchEngine.Bing, count: 1 },
          ],
        },
        {
          id: 3,
          token: "token3",
          searchOccurences: [
            { engineType: SearchEngine.Google, count: 1 },
            { engineType: SearchEngine.Bing, count: 1 },
          ],
        },
      ],
    },
    {
      id: 2,
      url: "test.com.au",
      searchTokens: [
        {
          id: 1,
          token: "dsfasd",
          searchOccurences: [
            { engineType: SearchEngine.Google, count: 1 },
            { engineType: SearchEngine.Bing, count: 1 },
          ],
        },
        {
          id: 2,
          token: "fds",
          searchOccurences: [
            { engineType: SearchEngine.Google, count: 1 },
            { engineType: SearchEngine.Bing, count: 1 },
          ],
        },
        {
          id: 3,
          token: "dfsd",
          searchOccurences: [
            { engineType: SearchEngine.Google, count: 1 },
            { engineType: SearchEngine.Bing, count: 1 },
          ],
        },
      ],
    },
  ],
};

const reducer = (state: typeof initialState = initialState, action: any) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_SEARCH":
      //Add search token if url already exists
      const existingUrlIndex = state.searchResults.findIndex(
        (x) => x.url === action.searchInput.url
      );

      //If url already present, then add search token
      if (existingUrlIndex !== -1) {
        //Check if search token is already exists
        const existingToken = newState.searchResults[
          existingUrlIndex
        ].searchTokens.find((x) => x.token === action.searchInput.searchToken);
        if (existingToken !== undefined) {
          return { ...state };
        }

        const newTokenId =
          Math.max.apply(
            Math,
            state.searchResults[existingUrlIndex].searchTokens.map(function (
              x
            ) {
              return x.id;
            })
          ) + 1;

        const updatedSearchTokens = state.searchResults[
          existingUrlIndex
        ].searchTokens.concat([
          {
            id: newTokenId,
            token: action.searchInput.searchToken,
            searchOccurences: [
              { engineType: SearchEngine.Google, count: 0 },
              { engineType: SearchEngine.Bing, count: 0 },
            ],
          },
        ]);

        newState.searchResults[existingUrlIndex] = {
          ...newState.searchResults[existingUrlIndex],
          searchTokens: [...updatedSearchTokens],
        };

        return { ...state, searchResults: [...newState.searchResults] };
      } else {
        //New Url is getting added
        const newUrlId =
          Math.max.apply(
            Math,
            state.searchResults.map(function (x) {
              return x.id;
            })
          ) + 1;

        const updatedSearchResults = state.searchResults.concat({
          id: newUrlId,
          url: action.searchInput.url,
          searchTokens: [
            {
              id: 1,
              token: action.searchInput.searchToken,
              searchOccurences: [
                { engineType: SearchEngine.Google, count: 0 },
                { engineType: SearchEngine.Bing, count: 0 },
              ],
            },
          ],
        });

        return { ...state, searchResults: updatedSearchResults };
      }
    case "DELETE_SEARCH_URL":
      const newSearchResults = state.searchResults.filter(
        (searchResult) => searchResult.id !== action.urlId
      );
      return { ...state, searchResults: newSearchResults };
    case "DELETE_SEARCH_TOKEN":
      const findUrlIndex = newState.searchResults.findIndex(
        (x) => x.id === action.deleteTokenId.urlId
      );

      const newSearchResult = { ...newState.searchResults[findUrlIndex] };

      const newSearchTokens = newSearchResult.searchTokens.filter(
        (token) => token.id !== action.deleteTokenId.tokenId
      );

      const updatedSearchResult = {
        ...newSearchResult,
        searchTokens: newSearchTokens,
      };

      newState.searchResults[findUrlIndex] = updatedSearchResult;

      return { ...state, searchResults: [...newState.searchResults] };
    case "UPDATE_GOOGLE_SEARCH_OCCURENCE":
      //Find Url and token set to udpate occurence.
      break;
  }

  return newState;
};

export default reducer;
