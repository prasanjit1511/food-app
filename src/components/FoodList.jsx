import Fooditem from "./Fooditem"


function FoodList({foodData, setFoodId}) {
  return (
    <div>
         {foodData.map((food) => (
         <Fooditem key={food.id} food={food} setFoodId={setFoodId} />
        ))}
    </div>
  )
}

export default FoodList
