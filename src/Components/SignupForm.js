

function SignupForm() {
    const [ formData, setFormData ] = useState({ username: ' ' , password: ' '})
    return (
        <form>
            <label>
                Username
               <input type="text" value={formData.username}/> 
            </label>
            <label>
                Password
               <input type="password" value={formData.password}/> 
            </label>
            <input type="submit"/> 
            
        </form>
    )
}
export default SignupForm
