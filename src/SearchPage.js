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
                views="3M"
                subs="659k"
                description="Learn REACT JS and Start making Money"
                timetamps="20 minutes ago"
                channel="Sonny Sangha"
                title="REACT JS Crash Course For Biginners | Build 4 Apps in One Day"
                image="https://i.ytimg.com/vi/tbvguOj8C-o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5P317iU7fmZi03i2tJYB9ZljkPA"
             />
             <VideoRow 
                views="122k"
                subs="659k"
                description="Do you want a FREE one hour training... check "
                timetamps="5 days ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone"
                image="https://i.ytimg.com/vi/3Ct6zuHYDtY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA42jittxmWJMYBfUou0AS_1Wkz0g"
             />
             <VideoRow 
                views="2.1"
                subs="659k"
                description="Learn the Basic Functionalities Of REACT as a Frontend Developer "
                timetamps="15 days ago"
                channel="Traversy Media"
                title="REACT JS Crash Course 2021"
                image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzn-mJ6EYgNMWXlfwSh2Ba-yglMg"
             />
             <VideoRow 
                views="375k"
                subs="659k"
                description="How to Build Mobile apps With REACT Native"
                timetamps="2 Months ago"
                channel="William Candillon"
                title="REACT Native Performance"
                image="https://i.ytimg.com/vi/1D78Tc46Xqo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeJB51MYs7dYoGtmd3KTO1Zvf4MQ"
             />
             <VideoRow 
                views="332k"
                subs="659k"
                description="How to Make money Online in 2021 with no Skills Required"
                timetamps="4 weeks ago"
                channel="Wesley Virgin"
                title="Get Paid $50 Every Time You SIGN UP On This Website For FREE"
                image="https://i.ytimg.com/vi/bdzvWBKaBpY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA165TuXveGIKFoYaqNm17LNJTulw"
             />
             <VideoRow 
                views="2M"
                subs="659k"
                description="Day 5 | Airbnb Challenge "
                timetamps="Schedule for 08/08/2021, 16:00"
                channel="Clever Programmer"
                title="Airbnb REACT.JS Challenge"
                image="https://i.ytimg.com/vi/5ac6cbLIBKU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTgVw_Cc_0ay0HJty0FlWR7tUcTA"
             />
             <VideoRow 
                views="3K Views"
                subs="659k"
                description="Seven Swords Stir Up Strife In Wulin | YOUKU MOVIE"
                timetamps="22 hours ago"
                channel="YOUKU MOVIE"
                title="Memory Hunter"
                image="https://i.ytimg.com/vi/hV8J6BpXAcA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMPYjsmv4VlxVPgkRtqKkoAbfnSA"
             />
             <VideoRow 
                views="1.4m views"
                subs="659k"
                description="The Power of Retro Tech Teleportation 2021"
                timetamps="3 months ago"
                channel="Retro Tech Teleportation"
                title="Marcus Brownlee"
                image="https://i.ytimg.com/vi/tEmLMCPK8OE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGvdfY20raf68t6KxWbRz1CQepuw"
             />
        </div>
    );
}

export default SearchPage;
