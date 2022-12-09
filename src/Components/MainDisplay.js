import { useEffect, useState  } from "react";
import { Link , Switch , Route } from "react-router-dom";
import ArticleList from "./ArticlesList";
import ArticleSummaryList from "./ArticlesSummaryList";
import ReadingList from "./ReadingList";

const gNewsKey = process.env.REACT_APP_GNEWS_API_KEY 


function MainDisplay({ user }){
    const [ articles, setArticles ] = useState([]);
    const [ articlesInDb, setArticlesInDb ] = useState([]);
    const [ summaries, setSummaries ] = useState([]);

    function getGnews(){
        const newsUrl = `https://gnews.io/api/v4/top-headlines?token=${gNewsKey}&topic=world&lang=en&max=20`   

        fetch(newsUrl)
        .then(r => r.json())
        .then(d => { 
            setArticles(d.articles)
        })
        .catch(e => {
            console.log(e.errors)
        })
}

    function getReadingList(){
        fetch('/articles')
        .then(r => r.json())
        .then(d => setArticlesInDb(d))
    }

    function getAllSummarries(){
        fetch('/summaries')
        .then(r => r.json())
        .then(d => { 
            setSummaries(d)
        })
    }
    
    useEffect(() => { 
        getGnews();
        getReadingList();
        getAllSummarries();
    },[])

    if(user){
        return(
            <div>
                <Link to="/home/reading_list" className="text-xl">Your Reading List </Link>
                <Link to="/home/my_summaries" className="text-xl">Your Summaries</Link>
                <Switch>
                     <Route path="/home/reading_list">
                        <ReadingList articles={articlesInDb} updateFunction={getReadingList} />
                    </Route>

                    <Route path="/home/my_summaries">
                        <ArticleSummaryList allSummaries={summaries} />
                    </Route>

                    <Route path="/home">
                        <ArticleList articles={articles} updateFunction={getReadingList} user={user}/>
                    </Route>

                </Switch>
            </div>  
        )

    } else { 
        return (
            <div className="p-4 m-4 text-xl">
                <h2> You Need to Log In or Sign Up To Access The Site</h2>
                <div className="flex text-center justify-center gap-4 p-6">
                    <button className="border rounded-lg p-2 bg-stone-300 text-blue-500 hover:text-slate-50 hover:bg-blue-500">
                        <Link to="/login">Log In Here</Link>
                    </button>
                    <button className="border rounded-lg p-2 bg-stone-300 text-blue-500 hover:text-slate-50 hover:bg-blue-500">
                        <Link to="/signup">Sign Up Here </Link>
                    </button>
                </div>
            </div>
        )
    }

    
}

export default MainDisplay;

