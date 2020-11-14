import * as admin from 'firebase-admin';
import serviceAccount from "./serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://task-management-9dc17.firebaseio.com"
});

export const db = admin.firestore();