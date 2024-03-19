import React, { useState } from 'react'

export default function Login() {

    const dummyUser = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleLoginBtnClick = (e) =>{
        e.preventDefault();
        setUsername('')
        setPassword('')

    }

  return (
    <div className='container'>
        <form>
            <h1>Login Page</h1>
            <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLoginBtnClick}>Login</button>
        </form>
        

    </div>
  )
}
