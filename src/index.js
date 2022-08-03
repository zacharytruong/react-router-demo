import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation
} from 'react-router-dom';
import About from './About';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const atAboutPage = location.pathname.includes('/about');
  const handleBack = () => history.goBack();
  return atAboutPage && <button onClick={handleBack}>Back</button>;
};

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/about/:name" component={() => <h1>About Page</h1>} />
      </Switch>
    </BrowserRouter>
  // </React.StrictMode>
);
