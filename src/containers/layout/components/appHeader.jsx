import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import { Menu, ArrowBack} from '@material-ui/icons/'
import { Link }  from 'react-router-dom'
import SideMenu from './sideMenu'

const menuItems = [
    {displayName: 'Home', link: '/'},
    {displayName: 'About', link: '/about'},
]
    
export default class AppHeader extends React.PureComponent{
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    toggleMenu = () => {
        this.setState({
            open : !this.state.open
        })
    }

    navigateBack = () => {
        window.history.back()
    }

    render(){
        return(
            <React.Fragment>
                {/* app header  */}
                <AppBar position="static" className="app-header" color="primary">
                    <Toolbar>
													{!this.props.showBackArrow &&
															<Menu onClick={this.toggleMenu}/>
													}
													{this.props.showBackArrow &&
															<ArrowBack onClick={this.navigateBack}/>
													}
													<Typography variant="h6" className="app-header-text" >
															{ this.props.link ? (
																	<Link to={link} className="app-header-link">{this.props.headerText?this.props.headerText:`Clockify`}</Link>
															):(
																	<div className="app-header-link">{this.props.headerText?this.props.headerText:`Clockify`}</div>
															)}
															
													</Typography>
													{!this.props.showBackArrow &&
															<SideMenu open = {this.state.open} handleClose={this.toggleMenu} menuItems={menuItems}/>
													}
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }

}
