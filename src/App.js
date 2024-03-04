import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile.jsx'
import MultipleView from './pages/MultipleView.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
