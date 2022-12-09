import { useState } from 'react'
import { redirect } from 'react-router';
// import { useNavigate } from 'react-router';

function LoginForm({ onLogin }){
    const [ username, setUsername ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    function fetchUser(e){
        e.preventDefault(); 
        
        fetch('https://web-production-045a.up.railway.app/login', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            }, 
            body : JSON.stringify( { username , password })
            })
            .then(r => {
            if(r.ok){
                r.json().then((user) => onLogin(user))
                redirect("/")
            }
            else {
                r.json().then((err) => setError(err.error))
            }
            })
            .catch(e => console.log(e.message))
  }

    return(
        <div className='mt-0 pt-0'>
            <div className='ml-44'>
                <form onSubmit={fetchUser} className="grid gap-6 m-20">
                    <input type="text" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={username} 
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setUsername(e.target.value)
                        }}
                        placeholder="Enter username"/> 

                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={password} 
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setPassword(e.target.value)
                        }}
                        placeholder="Enter Password"/> 

                    <input type="submit" className='bg-stone-200 p-3 w-20 hover:bg-blue-500 text-slate-500 hover:text-white border rounded-lg'/>   

                    <span hidden={error === ""} className="text-xl text-red-500 italic">{error} !</span>
                </form>
            </div>
        </div>
    )
  }

  export default LoginForm