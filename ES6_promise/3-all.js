import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      if (typeof userResult === 'object' && userResult !== null && userResult.hasOwnProperty('firstName') && userResult.hasOwnProperty('lastName')) {
        const { firstName, lastName } = userResult;
        console.log(`photo-profile-${photoResult} ${firstName} ${lastName}`);
        return `photo-profile-${photoResult} ${firstName} ${lastName}`;
      } else {
        console.log('Signup system offline');
        return 'Signup system offline';
      }
    })
    .catch(error => {
      console.log('Signup system offline');
      return 'Signup system offline';
    });
}
