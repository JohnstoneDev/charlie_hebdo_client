import { useState } from 'react'

function SignUpForm( { onLogin }){
    const [ username, setUsername ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);

    function userSignUp(e){
        e.preventDefault()

        fetch('/signup',{
            method : 'POST',
            headers : { "Content-Type" : 'application/json' },
            body : JSON.stringify({ username, password })
        })
        .then(r => {
            if(r.ok){
                r.json().then(user => onLogin(user))
            } else { 
                r.json().then(e => { 
                    setErrors(e.errors)
                    })
            }
        })
  }

    return(
         <form onSubmit={userSignUp} className="grid gap-5 p-3">
               <input type="text" 
               className="text-black" 
               value={username} 
               onChange={(e) => {
                setUsername(e.target.value)
               }}
               placeholder="Enter your username"/> 

               <input type="password" 
               className="text-black" 
               value={password} 
               onChange={(e) => {
                setPassword(e.target.value)
               }}
               placeholder="Enter Password"/> 
              <button onClick={userSignUp}>Sign Up</button>

              <div hidden={errors.length <= 0 }>
                  {errors.map((err) => {
                    return <h4 key={errors.indexOf(err)}>{err}</h4>
                  })}
              </div>
        </form>
    )
  }

  export default SignUpForm;