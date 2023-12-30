import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccount.json";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export const auth = getAuth(app);
