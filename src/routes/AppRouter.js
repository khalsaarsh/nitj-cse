import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Switch>
                <Route path="/" exact="true">
                    <Slider />    
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
