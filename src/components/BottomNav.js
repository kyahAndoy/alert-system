import React from 'react';
import useStyles from './compStyles/BottomNavStyle';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VideocamIcon from '@material-ui/icons/Videocam';
import PanoramaIcon from '@material-ui/icons/Panorama';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';



const BottomNav = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <>
            <BottomNavigation
                className={classes.root}
                value={value}
                onChange={(event, newValue) => {
                     setValue(newValue);
                }}
      showLabels
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Videos" icon={<VideocamIcon />} />
                <BottomNavigationAction label="Images" icon={<PanoramaIcon />} />
                <BottomNavigationAction label="Downloads" icon={<FolderIcon />} />
            </BottomNavigation>
        </>
    )
}

export default BottomNav;