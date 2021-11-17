import firebaseinitializeApp from "../firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

firebaseinitializeApp();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  console.log(user);
  // admin && user data
  const [admin, setAdmin] = useState(false);
  const [loadData, setloadData] = useState(true);

  // error message
  const [registerError, setRegisterError] = useState("");
  const [loginError, setloginError] = useState("");

  // register user email and password snd displayName
  const registerUser = (email, password, name, history, location) => {
    setloadData(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { from } = location.state || { from: { pathname: "/" } };
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setRegisterError("");
            saveUser(email, name, "POST");
            history.replace(from);
          })
          .catch(() => {});
        setUser(user);
      })
      .catch((error) => {
        setRegisterError(error.message);
      })
      .finally(() => setloadData(false));
  };

  // user login email and password
  const userLogin = (email, password) => {
    setloadData(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleLogin user button
  const googleLogin = (history, location) => {
    setloadData(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { from } = location?.state || { from: { pathname: "/" } };
        const user = result.user;
        setUser(user);
        setloginError("");
        saveUser(user.email, user.displayName, "PUT");
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setloginError(errorMessage);
      })
      .finally(() => setloadData(false));
  };

  // logOut user
  const logOut = (history) => {
    signOut(auth)
      .then(() => {
        setUser({});
        setloadData(true);
        history.push("/login");
      })
      .catch((error) => {});
  };

  // user data loade
  useEffect(() => {
    const unsubcri = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setloadData(false);
    });
    return () => unsubcri;
  }, [auth]);

  useEffect(() => {
    fetch(`https://aqueous-gorge-85514.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email, loadData]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://aqueous-gorge-85514.herokuapp.com/user/add", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    setUser,
    registerUser,
    setloginError,
    googleLogin,
    setloadData,
    userLogin,
    logOut,

    admin,
    registerError,
    loginError,
    loadData,
    user,
  };
};

export default useFirebase;
