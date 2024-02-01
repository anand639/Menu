import "./App.css";
import React, { useState } from "react";
import MenuList from "./components/MenuList";
import DishDetails from "./components/DishDetails";

function App() {
	// State for holding the currently selected dish
	const [selectedDish, setSelectedDish] = useState(null);

	// Sample data for the dishes
	const dishes = [
		{ id: 1, name: "Spaghetti", description: "Classic Italian Pasta" },
		{
			id: 2,
			name: "Margherita Pizza",
			description: "Traditional Neapolitan pizza",
			//...more dishes
		},
	];

	return (
		<div>
			<h1>Restaurant Menu</h1>
			{/* Menulist is passed the dishes data and a function to update the selected dish */}
			<MenuList dishes={dishes} onDishSelect={setSelectedDish}></MenuList>
			{/* DishDetails is rendered conditionally based on if dish is selected  */}
			{selectedDish && <DishDetails dish={selectedDish}></DishDetails>}
		</div>
	);
}

export default App;
