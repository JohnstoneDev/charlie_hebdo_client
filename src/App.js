import './App.css';
import { useEffect, useState } from 'react'
import MainDisplay from './Components/MainDisplay';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignupForm';
import { Route , Switch ,Link  } from 'react-router-dom';
import { redirect } from 'react-router';


function App() {
  const [user, setUser ] = useState(null) 
  const [loggedIn, setLoggedIn ] = useState(false);

  function logoutUser(){
    fetch('https://web-production-045a.up.railway.app/logout',{ method : 'DELETE' })
    .then(r => {
      if(r.ok){
        setUser(null)
        setLoggedIn(false);
      }
    })
  }


function Navigation(){
  return(
    <>
      <div hidden={user} className="p-2 text-xl">
        <Link to='/signup'>Sign Up </Link>
        <Link to="/login">Log In</Link>
      </div>
        <Link to='/home' className='text-xl'> Home </Link>
      <div>
        <button hidden={!user} onClick={logoutUser}>LOG OUT</button> 
      </div>
    </>
  )
}

// Auto Login 

useEffect(() => {
  fetch("/profile").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  })
  .catch(e => console.log(e)) 
},[]);

if (!user) redirect("/login") 

  return (
    <div className="App min-h-screen bg-green-200 leading-relaxed font-mono anitialized text-base tracking-wide font-medium capitalize">
          <Navigation />
      <Switch>
        <Route path="/signup">
          <SignUpForm onLogin={setUser} session={loggedIn} logFunc={setLoggedIn}/>
        </Route>

      <Route path="/login">
        <div className='align-center justify-center m-10 p-20'>
              <h1 className='animate-pulse text-5xl text-blue-700'> JE SUIS CHARLIE ,your free news finder! </h1>
              <LoginForm onLogin={setUser} session={loggedIn} logFunc={setLoggedIn}/>
          </div>
      </Route>

        <Route path="/">
          <MainDisplay user={user} session={loggedIn} logFunc={setLoggedIn}/>
        </Route>
      </Switch>
   </div>
  );
}


export default App; 
