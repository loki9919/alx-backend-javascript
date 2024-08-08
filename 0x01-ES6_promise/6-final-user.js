import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const array = [];
    values.forEach((item) => {
      if (item.status === 'fulfilled') {
        array.push({ status: item.status, value: item.value });
      } else {
        array.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return array;
  });
}
