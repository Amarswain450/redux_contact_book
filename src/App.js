import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from './components/Navbar';
import Contacts from './components/contact/Contacts';
import {Provider} from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route exact path="/addContact" component={AddContact} />
        <Route exact path="/editContact/:id" component={EditContact} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
