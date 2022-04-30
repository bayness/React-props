
import './App.css';
import Profile from './profile/Component';


function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          display: 'inline',
          maxWidth: "55%",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Profile
          fullName={"Younesse Bayoud"}
          profession={"Full Stack Web Developer"}
          bio=" I'm a passionate Web Developer experienced  in Javascript, React,  html, css and other technoligies related to the back-end side  "
          handleName={handleName}
        >
          <img
            src="./image_profile.jpeg"
            alt="This is my picature"
            style={{ borderRadius: "15px", width: "300px" }}
          />
        </Profile>
      </div>
    </div>
  );
}



export default App;
