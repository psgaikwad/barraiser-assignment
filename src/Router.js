import React from "react";
import { Route } from "react-router-dom";
import Loadable from 'react-loadable'


const Projects = Loadable({
    loader: ()=> import(/* webpackChunkName: "projects" */'./components/projects'),
    loading: ()=> <div>Loading...</div>
})

const ShoppingLayout = Loadable({
    loader: ()=> import(/* webpackChunkName: "home" */'./containers/shoppingLayout/index'),
    loading: ()=> <div>Loading...</div>
})


export default class RouterOutlet extends React.PureComponent{
    render() {

        return(
            <React.Fragment>
                <Route path="/" exact component={ShoppingLayout}/>
                <Route path="/projects" component={Projects}/>
            </React.Fragment>
        )
    }

}

