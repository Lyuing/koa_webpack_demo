import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '' : '/api'
// console.log('process.env.NODE_ENV', process.env.NODE_ENV, baseURL)
const http = axios.create({
  baseURL,
})
class Api {
  getHome(){
    http.get('/home').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  
  getDefault(){
    http.get('').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  async serch(name){
    try {
      const res = await http.post(`/serch`, { name });
      console.log(res);
      let list = res.data.data;
      return list; 
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()