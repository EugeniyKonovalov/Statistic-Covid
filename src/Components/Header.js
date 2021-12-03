import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../image/logo.png";
import SearchForm from "./SearchForm";

const Header = ({ searchCountryInfo, searchCountry }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        style={{ marginTop: "40px" }}
      >
        <img
          src={logo}
          alt="logo"
          width={200}
          height={200}
          style={{ marginLeft: "60px" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex flex-row align-items-center">
            <Navbar.Brand style={{ fontSize: "72px", fontWeight: "700" }}>
              STATISTIC
            </Navbar.Brand>
          </Nav>
          <Nav>
            <SearchForm
              searchCountryInfo={searchCountryInfo}
              searchCountry={searchCountry}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
