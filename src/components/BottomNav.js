import React from 'react';
import useStyles from './compStyles/BottomNavStyle';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VideocamIcon from '@material-ui/icons/Videocam';
import PanoramaIcon from '@material-ui/icons/Panorama';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

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
              <Divider /> 
                <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link}
        to="/"/>
                <BottomNavigationAction label="Videos" icon={<VideocamIcon />} component={Link}
        to="/videos"/>
                <BottomNavigationAction label="Images" icon={<PanoramaIcon />} component={Link}
        to="/images"/>
                <BottomNavigationAction label="Downloads" icon={<FolderIcon />} component={Link}
        to="/downloads"/>
            </BottomNavigation>
        </>
    )
}

export default BottomNav;
