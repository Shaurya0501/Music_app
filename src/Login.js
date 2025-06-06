import React,{useState} from 'react';
function Login({onLogin})
{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin=(e)=>{
        e.preventDefault();

        if(username==='NaN' || password==='NaN')
            alert('Invalid username or invalid password!');
        else
        onLogin();
    }
    return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-4">Login to 🎵 Saregama</h2>
      <form onSubmit={handleLogin} className="w-50">
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;