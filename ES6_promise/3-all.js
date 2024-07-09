import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`First Name: ${user.firstName}, Last Name: ${user.lastName}`);
    })
    .catch(error => {
      console.log('Signup system offline');
    });
}
