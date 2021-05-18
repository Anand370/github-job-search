import logo from './logo.svg';
import './App.css';

import Login from './components/Login'
import LogOut from './components/LogOut'
import Home from './components/Home'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import JobSearch from './components/JobSearch';
import Contact from './components/Contact'

function App() {
  return (
   
    <div className='background'>
            <div className="App">
        
        <BrowserRouter>
           <Home />
                  <Switch>
                        
                        <Route path='/Login' component={Login} />
                        <Route path='/LogOut' component={LogOut} />
                        <Route path='/JobSearch' component={JobSearch} />
                        <Route path='/Contact' component={Contact} />
                  </Switch>
            
           </BrowserRouter>

      </div> 
    </div>
    
  );
}

export default App;
