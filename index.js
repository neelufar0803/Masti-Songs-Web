import React from 'react';
import ReactDom from 'react-dom';
import Bollywood from './components/bollywood.js';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Tum from './components/tumheaana.js';

const App = () =>{
    return(
        
        <BrowserRouter>
        <Bollywood/>
        <Switch>
            <Route exact='./components/tumheaana.js' component={Tum}/>
        </Switch>
        </BrowserRouter>
        
    )
}

ReactDom.render(
    <App/>,

    document.querySelector('#root')
)




// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './app';

// ReactDom.render(
//     <App/>,
//     document.getElementById('root')
// );