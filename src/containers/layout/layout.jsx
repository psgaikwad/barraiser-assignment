import React from 'react'
import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
import MuiContainer from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core'

const Container = withStyles({
    root: {
        marginTop: '16px'
    }
})(MuiContainer);

export default class Layout extends React.PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                {/* app header  */}
                <AppHeader 
                    headerText={this.props.headerText?this.props.headerText:""} 
                    showBackArrow={this.props.showBackArrow?true:false}
                    link={this.props.link}/>
                {/* <Container className="app-container"> */}
                    <div>
                        {/* component to be rendered inside container */} 
                        {this.props.children}
                    </div>
                {/* </Container> */}
                <AppFooter/>
                
            </React.Fragment>
        )
    }

}