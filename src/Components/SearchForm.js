import React from "react";
import { Form, FormControl } from "react-bootstrap";
import search from "../image/search.png";

const SearchForm = ({ searchCountryInfo, searchCountry }) => {
  return (
    <div>
      <Form
        className="d-flex border-0 align-items-center"
        style={{
          marginRight: "60px",
          borderRadius: "20px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          width: "600px",
          height: "80px",
        }}
      >
        <FormControl
          type="search"
          placeholder="Search"
          className="border-0 "
          style={{
            fontSize: "48px",
            padding: "0",
            marginLeft: "32px",
            fontFamily: "Roboto",
          }}
          onChange={searchCountryInfo}
          value={searchCountry}
        />

        <img
          src={search}
          alt="search"
          width={30}
          height={30}
          style={{ margin: "25px" }}
        />
      </Form>
    </div>
  );
};

export default SearchForm;
