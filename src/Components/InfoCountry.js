import React from "react";
import { Modal } from "react-bootstrap";

import heartbeat from "../image/heartbeat.png";
import skull from "../image/skull.png";
import fileMedical from "../image/file-medical.png";

import ButtonOk from "./ButtonOk";

const InfoCountry = ({ show, onHide, info }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        {info.map((countryItem) => (
          <Modal
            key={countryItem.ID}
            show={show}
            onHide={onHide}
            centered
            style={{ borderRadius: "20px", border: "none" }}
          >
            <Modal.Body>
              <h2
                className="text-center mt-1"
                style={{ fontSize: "48px", fontWeight: "700" }}
              >
                {countryItem.Country}
              </h2>
              <div style={{ fontSize: "24px", color: "#666666" }}>
                <div className="d-flex mt-4 mb-1">
                  <img
                    src={heartbeat}
                    width={30}
                    height={30}
                    alt="heartbeat"
                    className="ms-2"
                  />
                  <p className="ms-4">Total Confirmed</p>
                  <p className="ms-auto me-2">{countryItem.TotalConfirmed}</p>
                </div>

                <div className="d-flex mt-4 mb-1 ">
                  <img
                    src={skull}
                    width={30}
                    height={30}
                    alt="skull"
                    className="ms-2"
                  />
                  <p className="ms-4">Total Deaths</p>
                  <p className="ms-auto me-2">{countryItem.TotalDeaths}</p>
                </div>
                <div className="d-flex mt-4 mb-1">
                  <img
                    src={fileMedical}
                    width={23}
                    height={30}
                    alt="fileMedical"
                    className="ms-3"
                  />
                  <p className="ms-4">New Confirmed</p>
                  <p className="ms-auto me-2">{countryItem.NewConfirmed}</p>
                </div>
              </div>
            </Modal.Body>

            <div className="d-flex justify-content-center">
              <ButtonOk onHide={onHide} />
            </div>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default InfoCountry;
