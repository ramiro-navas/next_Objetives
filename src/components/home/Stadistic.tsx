import React from "react";

function Stadistic({ title, porcent, complete, amount }: any) {
  const p: number = 50;
  return (
    <div className="w-10/12 bg-back rounded-16 p-5">
      <h2 className="font-bold text-20 text-center text-titles font-roboto">{title}</h2>
      <div className="w-full relative flex items-center justify-center">
        <div>
          <svg>
            <defs>
              <linearGradient id="linearS">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                <stop offset="10%" stopColor="#87E5D3" />
                <stop offset="50%" stopColor="#BAACDD" />
              </linearGradient>
            </defs>
            <circle
              className="fill-none stroke-font stroke-10 origin-top  flex items-center justify-center"
              r={"55"}
              cx={"50%"}
              cy={"50%"}
              pathLength={100}
            />
            <circle
              className="fill-none  stroke-10 flex items-center  justify-center"
              style={{
                strokeDasharray: p + ",100",
                transform: "rotate(-90deg)",
                transformOrigin: "50%",
                stroke: `url(#linearS)`,
              }}
              r={"55"}
              cx={"50%"}
              cy={"50%"}
              pathLength={100}
            />
          </svg>
        </div>
        <p className="font-extrabold text-26 absolute text-center font-roboto ">{p}%</p>
      </div>
      <div className="w-full grid grid-cols-2  bg-font rounded-16 p-2">
        <div
          className="grid justify-center"
          style={{
            borderRight: "1px solid ",
            borderImage:
              "linear-gradient(to bottom, rgba(186,172,221,1) 0%, rgba(135,229,211,1) 50%, rgba(255,255,255,0) 100%) 1",
          }}
        >
          <h3 className="font-bold text-12 text-white text-center font-roboto">
            Completado
          </h3>
          <p className="font-bold text-12 text-titles text-center font-roboto">
            17.159.000
          </p>
        </div>
        <div className="grid justify-center">
          <h3 className="font-bold text-12 text-white text-center font-roboto">total</h3>
          <p className="font-bold text-12 text-titles text-center font-roboto">
            29.659.000
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stadistic;
