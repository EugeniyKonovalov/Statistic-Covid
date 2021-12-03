import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ListHeader = ({ statistic, setStatistic }) => {
  const [sortedCountry, setSortedCountry] = useState(true);
  const [sortedConfirmed, setSortedConfirmed] = useState(true);
  const isSortCountry = sortedCountry === false;
  const isSortConfirmed = sortedConfirmed === false;
  const sortingCountry = () => {
    if (isSortCountry) {
      const sorting = [...statistic].sort((a, b) =>
        a.Country > b.Country ? 1 : -1
      );
      setStatistic(sorting);
      setSortedCountry(true);
    } else {
      const sorted = [...statistic].sort((a, b) =>
        a.Country < b.Country ? 1 : -1
      );
      setStatistic(sorted);
      setSortedCountry(false);
    }
  };
  const sortingConfirmed = () => {
    if (isSortConfirmed) {
      const sorting = [...statistic].sort((a, b) =>
        a.TotalConfirmed > b.TotalConfirmed ? 1 : -1
      );
      setStatistic(sorting);
      setSortedConfirmed(true);
    } else {
      const sorting = [...statistic].sort((a, b) =>
        a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
      );
      setStatistic(sorting);
      setSortedConfirmed(false);
    }
  };

  return (
    <div>
      <ButtonGroup className="d-flex flex-row">
        <Button
          style={{
            height: "80px",
            marginLeft: "60px",
            fontSize: "24px",
            fontWeight: "700",
            padding: "23px 20px 23px 30px",
            borderRadius: "20px 0 0 20px ",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
          variant="outline-light"
          className="bg-info"
        >
          №
        </Button>

        <Button
          className="d-flex align-items-center bg-info"
          style={{
            textAlign: "start",
            height: "80px",
            width: "100%",
            fontSize: "24px",
            fontWeight: "700",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
          variant="outline-light"
          onClick={sortingCountry}
        >
          Country
        </Button>

        <Button
          className="d-flex align-items-center bg-info"
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
          onClick={sortingConfirmed}
        >
          Total Confirmed
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ListHeader;
