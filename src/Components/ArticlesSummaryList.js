import React from "react"
import ArticleSummary from "./ArticleSummary"

function ArticleSummaryList({ summaries }) {

    return (
        <>
            <div>
                {
                    summaries.map((summary,index)=>{
                        return(
                            <ArticleSummary summary={summary} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ArticleSummaryList
// My Summaries