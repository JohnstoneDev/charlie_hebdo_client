import { useEffect } from "react";
// const mySecret = process.env.REACT_APP_NEWS_API_KEY 
// const gNewsKey = process.env.REACT_APP_GNEWS_API_KEY 

function MainDisplay(){

    // function getGnews(){
    //     fetch(`https://gnews.io/api/v4/world?token=${gNewsKey}&topic=breaking-news`)
    //     .then(r => r.json())
    //     .then(d => console.log(d))
    // }

    useEffect(() => { 
        // fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-12-03&sortBy=popularity&apiKey=${mySecret}`)
        // .then(r => r.json())
        // .then(d => console.log(d.articles))

        // getGnews()
    },[])
    return(
        <>
        <h2 className="text-orange-200 pt-3 text-2xl">All Components Should be housed here and everything else will receive state as props!</h2>
     </>
    )
}

export default MainDisplay;


// Attempt push after merge
