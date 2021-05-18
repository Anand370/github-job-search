import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Contact from './Contact'
import { Dropdown,DropdownButton  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [state,setState] = useState(false);
      return (
        <div>
            <div className='menu'>
                <div className='container' >
                      <div className='home clearfix'>
                            <ul>
                                
                                <li><Link to="/AboutUs" className='link' >About Us</Link></li>
                                <li><Link to="/Login" className='link' >Job at Github </Link></li>
                                <li><Link to="/Login" className='link' >LogIn</Link></li>
                                <li>
                                <DropdownButton
                                    menuAlign="right"
                                    title="contact us"
                                    id="dropdown-menu-align-right"
                                    >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                                </li>
                             
                            </ul>
                            

                        </div>
                        <div>

                        </div>
          
                
                </div>
            </div>
            <div className='container'>
                  <div className='page'>
                     <h1>Wel come to my page</h1>
                  </div>
                  <div>
                      <h3>Hi this is Anand kumar das</h3>
                      <div className='row'>
                          <div className='col-sm-4'>
                              
                          </div>
                          <div className='col-sm-4'>
                              
                          </div>
                          <div className='col-sm-4'>
                              
                          </div>
                      </div>
                  </div>
            </div>
            
        </div>
    )
}

export default Home
