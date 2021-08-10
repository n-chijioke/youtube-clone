import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="search__page">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            verified
            subs="660k"
            noOfVideos={382}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricksthat will take your coding skills to the..."
            />

            <hr />
             <VideoRow 
                views="1.4"
                subs="659k"
                description="Do you want a FREE one hour training... check "
                timetamps="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone"
                image="https://i.ytimg.com/vi/3Ct6zuHYDtY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA42jittxmWJMYBfUou0AS_1Wkz0g"
             />
        </div>
    );
}

export default SearchPage;
