import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const navigate = useNavigate()
    const [useDetails,setUserDetails] = useState({
        name : '',
        password : '',
        email : '',
        phoneNumber : ''
    })

    const handleFunction = (e) => { 
        setUserDetails((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        })
    }
    const handleSignUp = () => {
        localStorage.setItem("userDetails", JSON.stringify(useDetails))
        navigate('/login')
    }
    return (
      <div className="container text-center">
          <label htmlFor="name" className="m-3">Username</label>
          <input 
            name="name"
            type="text"
            value={useDetails.name}
            onChange={handleFunction}
          />
          <br/>
          <label htmlFor="pass" className="m-3">Password</label>
          <input
            name="password"
            type="password"
            value={useDetails.password}
            onChange={handleFunction}
          /><br/>
          <label htmlFor="email" className="m-3">Email</label>
          <input
            name="email"
            type="email"
            value={useDetails.email}
            onChange={handleFunction}
          /><br/>
          <label htmlFor="pn" className="m-3">PhoneNumber</label>
          <input
            name="phoneNumber"
            type="number"
            value={useDetails.phoneNumber}
            onChange={handleFunction}
          /><br/>
          <button onClick={handleSignUp} className="btn btn-danger">Sign Up</button>
        </div>
    )
}
export default Signup