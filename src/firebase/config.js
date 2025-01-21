import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBURE_fDqXKZIaTHDUbyvgEwZlZwbsYvxw",
  authDomain: "hiper-tiendita-db.firebaseapp.com",
  projectId: "hiper-tiendita-db",
  storageBucket: "hiper-tiendita-db.firebasestorage.app",
  messagingSenderId: "254430084884",
  appId: "1:254430084884:web:4306a975e7d6c2f4064c01"
}

export const app = initializeApp(firebaseConfig)
