import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Post from './pages/Post';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route exact component={Post} path="/Post" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;