export default function NewsItem(){
    let newsItem = {
        itemLink : "#",
        itemImgLink : "https://www.mechta.kz/storage/2023/12/05/18ba94159633722904a52c813f60d06427b32746.jpg",
        itemTitle : "Новогодние скидки в Мечте!",
        itemText : "Успейте воспользоваться выгодными предложениями."
    }
    let arrayItemContent = [newsItem,newsItem,newsItem,newsItem,newsItem,newsItem,newsItem,newsItem,newsItem,newsItem,newsItem]
    return(
        <div className="news-items">
            {arrayItemContent.map(element=>
                <div className="news-item">
                        <a href={element.itemLink}>
                            <img className="news-item-img" src={element.itemImgLink}></img>
                            <div className="news-item-title">{element.itemTitle}</div>
                            <div className="news-item-text">{element.itemText}</div>
                        </a>
                </div>
            )}
        </div>
    )
}