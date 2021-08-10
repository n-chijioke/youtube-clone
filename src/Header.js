import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AvatarIcon from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";

// es7 snippets (Go download as an extension on VSC)

function Header() {
    const [inputSearch, setInputSearch] = useState(""); 

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img 
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt="" 
                />
                </Link>
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch} 
                placeholder="Search"
                type="text" 
            />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
            </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <AvatarIcon 
                alt="N.Chijioke"
                src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj-mo" title="Me"
                />
            </div>
        </div>
    
    );
}

export default Header;
