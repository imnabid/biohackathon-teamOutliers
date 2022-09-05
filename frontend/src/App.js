import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { UserContextProvider } from "./GlobalContext";

function App() {
  return (
    <>
    <UserContextProvider>
    <Navbar/>
    <Home/>
    </UserContextProvider>
    </>
  );
}

export default App;
