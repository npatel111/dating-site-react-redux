import React, {Component} from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'
import UserMatch from './UserMatchShow'
import {Link} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import request from 'superagent'
import Dropzone from 'react-dropzone'

const CLOUDINARY_UPLOAD_PRESET = 'itsanzfy';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/npatel/image/upload'

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.showMatches = this.showMatches.bind(this)
    this.handleShowUserDetail = this.handleShowUserDetail.bind(this)
    this.state = {uploadedFileCloudinaryUrl: "", detailsVisible: false, matchesVisible: false, matches: [], editFormVisible: false, userInfo: {name: this.props.user.name, age: this.props.user.age, gender: this.props.user.gender, looking_for: this.props.user.looking_for, max_travel: this.props.user.max_travel, description: this.props.user.description, street: this.props.user.street, city: this.props.user.city, state: this.props.user.state, image_url: this.props.user.image_url}}
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

  handleShowUserDetail(event) {
    debugger
    this.setState({detailsVisible: !this.state.detailsVisible})
    browserHistory.push({
      pathname: `/users/${this.props.user.id}`,
      state: {user: this.props.user, actions: this.props.actions}
    })
  }


  handleEdit(event) {
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  handleChange(propertyName, event) {
    var obj = {}
    obj[propertyName] = event.target.value
    this.setState({userInfo: Object.assign({}, this.state.userInfo, obj)})
  }

  handleSubmit(event) {

    event.preventDefault()
    this.props.actions.editUser(this.props.user.id, this.state.userInfo.name, this.state.userInfo.age, this.state.userInfo.gender, this.state.userInfo.looking_for, this.state.userInfo.max_travel, this.state.userInfo.description, this.state.userInfo.street, this.state.userInfo.city, this.state.userInfo.state, this.state.userInfo.image_url)
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  handleDelete(event) {
    this.props.actions.deleteUser(this.props.user.id, this.state.userInfo.name, this.state.userInfo.age, this.state.userInfo.gender, this.state.userInfo.looking_for, this.state.userInfo.description, this.state.userInfo.street, this.state.userInfo.city, this.state.userInfo.state, this.state.userInfo.image_url)
  }

  showMatches() {
    let id = this.props.user.id
    // this.props.actions.getMatches()
    this.props.actions.getMatchesForUser(id)
    this.setState({ matches: this.props.matches, matchesVisible: !this.state.matchesVisible})
  }

  render() {
    return(
      <div>
          <figure className="mdl-card__media">
            <img src={this.props.user.image_url} alt="" />
          </figure>
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">{this.props.user.name}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>Looking for: {this.props.user.looking_for}</p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.handleShowUserDetail}>Show Details</a>
            {this.props.session.user_id == this.props.user.id ? <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.handleEdit}>Edit User</a> : null}
            {this.props.session.user_id == this.props.user.id ? <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.handleDelete}>Delete User</a> : null }
            {this.props.session.user_id == this.props.user.id ? <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.showMatches}>Show Matches</a> : null }
            <div className="mdl-layout-spacer"></div>
      </div>
        {this.state.matchesVisible ? <UserMatch usermatches={this.props.matches} /> : null}
        { this.state.editFormVisible ?
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
          </form> : null}
        </div>
    )
  }
}


export default UserShow
