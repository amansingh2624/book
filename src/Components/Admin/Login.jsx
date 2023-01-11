import { useHistory } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
  
// A function that authenticates the users
function authenticateUser(userName, password) {
  // Some code to authenticate the user
}
  
// Hooks must be used inside a functional component
export default function Login(props) {
  //Creating a state variable
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const myStyle={
    backgroundImage: 
"url('https://assetscdn1.paytm.com/images/cinema/Drive---705x750-f62d7d60-76e8-11ed-b73d-dd421bb210f9.jpg')",
    height:'80vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

  
  // Accessing the history instance created by React
  const history = useHistory();
  
  // Handle the user clicks the login button
  const handleClick = () => {
    
    // Authenticate the user
    authenticateUser(userName, password);
  
    // When the authentication is done
    // Redirect the user to the `/profile/${userName}` page
    // the below code adds the `/profile/${userName}` page
    // to the history stack.
    history.push(`/movie/${userName}`);
  };
  
  return (
    <div >
      <input 
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        required
      />
      <br>
      </br>
      <input 
        type="text"
        
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button type="submit" onClick={handleClick}>
        {" "}
        Log In{" "}
      </button>
    </div>
  );
}