import React from "react";
import PropTypes from "prop-types";

function MenuList({ dishes, onDishSelect }) {
	return (
		<ul>
			{/* map through the dishes array and create a list item for each one */}
			{/* For each dish, render a list item */}
			{/* When clicked, it calls onDishSelect with dish as a argument */}
			{dishes.map((dish) => (
				<li key={dish.id} onClick={() => onDishSelect(dish)}>
					{dish.name}
				</li>
			))}
		</ul>
	);
}

// PropType validation for MenuList props
MenuList.propTypes = {
	dishes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string,
		})
	).isRequired,
	onDishSelect: PropTypes.func.isRequired,
};

export default MenuList;
