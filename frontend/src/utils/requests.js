    
import axios from "axios";
export const getData = () => {
  let x;
  axios.get('http://127.0.0.1:8000/api/all/')
  .then(r=>{x = r.data})
  .catch(err=>console.log(err))
  return x;
};
