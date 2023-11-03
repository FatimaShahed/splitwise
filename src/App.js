import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LogIn from "./Login/login";
import Parent from "./Split/parent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/main" element={<Parent />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
