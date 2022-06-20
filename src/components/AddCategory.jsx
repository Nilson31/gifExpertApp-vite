import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
    //console.log(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

// AddCategory.propTypes={

// }
