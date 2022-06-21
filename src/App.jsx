import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import CardUser from './components/CardUser'
import Form from './components/Form'
import useUsersAPI from './hooks/useUsersAPI'


function App() {

  

  const {handleSubmit, register, reset} = useForm()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const  {users, getAllUsers, createUser, updateUser, deleteUser} = useUsersAPI(setObjectUpdate, setIsShowForm)

  const showForm = () => {
    const obj = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <div className='header'>
        <button className='usersButton' onClick={getAllUsers}>CRUD-Users APP </button>
        <button  onClick={showForm} className='createButton'>{isShowForm? 'Hide Form': '+ Create User'}</button>
      </div>
      <div className='App__form'>
        {
          isShowForm && 
          <Form 
            createUser={createUser}
            updateUser={updateUser}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
          />
        }
      </div>
      <div className='content'>
        {
          users?.map(user => {
            return <CardUser
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setObjectUpdate={setObjectUpdate}
              setIsShowForm={setIsShowForm}
              reset={reset}
            />
          })
        }
      </div>  
    </div>
  )
}

export default App
