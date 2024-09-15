import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffectDemo() {
  let [users, setapi] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => setapi(data))
      .catch((err) => console.log(err))
  }, [])
  console.log(users)
  return (
    <div className="container">
      <table className="table text-center">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.userId}</td>
              <td>{userObj.id}</td>
              <td>{userObj.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UseEffectDemo
