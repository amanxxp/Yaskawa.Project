// atoms.js
import { atom } from 'recoil';

 const imageState = atom({
  key: 'changeimage',
  default: 'https://res.cloudinary.com/doxxr74uv/image/upload/v1723965138/yaskawa/opm4tzgtqhw7slvs8wle.jpg',
});

export default imageState
