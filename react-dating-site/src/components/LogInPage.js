import React, {PropTypes} from 'react';
import TextInput from './TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class LogInPage extends React.Component {
  // debugger
  constructor(props) {
    super(props);
    this.state = {credentials: {name: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
    // this.props.actions.getMatchesForUser(this.props.session.user_id);
  }

  render() {
    // debugger
    return (
      < div>
        <p>Log In</p>
        < form>
          <label>Name:</label>
          < input type="text"
            name="name"
            value={this.state.credentials.name}
            onChange={this.onChange}/>
          <br />
          <label>Password:</label>
          < input
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          < input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>
      </div>


  );
  }
}

export default LogInPage
