import Article from "./Article";

function ArticleList( { articles }){ 
    return <>
        {articles.map((article) => {
            return <Article key={article.publishedAt} article={article}/>
        })}
    </>
}

export default ArticleList;