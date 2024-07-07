import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    const photoId = (photo && typeof photo === 'object' && photo.id) ? photo.id : 'unknown';
    console.log(`photo-profile-${photoId} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.error("Signup system offline");
  }
}

export default handleProfileSignup;
