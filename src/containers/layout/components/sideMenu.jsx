import React from 'react'
import { AppBar, Toolbar, Typography, Fade, Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons/'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

export default class SideMenu extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    componentWillReceiveProps(){

    }

    showOpen = () => {
        
    }

    showLoginModal = () =>{
        this.setState({
            loggedIn: true
        })
    }

    closeLoginModal = () =>{
        this.setState({
            loggedIn: false
        })
    }

    render(){
        return(
            <React.Fragment>
                {/* app sidemenu  */}
                <div className="app-menu">
                    <SwipeableDrawer open = {this.props.open} onClose={this.props.handleClose} onOpen={this.props.handleClose}>
                        <div className="app-menu-user">
                            <Avatar className="user-avatar"><Link to ="/profile">TU</Link></Avatar>
                            <p className="user-greeting-text">Hello, Test User !</p>
                        </div>    
                    <ul className="app-menu-items">
                        {this.props.menuItems && this.props.menuItems.map(menu =>
                            <li key={menu.displayName} className="app-menu-item"><Link to={menu.link?menu.link:"/"}>{menu.displayName}</Link></li>
                        )}
                        </ul>
                    </SwipeableDrawer>
                </div>
            </React.Fragment>

        )
    }

}