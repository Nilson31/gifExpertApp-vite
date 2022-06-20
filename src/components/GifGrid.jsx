import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {  


    const {images,isLoading}=useFetchGifs(category)       


  return (
    <>
      <h3>{category}</h3>
      {isLoading&&(<h2>Cargando...</h2>)}      
      <div className="card-grid">
        {
            images.map((img)=>(
              <GifGridItem key={img.id}
              {...img}/>
            ))
        }
      </div>
    </>
  );
};