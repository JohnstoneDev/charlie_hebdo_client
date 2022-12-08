import ArticleSummary from "./ArticleSummary"

function ArticleSummaryList({ allSummaries }) {

    return (
        <>
            <div>
                {
                    allSummaries.map((aSummary,index)=>{
                        return(
                            <ArticleSummary aSummary={aSummary} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ArticleSummaryList
// My Summaries