import React from 'react'
import {Route, Switch} from "middle-core/lib/router"
import paths from '../constants/paths'
import ContentLayout from './content-layout/index'
import TreeList from './tree-list/index'
import EFormSample from './e-form-sample/index'
import MenuLayout from './menu_layout/index'

export default class App extends React.Component {
    render() {
        return(
            <ContentLayout>
                <Switch>
                    <Route path={paths.eFormSample} component={EFormSample} />
                    <Route path="/table" component={TreeList} />
                    <Route path="/menuLayout" component = {MenuLayout}/>
                    <Route component={EFormSample} />
                </Switch>
            </ContentLayout>
        );
    }
}