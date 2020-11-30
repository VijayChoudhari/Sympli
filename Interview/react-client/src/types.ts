export enum SearchEngine {
  Google = 1,
  Bing,
}

export type SearchOccurence = {
  engineType: SearchEngine;
  count: number;
};

export type SearchToken = {
  id: number;
  token: string;
  searchOccurences: SearchOccurence[];
};

export type SearchInput = {
  url: string;
  searchToken: string;
};

export type Result = {
  id: number;
  url: string;
  searchTokens: SearchToken[];
};

export type DeleteTokenId = {
  urlId: number;
  tokenId: number;
};

export type SearchResultProps = {
  row: Result;
  onDeleteSearchToken: (deleteToken: DeleteTokenId) => void;
  onDeleteSearchUrl: (urlId: number) => void;
};
