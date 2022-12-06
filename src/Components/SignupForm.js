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
        <div className='mt-0 '>
            <form onSubmit={userSignUp} className="grid gap-5 p-10 m-40">
                <input type="text" 
                className="text-black p-2 m-2 border rounded-lg " 
                value={username} 
                onChange={(e) => {
                    setUsername(e.target.value)
                    }}
                    placeholder="Enter your username"/> 

                <input type="password" 
                className="text-black p-2 m-2 border rounded-lg " 
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value)
                    }}
                    placeholder="Enter Password"/> 
                <button onClick={userSignUp} className='bg-stone-200 p-3 w-40 hover:bg-blue-500 text-slate-500 hover:text-white border rounded-lg'>Sign Up</button>

                <div hidden={errors.length <= 0 }>
                    {errors.map((err) => {
                        return <h4 key={errors.indexOf(err)}>{err}</h4>
                        })}
                </div>
            </form>
    </div>
    )
  }

  export default SignUpForm;

//   Attempt second push 