function ArticleSummary( { summary  }){ 
    const { title, description, image, source_name } = summary


    return(
    <>
        <div className="flex gap-3 p-2">
            <img src={image} alt="" className="h-60"/>
            <section className="grid text-left">
                <p>{source_name}</p>
                <p>{title}</p>
                <p>{description}</p>   
            </section>
        </div>
       
    </>)
}
export default ArticleSummary