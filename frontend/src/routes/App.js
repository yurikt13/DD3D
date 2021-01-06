import React from 'react';

import App1 from '../pages/App1';
import App2 from '../pages/App2';
import App3 from '../pages/App3';



import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return(
        <BrowserRouter>
         <Switch>
             <Route exact path="/" component={App1} />
             <Route path="/nuestraEmpresa" component={App2} />
             <Route path="/cotizador" component={App3} />

         </Switch>
        </BrowserRouter>
    )
}


export default App;