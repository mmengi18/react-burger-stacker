import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
// map over all the added burger bits
// still going to use the Ingredient Comp
let burgerBits = props.ingredients.map((ing, idx) => (
    <li key={idx}>
        <Ingredient 
            itemKey={idx}
            ingredient={ing}
            clickFunc={props.remove}
        />
    </li>
))
    return (
        <section>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
        
}
export default BurgerPane
