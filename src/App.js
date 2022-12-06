import './App.css';
import MainDisplay from './Components/MainDisplay';

function App() {
  // const [user,setUser] = useState({})
  return (
    <div className="App">
      <header className="App-header bg-black">
        <h1 className='animate-pulse text-5xl text-orange-400'> JE SUIS CHARLIE </h1>
        <MainDisplay />
      </header>
    </div>
  );
}

export default App;
