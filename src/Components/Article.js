function Article( { article }){ 
    const { title, description , content, url , image , source } = article 
    return(
        <>
            <div className="flex">
                <div>
                    <img src={image} alt="" />
                    <h3>{source.name}</h3>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={url}> More Here </a>
                </div>

                <section> 
                    <p>{content}</p>
                    
                </section>
            </div>
        </>
    )
}

export default Article;