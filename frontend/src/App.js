import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    </AuthProvider>
  );
}

export default App;
