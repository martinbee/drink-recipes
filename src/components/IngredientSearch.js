import React from 'react';

export default function IngredientSearch(props) {
  return (
    <form onSubmit={props.search}>
      <input
        type="text"
        placeholder="Search by ingredient!"
        onChange={props.updateIngredient}
        value={props.ingredient}
      />
    </form>
  );
}
