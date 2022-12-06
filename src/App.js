import './App.css';
import { useEffect, useState } from 'react'
import MainDisplay from './Components/MainDisplay';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignupForm';
import { Route , Switch ,Link  } from 'react-router-dom';
import { redirect } from 'react-router';


function App() {
  const [user, setUser ] = useState(null) 

  function logoutUser(){
    fetch('/logout',{ method : 'DELETE' })
    .then(r => {
      if(r.ok){
        setUser(null)
      }
    })
  }


function Navigation(){
  return(
    <>
      <div hidden={user}>
        <Link to='/signup'>Sign Up </Link>
        <Link to="/login">Log In</Link>
      </div>
        <Link to='/home'> Home </Link>
      <div>
        <button hidden={!user} onClick={logoutUser}>LOG OUT</button> 
      </div>
    </>
  )
}

// Auto Login 

useEffect(() => {
  // auto-login
  fetch("/profile").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
      redirect('/home')
    }
  });
}, []);

if (!user) redirect("/login") 
// {/* <LoginForm onLogin={setUser} />; */}

  return (
    <div className="App min-h-screen bg-slate-200">
          <Navigation />
      <Switch>
        <Route path="/signup">
          <SignUpForm onLogin={setUser}/>
        </Route>

      <Route path="/login">
        <header className="App-header grid grid-cols-2">
          <h1 className='animate-pulse text-5xl text-orange-400'> JE SUIS CHARLIE </h1>
          <LoginForm onLogin={setUser}/>
        </header>
      </Route>

        <Route path="/">
          <MainDisplay user={user}/>
        </Route>
      </Switch>
   </div>
  );
}


export default App; 