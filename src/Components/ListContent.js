import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import InfoCountry from "./InfoCountry";

const ListContent = ({
  statistic,
  searchCountry,
  showCountryInfo,
  onOpenCountryInfo,
  onCloseCountryInfo,
  info,
}) => {
  return (
    <div className="mt-3">
      {statistic
        .filter((countryItem) =>
          countryItem.Country.toLowerCase().includes(
            searchCountry.toLowerCase()
          )
        )

        .map((countryItem, index) => (
          <ButtonGroup
            className="d-flex flex-row mt-1 mb-3"
            key={countryItem.CountryCode}
            onClick={onOpenCountryInfo.bind(this, countryItem)}
          >
            <Button
              style={{
                height: "80px",
                marginLeft: "60px",
                fontSize: "24px",
                fontWeight: "700",
                padding: " auto",
                borderRadius: "20px 0 0 20px ",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                width: "110px ",
              }}
              variant="outline-light"
              className="border-0 text-dark"
            >
              {index + 1}
            </Button>
            <Button
              style={{
                textAlign: "start",
                height: "80px",
                width: "100%",
                fontSize: "24px",
                fontWeight: "700",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              }}
              variant="outline-light"
              className="border-0 text-dark"
            >
              {countryItem.Country}
            </Button>
            <Button
              style={{
                textAlign: "start",
                height: "80px",
                width: "50%",
                marginRight: "60px",
                fontSize: "24px",
                fontWeight: "700",
                borderRadius: "0 20px 20px 0",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              }}
              variant="outline-light"
              className="border-0 text-dark"
            >
              {countryItem.TotalConfirmed}
            </Button>
          </ButtonGroup>
        ))}

      <InfoCountry
        show={showCountryInfo}
        statistic={statistic}
        onHide={onCloseCountryInfo}
        info={info}
      />
    </div>
  );
};

export default ListContent;
