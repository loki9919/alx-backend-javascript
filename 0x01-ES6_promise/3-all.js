import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    const i = uploadPhoto();
    const j = createUser();

    return Promise.all([i, j]).then((value) => {
        console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline')});
}