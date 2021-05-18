import React from 'react'
import {useState} from 'react'
import {useHistory } from 'react-router-dom';
import LogOut from './LogOut'
import JobSearch from './JobSearch'
import {Link} from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    const [userRegistration, setUserRegistration] = useState({
        name:'',
        email:'',
        password:'',
        error:'false'
    });
    const handleInput = e => {
        const name= e.target.name;
        const value = e.target.value;
        console.log(name , value);
        setUserRegistration({...userRegistration, [name]: value});

    }
   const handleButton = () => {
       if(userRegistration.name == '' && userRegistration.email == '') {
           alert('please fill the required field');
           history.push("/Login");
       }
       else {
           if(userRegistration.password.length <= 8) {
               alert('password should be atleast 8 charecter');
               history.push('/Login')
               
           }
           
           
       }
   }

    return (
      <div className='form'>
        <div className='container'>
            <div className='login'>
                <form>
                    <h1>Login page</h1>
                    <div>
                       <label   >Name :</label><br/>
                       <input type='text'  placeholder='Enter your name' className='name' value={userRegistration.name} onChange={handleInput} name='name'/>
                    </div>
                    <div>
                       <label   >Email :</label><br/>
                       <input type='email'  placeholder='Enter your name' className='email' value={userRegistration.email} onChange={handleInput} name='email'/>
                    </div>
                    <div>
                       <label   >Password :</label><br />
                       <input type='password'  placeholder='Enter your name' className='password'value={userRegistration.password} onChange={handleInput}  name='password'/>
                    </div>
                    <button type='button' className='submit' onClick={handleButton}><Link to="/JobSearch">Login</Link></button> 
                    <button className='btn'><Link to="/Home" >LogOut</Link></button>
                </form>
                  
                   
            </div>

            
         </div>
         
      </div>
    )
}

export default Login
