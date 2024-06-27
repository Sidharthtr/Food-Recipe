import React from "react";

const RecipieDetailsForm = ({ recipeDetail }) => {
  console.log(recipeDetail);
  return (
    <div className="flex flex-row gap-8 p-8">
      <div className="ml-6 w-3/5">
        <img
          src={recipeDetail.image}
          alt={recipeDetail.name}
          className="w-2/3 rounded object-cover"
        />
      </div>
      <div className="flex flex-col p-4">
        <h3 className="text-3xl font-bold mt-3">{recipeDetail.name}</h3>
        <div className="mt-5 flex flex-row justify-between">
          <p className="text-xl text-gray-700 ">{recipeDetail?.mealType[0]}</p>
          <p className="text-xl text-gray-700">{recipeDetail?.cuisine}</p>
        </div>
        <h3 className="text-lg font-bold text-gray-700 mt-3 mb-2">
          Ingredients
        </h3>
        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
          {recipeDetail?.ingredients.map((item) => (
            <li key={item.index}>{item}</li>
          ))}
        </ul>
      </div>
    {/* <div>{recipeDetail.instructions.map((instruction)=>(
        <p key={instruction.index}>{instruction}</p>
    ))}</div> */}
    </div>
  );
};

export default RecipieDetailsForm;
