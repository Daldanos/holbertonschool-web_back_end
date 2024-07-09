import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      const { firstName, lastName } = userResult;
      console.log(`photo-profile-${photoResult} ${firstName} ${lastName}`);
      return `photo-profile-${photoResult} ${firstName} ${lastName}`;
    })
    .catch(error => {
      console.log('Signup system offline');
      return 'Signup system offline';
    });
}
