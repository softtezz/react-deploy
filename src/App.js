import profileImage from './img/Aymen.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
		<h1>My react app </h1>
		<h2>Author: Aymen TEZEGHDENTI </h2>
		<img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
