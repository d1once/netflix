import { useContext, useState } from "react";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
