import React from 'react';
import './home.css';
import Graph from './Graph';
import Graph1 from './Graph1';
import './main.css';
import { NavLink } from 'react-router-dom';
import Calculator from './Calculator';

import Kalendar from './Kalendar';

const Home = () => {
  return (
<>

{/* <div className='container'>
      <div className="row">
  <div className="col-sm-6">
    <div className="card mycard ">
      <div className="card-body bg">
        <h5 className="card-title bg">Calculator</h5>
        <p className="card-text bg">Plan your day with this calendar.</p>
      
        <NavLink to="/calculator" className="btn btn-prinmary" element={<Calculator/>}>Calc</NavLink>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mycard">
      <div className="card-body bg">
        <h5 className="card-title bg">Calculator</h5>
        <p className="card-text bg">Calculate your daily money spend of anything.</p>
        <NavLink to="/calendar" className="btn btn-primary" element={<Kalendar/>}>Go to calendaar app</NavLink>
      </div>
    </div>
  </div>
</div>
</div> */}
<div className='container-fluid'>
      <div className="row">
  <div className="col-sm-6">
    <div className="card mycard">
      <div className="card-body">
        <h5 className="card-title">Calculator</h5>
        <p className="card-text">DO your calculation.</p>
        {/* <Graph1/> */}

        <NavLink to="/calculator" className="btn btn-primary" element={<Calculator/>}>Go to Calculator</NavLink>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mycard">
      <div className="card-body">
        <h5 className="card-title">Calender</h5>
        <p className="card-text">Plan your week</p>
        <NavLink to="/calendar" className="btn btn-primary" element={<Kalendar/>}>Go to calendaar app</NavLink>
      </div>
    </div>
  </div>
</div>

    </div>
   
    <div className='container-fluid mt-4'>
      <div className='card'>
        <div className='card-body bg'>
          <Graph/>
        </div>
      </div>
    </div>

    <div className='container-fluid mt-4 '>
    <div className="card bg">
      <div className="card-body table-responsive  bg">
      <h4 className='card-heading bg'>Sales Data </h4>
      <table className="table table-stripped table-light">
  <thead className='heading'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Contact Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr> 
    <tr>
      <th scope="row">3</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>User</td>
      <td>user@example.com</td>
      <td>1234567890</td>
    </tr>
  </tbody>
</table>


 
    </div>
</div>

    </div>

</>

    
  )
}

export default Home
