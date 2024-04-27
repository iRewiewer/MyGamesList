import React from 'react';
import { useState } from 'react';

import HighlightIcon from "@mui/icons-material/Highlight";
import NightsStayIcon from '@mui/icons-material/NightsStay';

function Header() {
    var [currentTime, setTime] = useState(new Date().toLocaleTimeString());
    var [clicked, setClicked] = useState(true)

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <header id="theHeader" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1><HighlightIcon /> Keeper</h1>
            <h2 onClick={() => {
                if (clicked) {
                    document.body.style.backgroundColor = "#232628";
                }
                else {
                    document.body.style.backgroundColor = "#ebebeb";
                }
                setClicked(!clicked);
            }}><NightsStayIcon /></h2>
            <h2>{currentTime}</h2>
        </header >
    );
}

export default Header;