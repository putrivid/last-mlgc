const { Firestore } = require('@google-cloud/firestore'); 

const db = new Firestore ({
  projectId: 'submissionmlgc-putrividia',
  databaseId: 'last'
});
 
  const predictCollection = db.collection('predictions');
 
