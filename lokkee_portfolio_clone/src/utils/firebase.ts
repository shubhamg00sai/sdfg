import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, doc, updateDoc, increment, getDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export async function saveMessage(name:string,email:string,message:string){
  const col = collection(db,'messages')
  return await addDoc(col,{name,email,message,createdAt:serverTimestamp()})
}

export async function incrementResumeDownload(){
  try{
    const ref = doc(db,'meta','resume')
    const snap = await getDoc(ref)
    if(!snap.exists()){
      await addDoc(collection(db,'meta'),{downloads:1, createdAt: serverTimestamp()})
      return
    }
    await updateDoc(ref,{downloads: increment(1)})
  }catch(e){
    console.warn('resume increment error',e)
  }
}
