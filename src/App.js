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
      `https://api.github.com/users/wwachira`
    )
      .then((response) => response.json())
      .then(setData);
  }, []);
  // if(data)
  //   return (
  //     <GithubUser
  //       name={data.name}
  //       location={data.location}
  //      /> 
        

  //   );
    
  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );   
  return <h1>Data</h1>;
 
 }

export default App;
