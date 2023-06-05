import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'wouter';
import routes from './routes';
import "./index.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}


/* puedes utilizar la función useRoutes de la biblioteca wouter. A continuación te mostraré cómo configurar y utilizar wouter en una aplicación React con Vite:
npm install wouter */


//const API_URL = import.meta.env.VITE_REACT_APP_API;
// para eso usar npm install dotenv
export default App;
