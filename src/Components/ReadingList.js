import Article from "./Article";

function ReadingList( { articles }){

    return (
        <div>
            { articles.length === 0 ? <h1 className="text-2xl p-2"> Oops, theres nothing here!</h1> : <h1 className="text-xl p-2"> Choose any of these to read today! </h1> } 
            <div className="grid grid-cols-2 p-3 m-3 gap-3">
                { articles.map((article) => {
                    return <Article key={articles.indexOf(article)} article={article}/>
                })}
            </div>
        </div>
    )
}

export default ReadingList;