import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photo, user] = values;
      console.log(`First Name: ${user.firstName} Last Name: ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
