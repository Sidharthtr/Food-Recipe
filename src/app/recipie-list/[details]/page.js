import RecipieDetailsForm from '@/components/RecipieDetails';
import React from 'react'
async function fetchRecipeDetail(id) {
    try{
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        return data;
    }catch{
        throw new Error(e);
    }
}
const RecipieDetails = async({params}) => {
    const recipeDetail = await fetchRecipeDetail(params?.details);
    // console.log(recipeDetail);
  return (
    <RecipieDetailsForm recipeDetail = {recipeDetail}/>
  )
}

export default RecipieDetails
