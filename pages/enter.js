import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    // handle errors with try/catch block
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

// sign out button removes jwt stored in the browser to manage the authentication state
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

// choose a custom username
function UsernameForm() {
  return null;
}
