import React from 'react'
import './menu3.css'
const Menu3 = () => {
  return (
    <>
    <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
        <span className="font-weight-bold">User</span>
        <span className="text-black-50">user@mail.com</span>
        <span className="text-black-50"> +1 1234567890</span>
        <span className="text-black-50">2+ years of experience</span>
        </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" /></div>
          <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" /></div>
          <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" /></div>
          <div className="col-md-12"><label className="labels"> City</label><input type="text" className="form-control"  /></div>
          <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control"  /></div>
          <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control"  /></div>
          <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control"  /></div>
          <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" /></div>
          <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" /></div>
          <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" /></div>
        </div>
        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Save</span></div><br />
        <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control"  /></div> <br />
        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" /></div>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Menu3
