import React, { useEffect } from "react";
import {
  Box,
  Collapse,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { SearchResultProps, SearchToken } from "../types";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const { row, onDeleteSearchToken, onDeleteSearchUrl } = props;

  // useEffect(() => {
  //   row.searchTokens.forEach((t) => {
  //     fetch(`/api/webfinderone/getsearchoccurences/${t.token}/${row.url}`)
  //       .then((response) => response.text())
  //       .then((data) => alert(data));
  //   });
  // }, [row]);

  useEffect(() => {
    row.searchTokens.forEach((t) => {
      fetch("/api/googlesearch")
        .then((response) => response.text())
        .then((data) => console.log(data));
    });
  }, [row]);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell width={20}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography align="left" variant="h6" gutterBottom component="div">
            {row.url}
          </Typography>
        </TableCell>
        <TableCell align="left">
          <IconButton onClick={() => onDeleteSearchUrl(row.id)}>
            <DeleteOutlinedIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Search Token</TableCell>
                    <TableCell align="right">Google Search</TableCell>
                    <TableCell align="right">Bing Search</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.searchTokens.map((searchToken: SearchToken) => (
                    <TableRow key={searchToken.id}>
                      <TableCell component="th" scope="row">
                        {searchToken.token}
                      </TableCell>
                      {searchToken.searchOccurences.map((occurence) => (
                        <TableCell align="right">{occurence.count}</TableCell>
                      ))}
                      <TableCell>
                        <IconButton
                          onClick={() =>
                            onDeleteSearchToken({
                              urlId: row.id,
                              tokenId: searchToken.id,
                            })
                          }
                        >
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default SearchResult;
