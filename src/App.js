import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Header from "./Components/Header";
import { $countryData } from "./Components/http";
import Listcontent from "./Components/ListContent";
import ListHeader from "./Components/ListHeader";

function App() {
  const [statistic, setStatistic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCountry, setSearchCountry] = useState("");
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [info, setInfo] = useState([]);

  const onOpenCountryInfo = (item) => {
    setInfo([item]);
    setShowCountryInfo(true);
  };

  const onCloseCountryInfo = () => {
    setShowCountryInfo(false);
  };
  const searchCountryInfo = (e) => {
    setSearchCountry(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      $countryData
        .then((res) => {
          setStatistic(res.data.Countries);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner
          animation={"grow"}
          variant="info"
          className="position-absolute top-50 start-50 translate-middle"
        />
      ) : (
        <div>
          <Header
            searchCountryInfo={searchCountryInfo}
            searchCountry={searchCountry}
          />
          <ListHeader statistic={statistic} setStatistic={setStatistic} />

          <Listcontent
            statistic={statistic}
            searchCountry={searchCountry}
            showCountryInfo={showCountryInfo}
            info={info}
            onOpenCountryInfo={onOpenCountryInfo}
            onCloseCountryInfo={onCloseCountryInfo}
          />
        </div>
      )}
    </>
  );
}

export default App;
