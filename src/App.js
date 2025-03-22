import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doacao from './pages/Doacao';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doacao" element={<Doacao />} />
            </Routes>
        </Router>
    );
}
export default App;
