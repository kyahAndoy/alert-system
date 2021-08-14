import React from 'react';
import Container from '@material-ui/core/Container';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VideocamIcon from '@material-ui/icons/Videocam';
import PanoramaIcon from '@material-ui/icons/Panorama';
import FolderIcon from '@material-ui/icons/Folder';
import useStyles from './components/compStyles/BottomNavStyle';

const UserPage = () => {
    const classes = useStyles();
     const [value, setValue] = React.useState(0);
    return (
            <>
            <Container>
                <BottomNavigation
                className={classes.root}
                value={value}
                onChange={(event, newValue) => {
                     setValue(newValue);
                }}
                showLabels
                >
                <BottomNavigationAction label="Videos" icon={<VideocamIcon />} />
                <BottomNavigationAction label="Images" icon={<PanoramaIcon />} />
                <BottomNavigationAction label="Downloads" icon={<FolderIcon />} />
            
            </BottomNavigation>
            </Container>
        </>
    )
}

export default UserPage;