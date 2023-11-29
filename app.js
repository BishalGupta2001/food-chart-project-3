// this line is defineing that data.json  file ka jitna cheese hai wo require k help se yahn le aye or jsondata ma dal diye
const jsonData = require('./data.json'); //requires helps us to load modules

let output;

// - [ ]  list all the food items 

function listAllTheFoodItems (data){
	let ans = jsonData.map((item) => {
		return item.foodname;
	});
	return ans;
};

// - [ ]  list all the food items with category  
// vegetables , Fruit , Protein , Nuts, Grain, Dairy
	function itemsWithCategory (data, category) {
		return data.filter((item) => item.category === category && item.foodname).map((item) => item.foodname);
	}

	// - [ ]  list all the food items with calorie above 100
	function calorieGreaterThan100 (data, caloriess){
		return data.filter((item) => item.calorie > caloriess);
	}

	// - [ ]  list all the food items with calorie below 100
	function calorieLessThan100 (data, caloriess){
		return data.filter((item) => item.calorie < caloriess);
	}
	
	// - [ ]  list all the food items with highest protien content to lowest
	function hightToLowProtien (data){
		for(let a=0; a<data.length; a++){
			for(let b=a+1; b<data.length; b++){
				if(data[a].protiens < data[b].protiens){
					let temp = data[a];
					data[a] = data[b];
					data[b] = temp; 
				}
			}
		}
		return data;
	}
	
// - [ ]  list all the food items with lowest cab content to highest

function lowToHighCab (data) {
	for(let a=0; a<data.length; a++){
		for(let b=a+1; b<data.length; b++){
			if(data[a].cab > data[b].cab){
				let temp = data[a];
				data[a]= data[b];
				data[b] = temp;
			}
		}
	}
	return data;
}

	output = listAllTheFoodItems(jsonData);
	console.log('All food items:', output);
	console.log('-----------------------------------------------------------------------------------------------------');

	output = itemsWithCategory(jsonData, 'Vegetable');
	console.log('items with category Vegetable:', output);
    console.log('-----------------------------------------------------------------------------------------------------');
	
	output = itemsWithCategory(jsonData, 'Fruit');
	console.log('items with category Fruit:', output);
	console.log('-----------------------------------------------------------------------------------------------------');
	
	output = itemsWithCategory(jsonData, 'Protein');
	console.log('items with category Protein:', output);
	console.log('-----------------------------------------------------------------------------------------------------');

	output = itemsWithCategory(jsonData, 'Nuts');
	console.log('items with category Nuts:', output);
	console.log('-----------------------------------------------------------------------------------------------------');
	
	output = itemsWithCategory(jsonData, 'Grain');
	console.log('items with category Grain:', output);
	console.log('-----------------------------------------------------------------------------------------------------');

	output = itemsWithCategory(jsonData, 'Dairy');
	console.log('items with category Dairy:', output);
	console.log('-----------------------------------------------------------------------------------------------------');

	output = calorieGreaterThan100(jsonData, 100);
	console.log('Calorie greater than 100:', output);
    console.log('-----------------------------------------------------------------------------------------------------');
	
	output = calorieLessThan100(jsonData, 100);
	console.log('Calorie Less than 100:', output);
    console.log('-----------------------------------------------------------------------------------------------------');

	output = hightToLowProtien(jsonData);
	console.log('item with Highest to Lowest Protien', output);
    console.log('-----------------------------------------------------------------------------------------------------');

	output =  lowToHighCab(jsonData);
	console.log('item with Lowest  to Highest Cab', output);