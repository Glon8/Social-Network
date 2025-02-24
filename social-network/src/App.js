import './App.css';
import NavBar from './components/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {ThemeProvider} from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
