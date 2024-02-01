import React from "react";
import PropTypes from "prop-types";

function DishDetails({ dish }) {
	// Destructuring to extract name and description from the dish prop
	const { name, description } = dish;
	return (
		<div>
			{/* Displaying the dish name  */}
			<h2>{name}</h2>
			{/* Displaying the dish Description  */}
			<p>{description}</p>
		</div>
	);
}

// PropType validation for DishDetails props

DishDetails.propTypes = {
	dish: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
	}).isRequired,
};

export default DishDetails;
