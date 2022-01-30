import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import CardGame from './page/cardGame/CardGame';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<CardGame/>} />
     <Route path="/home" element={<CardGame/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
