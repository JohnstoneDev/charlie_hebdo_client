import { useEffect, useState  } from "react";
import ArticleList from "./ArticlesList";
import LoginForm from "./LoginForm";

// const mySecret = process.env.REACT_APP_NEWS_API_KEY 
// const gNewsKey = process.env.REACT_APP_GNEWS_API_KEY 


function MainDisplay(){
    const [ articles, setArticles ] = useState([])

    function addArticleToReadingList(){

    }

    function deleteArticleFromReadingList(){
        
    }

    function getGnews(){
        // const newsUrl = `https://gnews.io/api/v4/top-headlines?token=${gNewsKey}&topic=world&lang=en&max=20`   
        fetch('http://localhost:3000/articles')
        .then(r => r.json())
        .then(d => { 
            console.log(d)
            setArticles(d)
        })
}
    
    useEffect(() => { 
        getGnews();
    },[])
    return(
        <>
            <LoginForm/>
            <ArticleList articles={articles}/>
        </>
    )
}

export default MainDisplay;


// Attempt push after merge
