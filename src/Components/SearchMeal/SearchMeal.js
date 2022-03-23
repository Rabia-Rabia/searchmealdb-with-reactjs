import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import "./SearchMeal.css"

const SearchMeal = () => {
    const [meals, setMeals] = useState([]);
    const [searchMeal, setSearchMeal] = useState('');

        useEffect(() => {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
        }, [searchMeal])

    const searchFood = e => {
        setSearchMeal(e.target.value)
    }
    
    return (
        <div>
            <input onChange={searchFood} type="text" name='' id=''/>
            <h2>Find Your Food</h2>
            <div className="container">
            <div className="menu">
                    {meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>)}
                
            </div>
            </div>
        </div>
    );
};

export default SearchMeal;