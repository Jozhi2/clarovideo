import React, {Fragment} from 'react';
import Header from './components/Header/index';
import ContentCards from './components/ContentCards/index';
import MovieDetails from './components/MovieDetails/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Fragment>
      <Router>
        <Provider store = {store}>
          <Switch>
            <Route exact path="/">
              <Header />
              <ContentCards />
            </Route>
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </Provider>
      </Router>
    </Fragment>
  );
}

export default App;
