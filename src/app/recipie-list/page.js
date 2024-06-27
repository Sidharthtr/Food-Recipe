import RecipeList from '@/components/RecipeList';
import React from 'react'

async function fetchListofRecipes() {
   try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data?.recipes;
   }catch{
    // console.log("error");
    throw new Error(e);
   }
}

const RecipieList = async() => {
  const recipeList = await fetchListofRecipes();
//   console.log(recipeList)
  return (
     <RecipeList recipeList={recipeList} />
  )
}

export default RecipieList
