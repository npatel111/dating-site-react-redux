import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import * as actions from '../actions/getUsers'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'itqx0owh';
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
        <div className="mdl-layout mdl-js-layout mdl-color--indigo">
          <main className="mdl-layout__content">
            <div className="mdl-card-wide mdl-color--white mdl-shadow--6dp">
              <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                <h2 className="mdl-card__title-text">Add new user:</h2>
              </div>
              <div className="mdl-card__supporting-text">
                <form onSubmit={this.handleClick} >
                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp">
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label" htmlFor="username">Pick a Username:</label>
                        <input className="mdl-textfield__input" type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} /><br />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label">Age: </label>
                        <input className="mdl-textfield__input" type="text" value={this.state.age} onChange={this.handleChange.bind(this, "age")}/><br />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-radio__label grey-text">Gender: </label><br />
                        <span className="mdl-radio__label">Male</span> <input className="mdl-radio__input" type="radio" value="M" checked={this.state.gender === "M"} onChange={this.handleChange.bind(this, "gender")} />
                        <span className="mdl-radio__label">Female</span> <input className="mdl-radio__input" type="radio" value="F" checked={this.state.gender === "F"} onChange={this.handleChange.bind(this, "gender")}/><br />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-radio__label grey-text">Looking for:</label><br />
                        <span className="mdl-radio__label">Male</span> <input className="mdl-radio__input" type="radio" value="M" checked={this.state.looking_for === "M"} onChange={this.handleChange.bind(this, "looking_for")} />
                        <span className="mdl-radio__label">Female</span> <input className="mdl-radio__input" type="radio" value="F" checked={this.state.looking_for === "F"} onChange={this.handleChange.bind(this, "looking_for")}/><br />
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp">
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label">Description: </label>
                        <textarea className="mdl-textfield__input" type="text" value={this.state.description} onChange={this.handleChange.bind(this, "description")}/><br />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label">Street Address: </label>
                        <input className="mdl-textfield__input" type="text" value={this.state.street} onChange={this.handleChange.bind(this, "street")}/><br />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label">City: </label>
                        <input className="mdl-textfield__input" type="text" value={this.state.city} onChange={this.handleChange.bind(this, "city")}/><br />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label">State: </label>
                        <input className="mdl-textfield__input" type="text" value={this.state.state} onChange={this.handleChange.bind(this, "state")}/><br />
                      </div>
                      <Dropzone id="dropzone"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <label className="grey-text">Drop an image or click to select a file to upload.</label>
                      </Dropzone >

                    <div>
                      {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>
                          <p>{this.state.uploadedFile.name}</p>
                          <img src={this.state.uploadedFileCloudinaryUrl} />
                        </div>}
                      </div>
                    </div>
                    <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      )} else {
        return null
      }

  }
}

export default NewUser;
