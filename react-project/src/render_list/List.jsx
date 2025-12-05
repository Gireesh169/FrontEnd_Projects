


function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana" , calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Mango", calories: 150 },
  ];

 
//   fruits.sort((a,b)=>a.calories - b.calories); Ascending order based on calories
//   fruits.sort((a,b)=>a.name.localeCompare(b.name)); Alphabetical order
//   fruits.sort((a,b)=>b.calories - a.calories); Reverse order based on calories
// fruits.sort((a,b)=>b.name.localeCompare(a.name));  Alphabetical order reverse
  const fruitsList = fruits.map((fruit, index) => (
    <li key={fruit.id}>
        {fruit.name} - <b>{fruit.calories}</b> 

        </li>
  ));

  return <ol>{fruitsList}</ol>;
}

export default List;
