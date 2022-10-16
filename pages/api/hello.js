// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { onGetUsers, saveUser } from "../../utils/firebase";
import { users } from '../../utils/students.js';

export default async function handler(req, res) {
  
  //return content of users array
  res.status(200).json('users');
  
}
