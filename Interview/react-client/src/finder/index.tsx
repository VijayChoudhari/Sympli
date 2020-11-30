import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import SearchResult from "./SearchResult";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { connect, ConnectedProps } from "react-redux";
import * as actionCreator from "../store/actions";
import { makeStyles } from "@material-ui/core";
import SearchCriteria from "./SearchCriteria";
import { DeleteTokenId, Result, SearchInput } from "../types";

const useStyles = makeStyles((theme) => ({
  flexColumnContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 50,
  },
  flexItem: {
    margin: 20,
  },
}));

const mapState = (state: { searchResults: Result[] }) => {
  return {
    searchResults: state.searchResults,
  };
};

const mapDispatch = (
  dispatch: (arg0: {
    type: string;
    urlId?: number;
    deleteTokenId?: DeleteTokenId;
  }) => any
) => {
  return {
    onDeleteSearchUrl: (urlId: number) =>
      dispatch(actionCreator.DeleteSearchUrl(urlId)),
    onAddSearch: (searchInput: SearchInput) =>
      dispatch(actionCreator.AddSearch(searchInput)),
    onDeleteSearchToken: (deleteTokeId: DeleteTokenId) =>
      dispatch(actionCreator.DeleteSearchToken(deleteTokeId)),
  };
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const WebFinder: React.FC<PropsFromRedux> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.flexColumnContainer}>
      <div className={classes.flexItem}>
        <SearchCriteria onAddSearch={props.onAddSearch}></SearchCriteria>
      </div>
      <div className={classes.flexItem}>
        <Card>
          <CardHeader title={"Search Results"}></CardHeader>
          <CardContent>
            <TableContainer component={Paper} style={{ marginTop: "20" }}>
              <Table aria-label="collapsible table">
                <TableBody>
                  {props.searchResults.map((searchResult) => (
                    <SearchResult
                      key={searchResult.id}
                      row={searchResult}
                      onDeleteSearchToken={props.onDeleteSearchToken}
                      onDeleteSearchUrl={props.onDeleteSearchUrl}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default connector(WebFinder);
