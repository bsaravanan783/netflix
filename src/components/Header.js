import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleAiSearchView } from "../utils/aiSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const aiSearchView = useSelector((store) => store.ai.showAiSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //dispathch action will take place in onauthState change??
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleAiSearch = () => {
    //toggle ai search

    dispatch(toggleAiSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-3">
          {aiSearchView && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language, index) => {
                return (
                  <option key={index} value={language.identifier}>
                    {language.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="text-white px-4 py-2 mx-6 bg-purple-800 rounded-md"
            onClick={handleAiSearch}
          >
            {!aiSearchView?"AI search":"Home Page"}
          </button>
          <img
            className="w-12 h-12"
            alt="usericon"
            // src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            src={user.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
