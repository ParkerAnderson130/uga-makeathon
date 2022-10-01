import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Info from "./pages/info"
import Meditation from "./pages/meditation"
import Timer from "./pages/timer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/timer' element={<Timer/>} />
          <Route path='/meditate' element={<Meditation/>} />
          <Route path='/info' element={<Info/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
