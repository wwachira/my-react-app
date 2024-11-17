import './App.css';
import { useState, useEffect} from "react";

function GithubUser({ name, blog, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{blog}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/wwachira` //USE your github username!!
      
    )
      .then((response) => response.json())
      .then(setData);
  }, []); // Ensure the API request is made only once when the application first renders by passing an empty array to useEffect

  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.blog}
        avatar={data.avatar_url}
      />
    );   
  return <h1>Simple Display of Particular Data from GIT API with hooks</h1>;
 
 }

export default App;
