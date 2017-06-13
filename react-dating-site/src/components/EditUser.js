import React, {Component} from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'
import UserMatch from './UserMatchShow'
import {Link} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import request from 'superagent'
import Dropzone from 'react-dropzone'

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { uploadedFileCloudinaryUrl: "", uploadedFile: false, editFormVisible: false, userInfo: this.props.user}
  }
  // showMatches() {
  //   let id = this.props.user.id
  //   this.props.actions.getMatchesForUser(id)
  //   this.setState({ matches: this.props.matches, matchesVisible: !this.state.matchesVisible})
  // }
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
  handleChange(propertyName, event) {
    var obj = {}
    obj[propertyName] = event.target.value
    this.setState({userInfo: Object.assign({}, this.state.userInfo, obj)})
  }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit} >
            Edit user: <br />
            <label>Name:</label>
            <input type="text" value={this.state.userInfo.name} onChange={this.handleChange.bind(this, "name")} /><br />
            <label>Age: </label>
            <input type="text" value={this.state.userInfo.age} onChange={this.handleChange.bind(this, "age")}/><br />
            <label>Gender: </label>
            Male <input type="radio" value="M" checked={this.state.userInfo.gender === "M"} onChange={this.handleChange.bind(this, "gender")} />
            Female <input type="radio" value="F" checked={this.state.userInfo.gender === "F"} onChange={this.handleChange.bind(this, "gender")}/><br />
            <label>Looking for:</label><br />
            Male <input type="radio" value="M" checked={this.state.userInfo.looking_for === "M"} onChange={this.handleChange.bind(this, "looking_for")} />
            Female <input type="radio" value="F" checked={this.state.userInfo.looking_for === "F"} onChange={this.handleChange.bind(this, "looking_for")}/><br />

            <label>Furthest you would travel for love (m): </label>
            <input type="number" value={this.state.userInfo.max_travel} onChange={this.handleChange.bind(this, "max_travel")}/><br />


            <label>Description: </label>
            <input type="text" value={this.state.userInfo.description} onChange={this.handleChange.bind(this, "description")}/><br />
            <label>Street Address: </label>
            <input type="text" value={this.state.userInfo.street} onChange={this.handleChange.bind(this, "street")}/><br />
            <label>City: </label>
            <input type="text" value={this.state.userInfo.city} onChange={this.handleChange.bind(this, "city")}/><br />
            <label>State: </label>
            <input type="text" value={this.state.userInfo.state} onChange={this.handleChange.bind(this, "state")}/><br />
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload, or leave blank if you are happy with your pic.</p>
            </Dropzone>
            <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>

            <input type="submit" />
          </form>
        </div>
    )
  }
}

export default EditUser
