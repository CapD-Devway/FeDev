// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./firebaseUrl";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY as string,
  authDomain: AUTH_DOMAIN as string,
  projectId: PROJECT_ID as string,
  storageBucket: STORAGE_BUCKET as string,
  messagingSenderId: MESSAGING_SENDER_ID as string,
  appId: APP_ID as string,
  measurementId: MEASUREMENT_ID as string,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// 사용자가 선호하는 언어로 현지화
auth.languageCode = "kr";

// 0Auth 요청과 함께 전송할 커스텀 0Auth 제공업체의 매개변수 추가 지정
provider.setCustomParameters({
  login_hint: "user@example.com",
});

export { app, auth };
