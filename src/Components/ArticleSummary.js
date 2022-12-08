function ArticleSummary( { aSummary  }){ 
    const { title, description, image, source_name , summary } = aSummary

    return(
        <div className="flex gap-5 p-3">
            <img src={image} alt="" className="h-60 object-cover border rounded-lg"/>
            <section className="grid text-left">
                <p className="font-bold italic">{source_name}</p>
                <p>{title}</p>
                <p>{description}</p>   
                <article className="flex gap-2 flex-col">
                    <h6 className="font-bold text-blue-600"> This is what you wrote :</h6>
                    {summary}
                </article>
            </section>
        </div> 
    )    
}
export default ArticleSummary