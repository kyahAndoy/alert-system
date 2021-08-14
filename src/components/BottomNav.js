import React from 'react';
import useStyles from './compStyles/BottomNavStyle';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const BottomNav = () => {
  
    const [value, setValue] = React.useState(0);
    return (
        <>
            <BottomNavigation
               
                value={value}
                onChange={(event, newValue) => {
                     setValue(newValue);
                }}
      showLabels
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </>
    )
}

export default BottomNav;