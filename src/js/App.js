// import "bootstrap";
// import '../assets/styles/app.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Async from 'react-code-splitting';

import Header from './shared/Header';
// import Home from './components/Home';
// import About from './components/About';
// import Email from './components/Email';
// import Retail from './components/Retail';
// import DeviceRegistration from './components/IOT/DeviceRegistration';
const Home = () => <Async load={import('./components/Home')} />;
const About = () => <Async load={import('./components/About')} />;
const Email = () => <Async load={import('./components/Email')} />;
const Retail = () => <Async load={import('./components/Retail')} />;
const DeviceRegistration = () => <Async load={import('./components/IOT/DeviceRegistration')} />;

const App = () => (
  <div>
    <Header menuItem={menuItem} />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/email-notification" component={Email} />
    <Route path="/my-account/:id?" component={Retail} />
    <Route path="/event-processing-from-devices" component={DeviceRegistration} />
  </div>
);

App.propTypes = {
  state: PropTypes.shape({}).isRequired,
};

// export default App;
export default withRouter(connect(state => ({ state }))(App));


const menuItem = [
  {
    'title': 'Infrastructure Services',
    'submenu': [
      'About',
      'Service Discovery',
      'Service Monitor Dashboard',
      'Centralized Logging',
      'API Gateway',
      'PaaS Cloud Foundry',
      'Docker Hub',
    ],
  },
  {
    'title': 'User Engagement Microservices',
    'submenu': [
      'GeoLocation',
      'Push Notification',
      'Email Notification',
      'Tweet2Server',
      'Twitter Listener',
    ],
  },
  {
    'title': 'Industries',
    'submenu': [
      'Retail Digital Banking',
      'Insurance',
      'Healthcare',
      'Retail',
    ],
  },
  {
    'title': 'Analytic Platform',
    'submenu': [
      'Text to Voice conversion',
      'Diabetes Analytical Model',
      'High Cost Patient',
      'Diabetic Retinopathy',
      'Chronic Obstructive Pulmonary Diseases',
    ],
  },
  {
    'title': 'IoT Platform',
    'submenu': [
      'Device Registration',
      'Event Processing from Devices',
      'Device Simulator',
    ],
  },
];