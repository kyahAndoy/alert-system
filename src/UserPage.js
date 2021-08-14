import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import BottomNav from './components/BottomNav';


class UserPage extends Component {
    render() {
        return (
            <Container>
                <BottomNav></BottomNav>
            </Container>
        )
    }
}

export default UserPage;