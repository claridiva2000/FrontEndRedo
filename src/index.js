import React from 'react';
import ReactDOM from 'react-dom';
//Router
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//imports
import App from './App';
// import Login from './component/login/login';
// import Register from './component/register/register';
// import Dashboard from './component/dashboard/dashboard';
//style
import './index.css';
// //Redux
// import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(
//   <Provider store= {store}>
//     <Router>
//       <div>
     
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