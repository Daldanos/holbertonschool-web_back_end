import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`body ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(error => {
      console.log('Signup system offline');
    });
}
