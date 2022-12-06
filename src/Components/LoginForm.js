import React from 'react'

function LoginForm() {
    
    const[formData, setFormData] = useState({
        username:"",
        password:""
    }) 

    function handleLogin(e) {
        e.preventDefault()
        // AWAITING BACKEND
        fetch('',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body :JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(result => {
            console.log(result)
        })
        console.log(password)
        console.log(username)
    }
    
    const {username,password} = formData

    function handleChange(e) {
        e.target.name
        setFormData({...formData, [e.target.name] : [e.target.value]})
    }

    return (
        <form onSubmit = {handleLogin}>
            <label>
                Username
               <input type="text" value = {formData.username} onChange = {(e) => handleChange}/> 
            </label>
            <label>
                Password
               <input type="password" value = {formData.password} onChange= {(e) => handleChange}/> 
            </label>
            <input type="submit"/> 
            
        </form>
    )
}
export default LoginForm
