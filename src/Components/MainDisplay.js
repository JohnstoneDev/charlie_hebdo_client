import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import ArticleList from "./ArticlesList";

// const mySecret = process.env.REACT_APP_NEWS_API_KEY 
// const gNewsKey = process.env.REACT_APP_GNEWS_API_KEY 


function MainDisplay({ user }){
    const [ articles ] = useState([])

    // function addArticleToReadingList(){

    // }

    // function deleteArticleFromReadingList(){
        
    // }

    function getGnews(){
        // const newsUrl = `https://gnews.io/api/v4/top-headlines?token=${gNewsKey}&topic=world&lang=en&max=20`   
        
        // fetch('http://localhost:3000/articles')
        // .then(r => r.json())
        // .then(d => { 
        //     console.log(d)
        //     setArticles(d)
        // })
}
    
    useEffect(() => { 
        getGnews();
    },[])

    if(user){
        return(
            <>
                <ArticleList articles={articles}/>
            </>
        )
    } else { 
        return (
            <div>
                <h2> You Need to Log In or Sign Up To Access The Site</h2>
                <div className="flex text-center justify-center gap-4">
                    <button>
                        <Link to="/login">Log In Here</Link>
                    </button>
                    <button>
                        <Link to="/signup">Sign Up Here </Link>
                    </button>
                </div>
            </div>
        )
    }

    
}

export default MainDisplay;

// Attempt push after merge
