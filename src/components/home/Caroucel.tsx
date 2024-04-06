import { logo as image } from "@/helpers/helpers";
import React from "react";

function Caroucel() {
  const p: number = 100;
  return (
    <div className="w-full h-166 bg-back ml-16 rounded-16">
      <h2 className="text-center text-30 text-titles font-extrabold font-roboto ">
        Objetivo reciente
      </h2>
      <div className="flex pl-10">
        <section>
          <h2 className="text-center text-titles text-16 font-extrabold font-roboto">
            20%
          </h2>
          <div className="grid relative items-center">
            <svg className="w-90 h-90  ">
              <defs>
                <linearGradient id="linear">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                  <stop offset="10%" stopColor="#87E5D3" />
                  <stop offset="70%" stopColor="#BAACDD" />
                </linearGradient>
              </defs>
              <circle
                r={40}
                cx={"50%"}
                cy={"50%"}
                pathLength={100}
                className="fill-none  stroke-10 flex items-center  justify-center absolute top-0 r-0"
                style={{
                  strokeDasharray: p + ",100",
                  transform: "rotate(-90deg)",
                  transformOrigin: "50%",
                  stroke: "url(#linear)",
                }}
              />
            </svg>
            <img
              src={image}
              alt="objetive_icon"
              className="w-70 h-70 ml-10 absolute rounded-100%"
            />
          </div>
        </section>
        <section className="grid items-center ml-10">
          <div>
            <h2 className="text-white text-30 font-extrabold font-roboto">Benelli 180s</h2>
            <p className="text-titles text-16 font-extrabold font-roboto">
              10.500.00 / 15.000.000
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Caroucel;
