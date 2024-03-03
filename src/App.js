import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile.jsx'
import MultipleView from './pages/MultipleView.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MultipleView/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
