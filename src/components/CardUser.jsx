import React from 'react'

const CardUser = ({user, deleteUser, reset, setObjectUpdate, setIsShowForm}) => {

  const updateUsers = () => {
    setIsShowForm(true)

    const obj = {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      birthday: user.birthday,
    }

    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <article className='cardUser'>
      <h2>{user.first_name} {user.last_name}</h2>
      <hr/>
      <ul>
        <li className='cardUser__sub'>EMAIL</li>
        <li>{user.email}</li>
        <br />
        <li className='cardUser__sub'>BIRTHDAY</li>
        <li>{user.birthday}</li>
      </ul>
      <hr />
      <div className='cardUser__buttons'>
        <button onClick={() => deleteUser(user.id)}>
          <i className='bx bxs-trash'></i>
        </button>
        <button onClick={updateUsers}>
          <i className='bx bxs-edit-alt'></i>
        </button>
      </div>
    </article>
  )
}

export default CardUser