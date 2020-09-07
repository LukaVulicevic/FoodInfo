import React from 'react'

const FoodCard = ({item}) => {
    return (
        <div className="food-card">

            <h2 className="food-card-title">
                {item.title}
            </h2>

            <div className="food-card-body">

                <ul className="food-card-info">
                    <li><i className="far fa-clock"></i> {item.readyInMinutes} min.</li>
                    <li><i className="far fa-user"></i> {item.servings }</li>
                    <li>{(item.pricePerServing / 100).toFixed(2)}$ / <i className="far fa-user"></i></li>
                    <li>Gluten free: {item.glutenFree ? 'Yes' : 'No'}</li>
                </ul>

                <p className="food-card-summary" dangerouslySetInnerHTML={{__html: item.summary}}></p>

                <ol className="food-card-instructions">
                    {item.analyzedInstructions[0].steps.map ( step => (
                        <li key={step.number}>{step.step}</li>
                    ))}
                </ol>
            </div>        
        </div>
    )
}

export default FoodCard