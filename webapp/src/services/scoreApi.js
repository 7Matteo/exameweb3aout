import axios from "axios"

const baseUrl = "http://localhost:3001/api/scores"

const getAll = () => axios.get(baseUrl).then(response => response.data)

/*const create = (personPayload) => axios.post(baseUrl, personPayload).then(response => response.data)

const remove = (person) => axios.delete(`${baseUrl}/${person.id}`)

const update = (person, payload) => axios.put(`${baseUrl}/${person.id}`, payload).then(response => response.data)
*/
const ScoresAPI = {
  getAll,
}

export default ScoresAPI
