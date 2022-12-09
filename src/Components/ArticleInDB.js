import { useState } from 'react'; 

function ArticleInDb( { article , updateFunction  }){ 
    const { id ,title, description , content, url , image , source_name , summary  } = article 
    const [ userSummary , setUserSummary ] = useState(""); 
    const [ toggleSummary, setToggleSummary ] = useState(true); 

    function deleteFromDatabase(){
      
        fetch(`https://web-production-045a.up.railway.app/articles/${id}`,{
            method : 'DELETE', 
            headers : { 'Content-Type' : "application/json"}, 
        })
        .then(r => r.json())
        .then(() => updateFunction())
        .catch(e => console.log(e))
      }

      function patchSummary(e){
        e.preventDefault();

        fetch(`https://web-production-045a.up.railway.app/articles/${id}`,{
            method : 'PATCH',
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify( { summary : userSummary })
        })
        .then(r => r.json())
        .then(d => {
            console.log(d)
            updateFunction()
            console.log(toggleSummary)
            setToggleSummary(true)
        })
        .catch(e => console.log(e))
      }

    return(
            <div className="flex gap-3 p-2">
                <img src={image} alt="" className="object-fill w-1/2 border rounded-lg"/>
                 <div className="grid text-left">
                        <h3 className="font-bold italic">{source_name}</h3>
                        <h3 className="text-lime-900">{title}</h3>
                        <p>{description}</p>
                    <section> 
                        <p>{content}</p>          
                    </section>

                    <article>
                        {summary === "" ? <h3 className='font-bold'>You haven't written a summary for this article </h3> : <h3 className="font-bold pt-3">Your Summary on this: </h3> }
                        <button hidden={summary !== "" } onClick={()=> setToggleSummary(false)} className="text-blue-800 font-semibold">Write One</button>
                        <p>
                            {summary}
                        </p>
                        <div hidden={toggleSummary}>
                        <form onSubmit={patchSummary} className="flex flex-col">
                            <input type="text" value={userSummary} onChange={(e) => setUserSummary(e.target.value)} className="h-60 text-left"/>
                            <input type="submit" className='font-semibold text-left text-slate-400 border rounded-lg p-2 bg-slate-800 hover:bg-slate-500 hover:text-black px-2'/>
                        </form>
                        </div>
                    </article>
                    <a href={url} target="blank" className="font-bold text-blue-600"> More Here </a>
                <button onClick={deleteFromDatabase} className="font-semibold text-left text-slate-400 border rounded-lg p-2 bg-slate-800 hover:bg-slate-500 hover:text-black px-2">I'm Done Reading This</button>
                </div>
            </div>
    )
}

export default ArticleInDb;