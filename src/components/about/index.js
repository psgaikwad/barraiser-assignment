import React from 'react'

import layoutWrapper from '../../containers/layout/layoutWrapper'

class About extends React.Component{

    render(){
        return(
            <div>
                <div>About Us Page</div>
            </div>
        )
    }

}

export default layoutWrapper(About, {headerText:'About Us', showBackArrow: true})