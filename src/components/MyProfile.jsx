import React, {Component} from 'react';
import './myProfile.less';
import "bootstrap/dist/css/bootstrap.css"

class MyProfile extends Component {
  state = {
    name: '',
    gender: '',
    description:'',
    isRead:''
  }

  handleEventChange = (field,event) => {
    this.setState({
      [field]:event.target.value
    })
  }

  handleCheckboxChange = (event) => {
    this.setState({
      isRead:event.target.checked
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
        <h1 className='form-title'>My Profile</h1>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input className='form-control' id='name' type='text' value={this.state.name} placeholder='Your name' onChange={(e)=>this.handleEventChange("name",e)}></input>
        </div>
        <div className="form-group">
          <label htmlFor='gender'>Gender</label>
          <select className='form-control' id='gender' value={this.state.gender} onChange={(e)=>this.handleEventChange("gender",e)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" value={this.state.description} placeholder='Description about yourself' onChange={(e)=>this.handleEventChange("description",e)} rows="3"></textarea>
        </div>
        <div className="form-group">
        <input className="form-check-input" type="checkbox" id="isRead" value={this.state.isRead} onChange={this.handleCheckboxChange}></input>
        <label className="form-check-label" htmlFor="idRead">
          I have read the terms of conduct
       </label>
       </div>
        <div className="form-group">
        <input type="submit" className="btn btn-primary" value="Submit"
        disabled = {this.state.name === '' || this.state.description === '' || this.state.isRead !== true}></input>
        </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;


