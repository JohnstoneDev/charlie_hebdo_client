import Article from "./Article";

function ArticleList( { articles , updateFunction }){ 
    return(

     <div className="grid grid-cols-2 p-3 m-3 gap-3">
        {articles.map((article) => {
            return <Article key={articles.indexOf(article)} article={article} updateFunction={updateFunction}/>
        })}
    </div>
    )
}

export default ArticleList;