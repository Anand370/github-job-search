import React,{useState, useEffect} from 'react'
import axios from 'axios'

const JobSearch = () => {
    const [state, setState] = useState();
    useEffect(() => {
       const getData = async  () => {
          const responce =  await fetch('https://jobs.github.com/');
          const jsonRes = await responce.json();
          console.log(jsonRes);
       }
       getData();
        
    }, []);
    return (
        <div>
             <div className='job'>
                 <div className='container'>
                     <div className='job-search'>
                         <h3>you can search job on github </h3>
                         <div>
                             <input type='text' placeholder='Enter job title or  position or job type' className='search-input' />
                             <button class='btn-job'>Search</button>
                         </div>
                        
                     </div>

                 </div>
             </div>
        </div>
    )
}

export default JobSearch
