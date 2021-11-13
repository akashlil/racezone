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
  const [adminloadData, setAdminloadData] = useState(true);

  // error message
  const [registerError, setRegisterError] = useState("");
  const [loginError, setloginError] = useState("");

  // register user email and password snd displayName
  const registerUser = (email, password, name, history, location) => {
    setloadData(true);
    const { from } = location.state || { from: { pathname: "/" } };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
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
      .finally(() => {
        setloadData(false);
      });
  };

  // user login email and password
  const userLogin = (email, password, history, location) => {
    setloadData(true);
    const { from } = location.state || { from: { pathname: "/" } };
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentail) => {
        const user = userCredentail.user;
        setUser(user);
        setloginError("");
        history.replace(from);
        setloadData(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setloginError(errorMessage);
      });
  };

  // googleLogin user button
  const googleLogin = (history, location) => {
    setloadData(true);
    const { from } = location.state || { from: { pathname: "/" } };
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setloginError("");
        setloadData(false);
        saveUser(user.email, user.displayName, "PUT");
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setloginError(errorMessage);
      });
  };

  // logOut user
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setloadData(true);
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
      setAdminloadData(false);
    });
    return () => unsubcri;
  }, [auth]);

  useEffect(() => {
    fetch(`https://aqueous-gorge-85514.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminloadData(false);
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
    googleLogin,
    userLogin,
    logOut,
    adminloadData,
    admin,
    registerError,
    loginError,
    loadData,
    user,
  };
};

export default useFirebase;
