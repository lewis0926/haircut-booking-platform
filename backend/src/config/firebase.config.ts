import { getAuth } from "firebase-admin/auth";

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const auth = getAuth(app);
