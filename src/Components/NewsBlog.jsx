import NewsItem from "./NewsItem";

export default function NewsBlog(){
    return(
        <div className="news-blog">
            <div className="blog-section">
                <h2>Все</h2>
                <h2>Акции</h2>
                <h2>Новости</h2>
            </div>
            <NewsItem/>
        </div>
    )
}