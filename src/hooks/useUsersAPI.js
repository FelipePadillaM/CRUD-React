import axios from "axios"
import { useEffect, useState } from "react"

const URL = 'https://users-crud1.herokuapp.com/users/'
const useUsersAPI = (setObjectUpdate, setIsShowForm) => {

  const [users, setUsers] = useState()

  useEffect(() =>{
    getAllUsers()
  },[])

  const getAllUsers = () => {

    axios.get(URL)
      .then(res => {
        setUsers(res.data)     
      })
      .catch(err => console.log(err))
  }

  const getUserById = id => {
    axios.get(URL+`${id}/`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  const createUser = user => {
    // const user = {
    //   email: ' ',
    //   password: '123456',
    //   first_name: 'exam',
    //   last_name: 'ple',
    //   birthday: '2022-06-22',
    // }

    axios.post(URL, user)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const deleteUser = id =>{
    axios.delete(URL+`${id}/`)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUser = (id, userUpdate) => {

    setIsShowForm(true)

    // const userUpdate = {
    //   email: 'example@example.com',
    //   password: '123456',
    //   first_name: 'exam',
    //   last_name: 'ple',
    //   birthday: '2022-06-22',
    // }
    axios.put(URL+`${id}/`, userUpdate)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
      })
      .catch(err => console.log(err))
  }

  const partialUpdateUser = id =>{
    const userPatch = {
      email: 'example@example.com',
      password: '123456',
      first_name: 'exam',
      last_name: 'ple',
      birthday: '2022-06-22',
    }
    axios.patch(URL+`${id}/`, userPatch)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }
  return {users, getAllUsers, getUserById, createUser, deleteUser, updateUser, partialUpdateUser}
}

export default useUsersAPI