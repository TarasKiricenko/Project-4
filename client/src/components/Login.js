import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
  const history = useHistory()

  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(null)

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleChange = (event) => {
    const newFormdata = { ...formdata, [event.target.name]: event.target.value }

    setFormdata(newFormdata)

    console.log(newFormdata)

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    document.getElementById('loginone', 'logintwo').value = ''
    try {
      const { data } = await axios.post('/api/jwt_auth/login/', formdata)
      setTokenToLocalStorage(data.token)
      window.alert('Welcome back!')
      setTimeout(function () {
        history.push('/')
      }, 500)
    } catch (err) {
      console.log(err)
      setErrors(err)
    }
  }

  const goRegister = () => {
    history.push('/register')
  }

  return (
    <>
      <div className="frontpagenav">
        <Link to='/'><h3>Go back to homepage</h3></Link>
        <Link to='/posts'><h3>Continue as guest</h3></Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="commenttextlabel">Email address</label>
          <input className="commenturl shadow" id="loginone"
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            required
          />
        </div>
        <div>
          <label className="commenttextlabel">Password</label>
          <input className="commenturl shadow" id="logintwo"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formdata.password}
            required
          />
        </div>
        <div className="commentheadertextwrap">
          <div className="pairbuttons">
            <button type="submit" className="deletecomment shadow">Log in</button>
            <button type="submit" className="deletecomment shadow" onClick={goRegister}>New here? Register</button>
          </div>
        </div>
        {!errors ? null : <p style={{ color: 'red' }} className="commentheadertext">Something went wrong, double check your credentials.</p>}
      </form>
    </>
  )
}

export default Login