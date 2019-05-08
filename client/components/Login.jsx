import React from 'react'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault
  }
  
    render () {
    return (
      <React.Fragment>
        <h1>Login</h1>
          <input name='username' 
            placeholder ='username' 
            value={this.state.username} 
            onChange={this.handleChange}
          /> 

          <input name ='password' 
            type= 'password' 
            placeholder = 'password' 
            value={this.state.password} 
            onChange={this.handleChange}
            />
     
     

      </React.Fragment>
    )
  }
}

export default Login
