import { test as image } from "@/helpers/helpers";
import React, { useContext } from "react";
import { addPoint } from "@/helpers/addPoint";
import Context from "@/Context/Context";

type Props = {
  title: string;
  amount: number;
  progress: number;
  image: string | undefined;
};

function Objetive(props: Props) {
  let p: number = 0;

  return (
    <div className="flex pl-10">
      <section>
        <h2 className="text-center text-titles text-16 font-extrabold font-roboto">
          {p}%
        </h2>
        <div className="flex relative items-center justify-center">
          <svg className="w-110 h-110  ">
            <defs>
              <linearGradient id="linear">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                <stop offset="10%" stopColor="#87E5D3" />
                <stop offset="70%" stopColor="#BAACDD" />
              </linearGradient>
            </defs>
            <circle
              r={50}
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
            src={props.image}
            alt="objetive_icon"
            className="w-90 h-90 absolute flex items-center justify-center  rounded-100%"
          />
        </div>
      </section>
      <section className="grid items-center ml-10">
        <div>
          <h2 className="text-white text-30 font-extrabold font-roboto">
            {props.title}
          </h2>
          <p className="text-titles text-16 font-extrabold font-roboto">
            {addPoint(props.progress)} / {addPoint(props.amount)}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Objetive;
