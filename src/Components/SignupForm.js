import { useState } from 'react'

function SignUpForm( { onLogin }){
    const [ username, setUsername ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const [ hideErrors, setHideErrors ] = useState(true);

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
                r.json().then((err) => {
                    setTimeout(() => {
                        setErrors(err.errors)
                        setHideErrors(false)
                    },3000)
                    setHideErrors(true);
                })
            }
        })
  }

    return(
        <div className='m-10 p-10'>
            <div>
              <h1 className='animate-pulse text-5xl text-blue-700'>
                Welcome to Charlie Hebdo News Collector! Enjoy Your Stay!
              </h1>
            </div>

            <div className='ml-44'>
                <form onSubmit={userSignUp} className="grid gap-5 p-12 ml-10">
                    <input type="text" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={username} 
                    onChange={(e) => {
                        setUsername(e.target.value)
                        }}
                        placeholder="Pick a username"/> 

                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        placeholder="Enter Password (minimum 8 characters)"/> 
                    <button onClick={userSignUp} className='bg-stone-200 p-3 w-40 hover:bg-blue-500 text-slate-500 hover:text-white border rounded-lg'>Sign Up</button>

                    <div hidden={hideErrors}>
                        {errors.map((err) => {
                            return <h4 key={errors.indexOf(err)} className="text-xl text-red-500 italic">{err} !</h4>
                            })}
                    </div>
                </form>
            </div>
           
    </div>
    )
  }

  export default SignUpForm;

//   Attempt second push 