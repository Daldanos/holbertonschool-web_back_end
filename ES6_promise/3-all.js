import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    const photoId = typeof photo === 'object' ? photo.id : photo;

    console.log(`photo-profile-${photoId} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.error("Signup system offline");
  }
}

export default handleProfileSignup;
