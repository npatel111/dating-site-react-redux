import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import * as actions from '../actions/getUsers'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'itsanzfy';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/npatel/image/upload'


class NewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {visible: true, uploadedFileCloudinaryUrl: "", name: "", age: "", gender: "", looking_for: "", description: "", street: "", city: "", state: ""}
    this.handleClick = this.handleClick.bind(this)
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleClick(event) {

    event.preventDefault()
    
    this.props.actions.addUser(this.state.name, this.state.age, this.state.gender, this.state.looking_for, this.state.description, this.state.street, this.state.city, this.state.state, this.state.uploadedFileCloudinaryUrl)
    this.setState({visible: !this.state.visible, name: "", age: "", gender: "", description: "", looking_for: "", street: "", city: "", state: "", uploadedFileCloudinaryUrl: ""})
  }

  handleChange(propertyName, event) {
    var obj = {}
    obj[propertyName] = event.target.value
    this.setState(obj)
  }

  render() {
    if (this.state.visible) {
    return (
        <form onSubmit={this.handleClick} >
          Add new user: <br />
          <label>Pick a Username:</label>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} /><br />
          <label>Age: </label>
          <input type="text" value={this.state.age} onChange={this.handleChange.bind(this, "age")}/><br />
          <label>Gender: </label><br />
          Male <input type="radio" value="M" checked={this.state.gender === "M"} onChange={this.handleChange.bind(this, "gender")} />
          Female <input type="radio" value="F" checked={this.state.gender === "F"} onChange={this.handleChange.bind(this, "gender")}/><br />
          <label>Looking for:</label><br />
          Male <input type="radio" value="M" checked={this.state.looking_for === "M"} onChange={this.handleChange.bind(this, "looking_for")} />
          Female <input type="radio" value="F" checked={this.state.looking_for === "F"} onChange={this.handleChange.bind(this, "looking_for")}/><br />
          <label>Description: </label>
          <input type="text" value={this.state.description} onChange={this.handleChange.bind(this, "description")}/><br />
          <label>Street Address: </label>
          <input type="text" value={this.state.street} onChange={this.handleChange.bind(this, "street")}/><br />
          <label>City: </label>
          <input type="text" value={this.state.city} onChange={this.handleChange.bind(this, "city")}/><br />
          <label>State: </label>
          <input type="text" value={this.state.state} onChange={this.handleChange.bind(this, "state")}/><br />
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
          <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" />
        </form>
      )} else {
        return null
      }

  }
}

export default NewUser;
