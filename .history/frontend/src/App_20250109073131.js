import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
    return ( <
        BrowserRouter >
        <
        Route >
        <
        Route path = "/"
        exact component = { UserList }
        /> <
        Route path = "/add"
        component = { AddUser }
        /> <
        Route path = "/edit/:id"
        component = { EditUser }
        /> <
        /Route> <
        /BrowserRouter>
    );
}

export default App;