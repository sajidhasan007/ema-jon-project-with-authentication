import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import intializationAuthentication from './Firebase/firebase.initialization';

intializationAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const handlegooglesingin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
  }
  return (
    <div className="App">
      <button onClick={handlegooglesingin}>Goole Sign in</button>
    </div>
  );
}

export default App;
