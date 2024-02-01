import { useState, useEffect } from "react"

export default function Header(){
    let arrayTop = [
        'О компании',
        'Адреса магазинов',
        'Личный кабинет'
    ]
    let arrayMid = [
        'LOGO',
        'LIKE',
        'equolity',
        'Cart'
    ]
    let arrayBot = [
        'Каталог',
        'Акции',
        'Ноутбуки',
        'Смартфоны',
        'Телевизоры',
        'Обогреватели',
        'Товары для дома'
    ]
    const [inputValue,setInputValue] = useState('')
    function onInputChange(element){
        console.log(element.target.value)
        setInputValue(element.target.value)
    }
    useEffect(() => {
        
    },[inputValue])
    return(
        <header className="header">
            <nav>
                <ul className="topNav">
                     {arrayTop.map(element=>
                         <li>
                            <a href="#">{element}</a>
                         </li>)}
                </ul>
                <ul className="midNav">
                    <input value={inputValue} onChange={(element) => onInputChange(element)} type="search"/>
                    {arrayMid.map(element=>
                        <li>
                            <a href="#">{element}</a> 
                        </li>)}
                </ul>
               <ul className="botNav">
               {arrayBot.map(element=>
                        <li>
                            <a href="#">{element}</a> 
                        </li>)}
               </ul>
                {inputValue !== "" ? <div className="drop-bar">asdasdasd</div>:null}
            </nav>
    </header>
    )
}