import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_V4VxpLEO63uoP2xnO6IQ4o67Klu3nTY",
  authDomain: "tanikeun-ac443.firebaseapp.com",
  databaseURL: "https://tanikeun-ac443-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tanikeun-ac443",
  storageBucket: "tanikeun-ac443.appspot.com",
  messagingSenderId: "1091351830479",
  appId: "1:1091351830479:web:d208cb6bfc1d0140427cba",
  measurementId: "G-59EMNP6TDB",
  type: "service_account",
  project_id: "tanikeun-ac443",
  private_key_id: "053cd498a2f108f39b6d9ad94a5b725582191599",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCNdpquhT2Y9Kih\nwxabMaAdq9QXDwPs1Ggen6OREKje/ivXabb9F+WKaE/rAXExD8nE9VFHGCKIH5Kr\nejreeHozPUuojwCBSe+CWz9itFdCCIncbR9GgNfbk3AzbU/bnmUtP1PUIV5wG1zW\n+fpHIMQ8LndZQnL8Vt8U2GSeJZsixSMzhTxYFWj918e6EppWVZ3UX0hyD1ZrjiLu\n7DgBjqb2bLPb07r4mNvQ9+vZgNgLGYkUitXA3HKlMDjAsI9S8ANWhWOMx9t9APzy\nQOPTiu+D/zd9jYi8VZ344W+hA4gB64SPsc80/FKGfaPW0fQxRd7+zmm3JPK9nGzt\nXEwmuqLDAgMBAAECggEADUsUbQrzR2DSSeUpxiqrJ66ibwpHraUmJZ6Nwc+FdvL+\njq8N9Ymd1dxIikZn6xrXNI1y9lHTyOPipf+F8arznMYJSo0pmHyop6DIe4+D1Z40\nykRs2HS6FBWuSP7gLrybOF3HlFsQY0uG9WKnPLDdD+Sz7Wzbnk/RhcVx6xSQl/s3\nswI0sBsMRQ5qfEgakzSulfuwK2YJTenmFdb80RoktTFw9oSu2FTwlsAFNmMZaCzD\nt2pMktuKoDsLx3ed7lfu8+Ij2f4CCarkODud60g6bspjOckaHVk3ZJ2o80dD++KD\ntx5+gaFwIi0tzGXybC/fTxwZGAkNCQkd8UizMOYCaQKBgQDEvnQYDYtk57IkNW01\nkRX7OLEBzI+QW7EU6LhKSCrR+AtV7iqU0+H/rIRmEsydqKIaaF2v/UDX5r8o2TIU\n7fuE7jFQcaeN5wQatAnDf62Yc1gppJgSKjdUQbe4ytGBTmanA/qDTcZcGkC2SquB\ntL2r9L7Y/laqzVWQXAz4Joq2ywKBgQC4EdjEQT0eimLDeeWaLFlFV5nRYMHGsATL\nW+9a0TCLV0oPrV5vaEr+KIqNmEzwUZ/HdJ6MCXrUDj8DXuzDg93uNru3USvQ+hEs\nhViP1udEG+eBZqG056cUfnDAi6ds+XVLOAefXh62/AK7pCVVEjVKgWhzg7IoLTXB\nzTRJ7+JM6QKBgCuM6Q/l96Q3cYR4WxtPaWk5zFzUljbjRRiWxyySOwBNgtzbootd\nN5qr6obZxHdlu7RSw+JQEgl4p3n4UhC1+UYcn8fp0Kglqg/rKHohCiFD7xEQwSTM\nOYEqJuv94VBZNXnk9JAaKD19BjQT5VEJ3C5zN8e6zR5z42vYJHrNtUjvAoGBAKrd\nxj7H4JiNFYknin9HU8cOvnaiPr7Vfl3YBaRkM4/lg5Zx9Qut4I91ysgN7L3Yx107\nYEHWOvLGFrBmWZpUupr6q95Lt0TSHUcasU80ypFq5cg1IT7xGyPnC3txKAX8u2kL\npefGUvTBkzfj89O4h0eWQQOZ6LNq5E/20OchiwyhAoGAM3AF591J/Am3IFoP+yO3\nGSiBNZH6okVaQYlu7AL9I0JnrOKg/wDPND1pQmJhQKR9iTXFObSTjcXmLPoWEFpC\npH+Ek0f5QN2YvV7Ab2mH0LZqoBC+uEQF+yjTpfefQcGOuak/h/k+2CCAg7J53ECw\n81WeJnbDTDljifbd2LHZ6D8=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-7tpsj@tanikeun-ac443.iam.gserviceaccount.com",
  client_id: "107488850447155117331",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7tpsj%40tanikeun-ac443.iam.gserviceaccount.com"
};
export const firebaseapp=firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

