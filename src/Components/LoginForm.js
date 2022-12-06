import { useState } from 'react'
import { redirect } from 'react-router';

function LoginForm({ onLogin }){
    const [ username, setUsername ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    function fetchUser(e){
        e.preventDefault(); 
        
        fetch('/login', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            }, 
            body : JSON.stringify( { username , password })
            })
            .then(r => {
            console.log(r)
            if(r.ok){
                r.json().then((user) => onLogin(user))
                return redirect("/home")
            }
            else {
                r.json().then((err) => setError(err.errors))
            }
            })
  }

    return(
         <form onSubmit={fetchUser} className="grid gap-5 p-3">
               <input type="text" 
               className="text-black" 
               value={username} 
               onChange={(e) => {
                // console.log(e.target.value)
                setUsername(e.target.value)
               }}
               placeholder="Enter your username"/> 

               <input type="password" 
               className="text-black" 
               value={password} 
               onChange={(e) => {
                // console.log(e.target.value)
                setPassword(e.target.value)
               }}
               placeholder="Enter Password"/> 

              <input type="submit"/>   

               <span hidden={error === ""}>{error}</span>
        </form>
    )
  }

  export default LoginForm