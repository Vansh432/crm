import { useState } from 'react';
import './App.css';
import { Navbarside, Navbarup } from './Components/Main';
import { Dashboards } from './Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chat,Email,Project,Ticket,Announcement,Warning } from "./Components/Main";

function App() {
    const [checkWindow, setWindow] = useState(false);

    const styles = {
        innerWindow: {
            width: checkWindow ? '100%' : '83.25%',
        },
    };

    function toggleInnerWidth() {
        console.log("Toggling window width");
        setWindow(prev => !prev);
    }

    return (
        <>
            <BrowserRouter>
                <div className='upperWindow'>
                    <Navbarside />
                    <div className='lowerWindow' style={styles.innerWindow}>
                        <Navbarup setWidthinner={toggleInnerWidth} width={checkWindow} />
                        <div className='py-[20px] px-[20px] pt-[90px] max-h-[100vh] overflow-hidded overflow-y-scroll'>
                            <Routes>
                                <Route path="/" element={<Dashboards />} />
                                <Route path="/chat" element={<Chat />} />
                                <Route path="/email" element={<Email />} />
                                <Route path="/project" element={<Project />} />
                                <Route path="/ticket" element={<Ticket />} />
                                <Route path="/Announcement" element={<Announcement />} />
                                <Route path="/warning" element={<Warning />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
