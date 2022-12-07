import { useEffect, useState  } from "react";
import { Link , Switch , Route } from "react-router-dom";
import ArticleList from "./ArticlesList";
import ArticleSummaryList from "./ArticlesSummaryList";
import ReadingList from "./ReadingList";


// const mySecret = process.env.REACT_APP_NEWS_API_KEY 
// const gNewsKey = process.env.REACT_APP_GNEWS_API_KEY 


function MainDisplay({ user }){
    const [ articles, setArticles ] = useState([]);
    const [ articlesInDb, setArticlesInDb ] = useState([]);
    const [ summaries, setSummaries ] = useState([]);

    function getGnews(){
        // const newsUrl = `https://gnews.io/api/v4/top-headlines?token=${gNewsKey}&topic=world&lang=en&max=20`   
        
        fetch('/articles')
        .then(r => r.json())
        .then(d => { 
            setArticles(d)
        })
}

    function getReadingList(){
        fetch('/database_articles')
        .then(r => r.json())
        .then(d => setArticlesInDb(d))
    }

    function getAllSummarries(){
        fetch('/summaries')
        .then(r => r.json())
        .then(d => { 
           console.log(d) 
            setSummaries(d)
        })
    }
    
    useEffect(() => { 
        getGnews();
        getReadingList();
        getAllSummarries()
    },[])

    // if(user){
        return(
            <div>
                <Link to="/home/reading_list" className="text-xl">Your Reading List </Link>
                <Link to="/home/my_summaries" className="text-xl">Your Summaries</Link>
                <Switch>
                     <Route path="/home/reading_list">
                        <ReadingList articles={articlesInDb} updateFunction={getReadingList} />
                    </Route>

                    <Route path="/home/my_summaries">
                        <ArticleSummaryList summaries={summaries} />
                    </Route>

                    <Route path="/home">
                        <ArticleList articles={articles} updateFunction={getReadingList}/>
                    </Route>
                </Switch>
            </div>  
        )

    // } else { 
    //     return (
    //         <div>
    //             <h2> You Need to Log In or Sign Up To Access The Site</h2>
    //             <div className="flex text-center justify-center gap-4">
    //                 <button>
    //                     <Link to="/login">Log In Here</Link>
    //                 </button>
    //                 <button>
    //                     <Link to="/signup">Sign Up Here </Link>
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }

    
}

export default MainDisplay;

// Attempt push after merge
