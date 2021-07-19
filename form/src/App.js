import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
      return (
        <div className="bg-secondary">
          <h2>Form Submitted</h2>
        </div>
      )
  }
  
  
  renderForm() {
    return (
      <form onChange={this.handleSubmit}>
          <div>
            <label for="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email"></input>
          </div>

          <div>
            <label for="email" className="form-label">Password</label>
            <input type="password" className="form-control" id="email" required></input>
          </div>

          <div className="my-3 form-check">
            <input type="checkbox" className="form-check-input" id="inputCheck"></input>
            <label for="inputCheck" className="form-check-label">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

  render() {
    return (
      <div className="container"> 
      <h2>Login</h2>
          {this.renderForm()}
      </div>
    )
  }
}

export default App;