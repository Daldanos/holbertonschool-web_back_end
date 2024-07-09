import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`photo-profile-${photoResult} ${userResult.firstName} ${userResult.lastName}`);
      return `photo-profile-${photoResult} ${userResult.firstName} ${userResult.lastName}`;
    })
    .catch(error => {
      console.log('Signup system offline');
      return 'Signup system offline';
    });
}
