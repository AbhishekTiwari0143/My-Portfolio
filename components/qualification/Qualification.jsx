/* eslint-disable no-unused-vars */
import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personel Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Computer Application🎓
                </h3>
                <span className="qualification__subtitle">
                  Dronacharya Government Collage - Gurugram
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__round"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__round"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Secondary🧪</h3>
                <span className="qualification__subtitle">HBSE - 91.8%</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Secondary</h3>
              <span className="qualification__subtitle">HBSE - 88%</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2018 - 2019
              </div>
            </div>

            <div>
              <span className="qualification__round"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
