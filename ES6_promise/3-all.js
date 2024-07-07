import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`User: ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}
