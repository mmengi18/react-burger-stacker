import React, { Component } from 'react'

class Ingredient extends Component {
	render() {
		// I want to render a background color
        // I want to render the name of a ing
        // if there is a key with this `name` extract it
        const { name, color } = this.props.ingredient
		return (
            <p 
                style={{backgroundColor: color}}
                onClick={this.props.clickFunc}
                id={this.props.itemKey}
            >
                {name}
            </p>
        )
	}
}

export default Ingredient