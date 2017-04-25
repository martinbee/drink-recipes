import React, { Component } from 'react';
import IngredientSearch from './IngredientSearch';
import http from 'http';

export default class IngredientSearchContainer extends Component {
  state = {
    results: [],
    ingredient: '',
  };

  renderResults = () => {
    const { results } = this.state;
    const renderDrinksList = () => results.map(drink => {
      const { idDrink, strDrink, strDrinkThumb } = drink;

      return (
        <li key={idDrink} style={{ display: 'inline-block', width: '20%' }}>
          <h6>{strDrink}</h6>
          <img src={strDrinkThumb || '/public/stub-drink.jpg'} style={{ maxWidth: '100px' }}/>
        </li>
      );
    });

    return (
      <div>
        <h5>Matching Drinks</h5>
        <ul style={{ listStyle: 'none' }}>
         { renderDrinksList() }
        </ul>
      </div>
    );
  };

  getResults = (evt) => {
    evt.preventDefault();

    const { ingredient } = this.state;
    const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    http.get(url, (res) => {
      let body = '';

      res.on('data', (data) => {
        body += data;
      });

      res.on('end', () => {
        const results = JSON.parse(body).drinks;

        this.setState({ results });
      });
    });
  };

  updateIngredient = (evt) => this.setState({ ingredient: evt.target.value });

  render() {
    const { results } = this.state;

    return (
      <div>
        <IngredientSearch search={this.getResults} updateIngredient={this.updateIngredient}/>
        { results.length ? this.renderResults() : null }
      </div>
    );
  }
}
