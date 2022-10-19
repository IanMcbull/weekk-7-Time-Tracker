import Card from "./Card"
let arrayCounter = [1,2,3,4,5,6]
function Cards() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
       {arrayCounter.map(item=><Card/>)}
    </div>
  )
}

export default Cards