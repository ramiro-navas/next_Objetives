import React, { useState, useEffect } from "react";
import CaroucelCard from "../ui/CaroucelCard";
import { useAppContext } from "@/Context";
function Caroucel() {
  const {caroucel, caroucelState, setCaroucelOb, page, caroucelOb } = useAppContext();
  
  useEffect(()=>{
    setCaroucelOb(caroucelState.caroucel[page]);
  })
  

  return (
    <>
      <CaroucelCard objetive={caroucelOb} />
    </>
  );
}

export default Caroucel;
