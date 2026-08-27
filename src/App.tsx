import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Routes from './routes';
import { LangProvider } from './i18n/LangContext';

const HomePage = React.lazy(() => import('./pages/home/index'));
const ErrorPage = React.lazy(() => import('./pages/error/index'));

export const App: React.FC = () => (
  <LangProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Suspense
        fallback={
          <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Spinner animation="grow" variant="primary" />
          </div>
        }
      >
        <Switch>
          <Route path={Routes.home} exact component={HomePage} />
          <Route path={Routes.error} exact component={ErrorPage} />
          <Redirect to={Routes.home} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </LangProvider>
);

export default App;
