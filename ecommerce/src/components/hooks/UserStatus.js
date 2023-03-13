import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function UserConected(){
    const auth = getAuth();
    const user = auth.currentUser;
    return user.email
}
