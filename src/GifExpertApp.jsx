import React from "react";
import { useState } from "react";
import { AddCategory,GifGrid } from "./components";
//import { GifGrid } from "./components";

export const GifExpertApp = () => {
  const categoriesInitialValue = ["Naruto"];
  const [categories, setCategories] = useState(categoriesInitialValue);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>

      {/* Input para Buscar categoria */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de GIF */}
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </div>
  );
};
