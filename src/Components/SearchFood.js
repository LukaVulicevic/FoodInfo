import React, {useState} from 'react'
import FoodCard from './FoodCard'

const SearchFood = () => {

    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState([])

    const searchFoods = async (event) => {
        event.preventDefault()
        const apiKey = '?apiKey=9921ae6db72542758de24e58d8e63a57'
        const url = 'https://api.spoonacular.com/recipes/complexSearch'

        let recipesIdArr = []

        // Getting array of recipe IDs from user input
        try {
            const response = await fetch(`${url}${apiKey}&query=${query}`)
            const data = await response.json()
            recipesIdArr = data.results.map( recipe => recipe.id).join(',')
            
        } catch (error) {
            console.log(error)
        }
     
        // Making another API call to get information about recipes

        const infoUrl = 'https://api.spoonacular.com/recipes/informationBulk'

        try {
            const recipesPromise = await fetch(`${infoUrl}${apiKey}&ids=${recipesIdArr}`)
            const recipesData = await recipesPromise.json()
            setRecipes(recipesData)
            console.log(recipesData)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container food-flex">
            <form className="search-form" onSubmit={searchFoods}>
                    <input 
                        className="search-input" 
                        name="query" 
                        type="text"
                        placeholder="Search food"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="button search" type="submit">
                        Search
                    </button>
            </form>
            <div className="recipes-list">
            {recipes.map( item => (
                <FoodCard item={item} key={item.id}/>
            ))}
            </div>
        </div>
    )
}

export default SearchFood