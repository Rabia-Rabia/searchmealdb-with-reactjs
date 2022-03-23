import React, { Component } from 'react';
import "./Meal.css"

class Meals extends Component {
    render() {
        const {meal, OrderNow} = this.props
        return (
            <div className="meals">
            <img src={meal.strMealThumb} alt="" />
            <h4>{meal.strMeal}</h4>
            <p>{meal.strArea}</p>
            <button onClick={() => OrderNow(meal)}>Add this Food</button>
        </div>
        );
    }
}

export default Meals;