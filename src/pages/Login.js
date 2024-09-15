import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [useDetails, setUserDetails] = useState({
      name: '',
      password: '',
    })
    const handleFunction = (e) => {
      setUserDetails((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      })
    }
    const handleLogin = () => {
        const savedUserDetails =
          JSON.parse(localStorage.getItem('userDetails'))
        if (
          useDetails.name.length > 0 && useDetails.password.length > 0 && useDetails.name === savedUserDetails.name &&
          useDetails.password === savedUserDetails.password
        ) {
          navigate('/main')
          localStorage.setItem('login',true)
        } else {
          window.alert('Invalid Credentials.')
        }
    } 
    return (
      <div className="container text-center">
        <label htmlFor="name" className="m-3">Username</label>
        <input
          name="name"
          type="text"
          value={useDetails.name}
          onChange={handleFunction}
        /><br/>
        <label htmlFor="pass" className="m-3">Password</label>
        <input
          name="password"
          type="password"
          value={useDetails.password}
          onChange={handleFunction}
        /><br/>
        <button onClick={handleLogin} className="btn btn-success">Login</button>
      </div>
    )
}
export default Login