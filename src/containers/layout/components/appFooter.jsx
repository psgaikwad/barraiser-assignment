import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons/'

export default class AppFooter extends React.PureComponent{

    render(){
        return(
        
            <React.Fragment>
                {/* app footer  */}
                    {this.props.showFooter && 
                    <div className="app-footer">
                        App Footer
                    </div>
                }
            </React.Fragment>

        )
    }

}