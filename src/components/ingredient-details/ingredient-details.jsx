import React from 'react';
import IngredientDetailsStyles from './ingredient-details.module.css';
import {useSelector} from "react-redux";

const IngredientDetails = () => {

  const {ingredient} = useSelector(state => state.details);

  return (
    <>
      <div className={IngredientDetailsStyles.ingredient__list}>
        <img src={ingredient.image_large} alt={ingredient.name}/>
        <p
          className={`${IngredientDetailsStyles.ingredient__title} text text_type_main-medium mt-4`}>{ingredient.name}</p>
        <div className={`${IngredientDetailsStyles.ingredient__description} mt-8`}>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
          </div>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
          </div>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
          </div>
          <div>
            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default IngredientDetails;