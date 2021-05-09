import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import './App.css';
import Create from "./components/Home/create/Create";
import { Delete } from "./components/Home/delete/Delete";
import Home from './components/Home/Home';
import Read from "./components/Home/read/Read";
import Update from "./components/Home/update/Update";
import { UserProvider } from "./components/UserContext/UserContext";


function App() {
  return (
    <div>
     <ToastProvider>
    <UserProvider>
    <Router>
        <Switch>
        <Route path="/create">
          <Create/>         
          </Route>
        <Route path="/delete/:id">
          <Delete/>         
          </Route>
          <Route path="/read/:id">
          <Read/>         
          </Route>
          <Route path="/update/:id">
          <Update/>         
          </Route>
          <Route path="/">
          <Home />         
          </Route>
        </Switch>

   
    </Router>
 </UserProvider>
</ToastProvider>
    </div>
  );
}

export default App;
