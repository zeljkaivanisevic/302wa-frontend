import axios from 'axios'

//vezan uz konkretni backend
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})

//vezan uz pojedine rute
let Posts = {
   async getAll(searchTerm) {
    let response = await Service.get(`/posts?_any=${searchTerm}`)
    let data = response.data

    data =data.map(doc => {
        return {
            id: doc.id,
            url: doc.source,
            email: doc.createdBy,
            title: doc.title,
            posted_at: Number(doc.postedAt)
        }
      });
return data
    }
   }

export {Service, Posts}