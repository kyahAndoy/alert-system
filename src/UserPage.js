import React from 'react';
import Container from '@material-ui/core/Container';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './components/compStyles/BottomNavStyle';

const UserPage = () => {
    const classes = useStyles();
     const [value, setValue] = React.useState(0);
    return (
            <>
            <Container maxWidth='xs'>
                <BottomNavigation
                className={classes.root}
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
            </Container>
        </>
    )
}

export default UserPage;