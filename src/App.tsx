import React from 'react';
import './App.css';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import Routes from './routes';

const HomePage = React.lazy(() => import('./pages/home/index'));
const ErrorPage = React.lazy(() => import ('./pages/error/index'));
export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <React.Suspense
              fallback={
                <div className="spinner-show text-center">
                  <Spinner
                    animation="grow"
                    variant="primary"
                    className="mx-auto"
                  />
                </div>
              }>
                 <Switch>
        <Route path={Routes.home} exact component={HomePage}></Route>
        <Route path={Routes.home} exact component={ErrorPage}></Route>
        <Redirect to={Routes.home} />
      </Switch>
      </React.Suspense>
    </div>
    </BrowserRouter>
  );
}

export default App;
