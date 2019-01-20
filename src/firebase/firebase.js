import * as firebase from 'firebase';
// import moment from 'moment';





  // Initialize Firebase
 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  const database = firebase.database();


  export {
      firebase, 
      database as default
  }









// database.ref('expenses')
// .on('child_removed', (snapshot) => {
    
//     console.log(snapshot.key, snapshot.val());
    
// });

// database.ref('expenses')
// .on('child_changed', (snapshot) => {
    
//     console.log(snapshot.key, snapshot.val());
    
// });

// database.ref('expenses')
// .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//   database.ref('expenses').push({
//       description: 'shoes',
//       note: 'new jordans',
//       amount: 209.89,
//       createdAt: moment().format('MM Do, YYYY')
//   });

// // database.ref('expenses')
// // .on('value', (snapshot) => {
// //     let expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         }); 
// //     })
// //     console.log(expenses);
// // });






// //   const firebaseData = database.ref('notes/-LWcxANxxi1NDJDLnk1D/title').on('value', (snapshot) => console.log(snapshot.val()));

// //   database.ref('notes/-LWcxANxxi1NDJDLnk1D').update({
// //       body: 'study for the night'
// //   });

// //   const firebaseNotes = {
// //       notes: {
// //           aljsflj: {
// //             title: 'first note!',
// //             body: 'This is my note'
// //           },
// //           alkjdfljlk: {
// //             title: 'another note!',
// //             body: 'This is another note'
// //           }
// //       }
// //   }

// //   const notes = [
// //       {
// //         id: '12',
// //         title: 'first note!',
// //         body: 'This is my note'
// //       }, {
// //         id: '12abc',
// //         title: 'another note!',
// //         body: 'This is another note'
// //       }
// //   ];

// //   database.ref('notes').push({
// //       title: 'course topics',
// //       body: 'React Native, Angular, Python'
// //   });

// //   database.ref('notes')
// //   .set(notes)
// //   .then(() => console.log(`data added!`))
// //   .catch((error) => console.log(`data not added: ${error}`));

// //   const onValueGet = database.ref().on('value', (snapshot) => {
// //       const val = snapshot.val();
// //       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// //   });

// //   database.ref().update({
// //       'job/company': 'Cisco'
// //   })
// //   .then(() => console.log('Data updated!'))
// //   .catch((error) => console.log(`Data was not updated: ${error}`));

// //   database.ref()
// //   .on('value', (snapShot) => {console.log(snapShot.val())});

// //   database.ref()
// //   .update({
// //       age: 37,
// //       stressLevel: 5
// //   })
// //   .then(() => console.log(`Data updated successfully!`))
// //   .catch(error => console.log(`Data was not updated: ${error}`));
// //   .then(snapshot => {
// //       const val = snapshot.val();
// //       console.log(val);
// //   })
// //   .catch(error => console.log(`cannot retrieve data: ${error}`));

//   //TODO: remove isSingle from database

// //   database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log(`Item successfully removed!`);
// //   }).catch((error) => {
// //       console.log(`Error when trying to remove item: ${error}`);
// //   });

// //   database.ref('isSingle')
// //   .set(null)
// //   .then(() => console.log(`Data was removed!`))
// //   .catch((error) => console.log(`Data was not removed. error code: ${error}`));

// //   database.ref().set({
// //       name: 'John Alexander',
// //       age: 37,
// //       stressLevel: 6,
// //       job: {
// //           title: 'Software Developer',
// //           company: 'Google'
// //       },
// //       location: {
// //           city: 'Chapel Hill',
// //           state: 'NC',
// //           country: 'United States'
// //       },
// //       attributes: ''
// //   }).then(() => {
// //       console.log(`data is saved!`);
// //   }).catch((error) => {
// //       console.log(`you have encountered an error: ${error}`);
// //   });

// //   database.ref().set('This is my data');

// // database.ref('age').set({
// //     age: 27
// // });

// // database.ref('location/city').set('Beverly Hills');
// // database.ref('location/city').set('Chapel Hill');

// // database.ref('attributes/height').set('67inches');
// // database.ref('attributes').set({height:67, weight: 189})
// // .then(() => console.log('Data Was Saved!'))
// // .catch(error => console.log(`You encountered an error: ${error}`));

// // database.ref('attributes').set({weight: 189});

// // database.ref()
// // .update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // })
// // .then(() => console.log(`Data was updated!`))
// // .catch((error) => console.log(`Data was not removed: error: ${error}`));

