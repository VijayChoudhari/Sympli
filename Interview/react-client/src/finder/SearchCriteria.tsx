import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { SearchInput } from "../types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "./FormikTextField";

const useStyles = makeStyles((theme) => ({
  flexRowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  tokenStyle: {
    width: "30%",
    margin: 20,
  },
  urlStyle: {
    width: "50%",
    margin: 20,
  },
  addButtonStyle: {
    width: "10%",
    margin: 20,
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(1),
  },
}));

const SearchCriteria: React.FC<{ onAddSearch: (arg0: SearchInput) => void }> = (
  props
) => {
  const classes = useStyles();

  const urlRegExp = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

  return (
    <Formik
      validateOnChange={true}
      validateOnBlur={true}
      initialValues={{ searchToken: "", url: "" }}
      validationSchema={Yup.object().shape({
        searchToken: Yup.string()
          .nullable()
          .required("Token is required")
          .max(100, "Token cannot be longer than 100 characters"),
        url: Yup.string()
          .nullable()
          .required("Url is required")
          .max(250, "Website Url cannot be longer than 250 characters")
          .matches(urlRegExp, "Please enter valid url"),
      })}
      onSubmit={async (values) => {
        await new Promise((resolve) =>
          setTimeout(() => {
            props.onAddSearch({
              url: values.url,
              searchToken: values.searchToken,
            });
          }, 500)
        );
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => {
        return (
          <Form autoComplete="off">
            <div className={classes.flexRowContainer}>
              <Card style={{ width: "100%" }}>
                <CardHeader
                  title={"Enter search token and url to be searched"}
                ></CardHeader>
                <CardContent className={classes.flexRowContainer}>
                  <div className={classes.tokenStyle}>
                    <FormikTextField
                      name="searchToken"
                      required
                      label={"Search Keyword"}
                      helperText={"Enter token to search for url"}
                    />
                  </div>
                  <div className={classes.urlStyle}>
                    <FormikTextField
                      name="url"
                      required
                      label={"Url to search"}
                      helperText={"Enter url to find occurences"}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.addButtonStyle}
                  >
                    Add
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchCriteria;
