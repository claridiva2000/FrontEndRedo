import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Login from './component/login/login';
import Register from './component/register/register';
// import Cardlist from './component/cardlist/cardlist';
// import Search from './component/search/searchbox';
// import Header from './component/header/header';
import Navbar from './component/navbar/navbar';
import Landing from './component/landing/landing';
// import Dashboard from './component/dashboard/dashboard';
//Alerts
import Alert from './component/messages/alert';
//style
import './App.css';
//redux
import {Provider} from 'react-redux';
import store from './store'

const App = () => (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Route exact path="/" component={Landing} />
      <section className="container App">
        <Navbar />
        <Alert/>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
);

export default App;

// ReactDOM.render(
//
//     <Router>
//       <div>
//<Provider store= {store}>
//         <Route exact path="/" component={App} />
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/dashboard" component={Dashboard} />
//         </Switch>
//       </div>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );
