import React from 'react';

const Recipes = ({title, calories, image, url, ingredients}) => {
    return(
        <div className='recipe'>
            <h3><a href={url}>{title}</a></h3>
            <h3>Calories: {Math.floor(calories)}</h3>
            <img src={image} alt=""/>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item.text}</li>
            ))}  
            </ul>
        </div>
    );
}

export default Recipes;