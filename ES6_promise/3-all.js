export default function handleProfileSignup() {
  const uploadPhoto = () => {
    return new Promise((resolve) => {
      resolve({ body: 'photo-profile-1' });
    });
  };

  const createUser = () => {
    return new Promise((resolve) => {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' });
    });
  };

  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
