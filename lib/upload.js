// uploadData.js
var admin = require("firebase-admin");

var serviceAccount = require("../../lib/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const data = {
  cz: {
    hello: "Ahoj",
    myNameIs: "jmenuji se",
    // other fields...
  },
  en: {
    hello: "Hello",
    myNameIs: "My name is",
    // other fields...
  },
  de: {
    hello: "Hallo",
    myNameIs: "Mein Name ist",
    // other fields...
  }
};

async function uploadData() {
  try {
    for (const [lang, texts] of Object.entries(data)) {
      await db.collection('texts').doc(lang).set(texts);
      console.log(`Uploaded ${lang} data.`);
    }
  } catch (error) {
    console.error('Error uploading data:', error);
  }
}

uploadData();
