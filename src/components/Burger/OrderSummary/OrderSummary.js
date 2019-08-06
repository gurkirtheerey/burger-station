import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(el => {
    return (
      <li key = {el}><span style={{textTransform: 'capitalize'}}>{
      el}</span>: {props.ingredients[el]}</li>);
  });
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Contine to Checkout?</p>
      <p> <span style={{fontWeight: 'bold'}}>TOTAL: $</span>{props.price.toFixed(2)} </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    
      <Button btnType="Success"clicked={props.purchaseContinued} >CONTINUE</Button>
    
    </Aux>
  );  
};

export default orderSummary;