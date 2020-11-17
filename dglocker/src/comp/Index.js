/* eslint-disable no-undef */
import React , {useState , useEffect } from 'react';
import axios from 'axios';
import './Index.css';


const Index =()=> {
        const [person, setData] = useState([]);

        const fetchdata = () => {
           axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                const data =response.data
                setData(data);
            })    
        }

        useEffect(()=>{
            fetchdata();
        },[])

return (
        <div>
            <div className="container-fluid">
                <div className="container">
            <form className="form-inline" action="/action_page.php">
  <label for="email" className="mr-sm-2 ">Enter -Id :-</label>
  <input type="email" className="form-control mb-2 mr-sm-2 " placeholder="Enter email" id="email" onchange=''/>
  <label for="pwd" className="mr-sm-2">    Password:</label>
  <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Enter password" id="pwd"/>
  <button type="submit" className="btn btn-primary mb-2">Submit</button>
  <div className="form-check mb-2 mr-sm-2">
  </div>
  {/* <button type="submit" className="btn btn-primary mb-2">Submit</button> */}
</form>
    <div className="block">
            {
                person.map((item , index )  => { 
                    return (
                 <p key={index[0]} > {index}   {item.title}</p>
                    ) 
                })
            }     
            </div>
            </div>     
        </div>
        </div>
    )
        }

export default Index
