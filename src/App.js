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

// useEffect(() => {
//   // auto-login
//   fetch("/profile").then((r) => {
//     if (r.ok) {
//       r.json().then((user) => setUser(user));
//       redirect('/home')
//     }
//   });
// }, []);

// if (!user) redirect("/login") 
// // {/* <LoginForm onLogin={setUser} />; */}

  return (
    <div className="App min-h-screen bg-green-200 leading-relaxed font-mono anitialized text-base tracking-wide font-medium capitalize">
          <Navigation />
      <Switch>
        <Route path="/signup">
          <SignUpForm onLogin={setUser}/>
        </Route>

      <Route path="/login">
        <div className='align-center justify-center m-10 p-20'>
              <h1 className='animate-pulse text-5xl text-blue-700'> JE SUIS CHARLIE ,your free news finder! </h1>
              <LoginForm onLogin={setUser}/>
          </div>
      </Route>

        <Route path="/">
          <MainDisplay/>
        </Route>
      </Switch>
   </div>
  );
}


export default App; 


// className='p-20 grid gap-4 m-20'