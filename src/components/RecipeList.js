import Link from 'next/link'
import React from 'react'
import {
    Card,
    CardContent
  } from "@/components/ui/card"

const RecipeList = ({ recipeList }) => {
  return (
    <div className='flex flex-col align center' >
      <h2 className='text-grey-900 text-lg mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full mb-8'>Recipe List
      </h2>
      <div className='mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
           {recipeList && recipeList.length>0 
           ? recipeList.map((recipe) => (
            <Link href={`/recipie-list/${recipe.id}`} key={recipe.id}>
            <Card>
              <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {recipe.name}
                  </h3>
                  <div className="mt-4 flex items-center flex-wrap gap-2">
                    <p className="text-lg text-gray-600">
                      Rating: {recipe.rating}
                    </p>
                    <div className="ml-auto">
                      <p className="text-lg text-gray-600 font-bold">
                        {recipe.cuisine}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
           )) : null}
      </div>
      </div>
    </div>
  )
}

export default RecipeList
