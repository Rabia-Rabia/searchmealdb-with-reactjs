import React, { Component } from 'react';
import "./Meal.css"

class Meals extends Component {
    render() {
        const {meal} = this.props
        return (
            <div className="meals">
            <img src={meal.strMealThumb} alt="" />
            <h4>{meal.strMeal}</h4>
            <p>{meal.strArea}</p>
            <button>Add this Food</button>
        </div>
        );
    }
}

export default Meals;
