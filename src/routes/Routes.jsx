import React from 'react'
import { Route, Switch } from 'react-router'
import DetailsPage from '../components/DetailsPage'
import Homepage from '../components/Homepage'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/:id">
                    <DetailsPage/>
                </Route>
                <Route>
                    <h1>Page Not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
