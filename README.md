# Charlie Hebdo News Collector. 

## Introduction.

Charle Hebdo News Collector is a website that allows a user to log in and see the top headlines of the day from different news sources worldwide. 
The user is required to signup to the website or log in if an account was already created. 
Once logged in, a user will be able to see the top headlines and som econtet fron them on the `Main Page`. Headlines that interest the user can be added to a `reading list` where the user will be able to find them in days after they are out of news circuation. 

The full stories are linked on the articles and the pages that posted them are available to the user. On theh reading list, a user can create a short summary of the pages and, they will be displayed for viewing in the `Summaries` page. 

## Technologies Used. 

The following technologies were used in the creation of the application: 
  <ul> 
    <li> React Router(v5) for pagination. </li>
    <li> <a href='https://gnews.io/'> GNews API, to fetch top headlines globally. </li>
    <li> Postgres Database. </li>
    <li> A Rails API, to communicate with the Postgres Database. </li>
   <li> Vercel for the hosting </li>
  </ul>
  
  
  ## Running the Project
  
  To run the project locally, you can `clone` this repo and run `npm start`to get the react app started, it is alredy configured to commmunicate with the  deployed API. The production link can be found in the About page of this repository. 
