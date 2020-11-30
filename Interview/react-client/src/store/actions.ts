import { DeleteTokenId, SearchInput } from "../types";

export const DeleteSearchUrl = (urlId: number) => {
  return { type: "DELETE_SEARCH_URL", urlId: urlId };
};

export const AddSearch = (searchInput: SearchInput) => {
  return { type: "ADD_SEARCH", searchInput: searchInput };
};

export const DeleteSearchToken = (deleteTokenId: DeleteTokenId) => {
  return { type: "DELETE_SEARCH_TOKEN", deleteTokenId: deleteTokenId };
};
