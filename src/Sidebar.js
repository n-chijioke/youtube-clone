import ExpandMoreOutlinedIcon from  "@material-ui/icons/ExpandMoreOutlined";
import HistoryIcon from  "@material-ui/icons/History";
import OndemandVideoIcon from  "@material-ui/icons/OndemandVideo";
import ThumbUpAltOutlinedIcon from  "@material-ui/icons/ThumbUpAltOutlined";
import VideoLibraryIcon from  "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import React from 'react';
import "./Sidebar.css"
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div classname="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Ondemand" />
            <SidebarRow Icon={WatchLaterIcon} title="WatchLater" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="ThumbUpAllOutlined" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="ExpandMoreOutlined"/>
            <hr />
        </div>
    )
}

export default Sidebar;
