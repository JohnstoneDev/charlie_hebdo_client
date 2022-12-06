function Article( { article , clickFunction , user }){ 
    const { title, description , content, url , image , source } = article 

    function postToDatabase(){
        const thisArticle = {
            title : title , 
            description : description, 
            content : content , 
            url : url, 
            image : image, 
            source_name : source.name, 
            source_url : source.url, 
            summary : ""
            // user_id : user.id 
        }

        console.log(thisArticle); 

        // fetch('/database_articles',{
        //     method : 'POST', 
        //     headers : { 'Content-Type' : "application/json"}, 
        //     body : JSON.stringify(thisArticle)
        // })

    }

    return(
            <div className="flex gap-3 p-2">
                <img src={image} alt="" className="object-fill w-1/2 border rounded-lg"/>
                 <div className="grid text-left">
                        <h3 className="font-bold italic">{source.name}</h3>
                        <h3 className="text-lime-900">{title}</h3>
                        <p>{description}</p>
                    <section> 
                        <p>{content}</p>          
                    </section>
                    <a href={url} target="blank" className="font-bold text-blue-600"> More Here </a>
                <button onClick={postToDatabase} className="font-semibold text-left text-slate-400 border rounded-lg p-2 bg-slate-800 hover:bg-slate-500 hover:text-black px-2">Add This To My Reading List</button>
                </div>
            </div>
    )
}

export default Article;