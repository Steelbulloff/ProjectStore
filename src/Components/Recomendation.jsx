import Item from "./Item"

export default function Recomendation (){
    let arrayItem = [
        {
            name:"Ноутбук такой-то",
            discount:0,
            cost:200,
            img:"1738482_middle.jpg",
            bonus:300
        },
        {
            name:"Ноутбук такой-то",
            discount:0,
            cost:200,
            img:"1738482_middle.jpg",
            bonus:300
        },
        {
            name:"Ноутбук такой-то",
            discount:0,
            cost:200,
            img:"1738482_middle.jpg",
            bonus:300
        },
        {
            name:"Ноутбук такой-то",
            discount:0,
            cost:200,
            img:"1738482_middle.jpg",
            bonus:300
        },
        {
            name:"Ноутбук такой-то",
            discount:0,
            cost:200,
            img:"1738482_middle.jpg",
            bonus:300
        },
    ]
    return(
        <div class="recomendation">
                <h2>Ноутбуки</h2>
                <div class="categoria">
                    {arrayItem.map(element=>
                        <Item 
                            discount={element.discount} 
                            cost={element.cost} 
                            name={element.name} 
                            img={element.img} 
                            bonus={element.bonus}
                        />
                    )}
                </div>
            </div>
    )
}