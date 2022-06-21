import React from 'react'

const Form = ({createUser, updateUser, objectUpdate, handleSubmit, register, reset}) => {

  const defaultValuesForm = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
  }

  const submit = data => {
    // debugger
    console.log(objectUpdate)
    if(objectUpdate !== undefined){
      updateUser(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form'>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id='first_name' {...register('first_name')} />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id='last_name' {...register('last_name')} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' {...register('password')} />
        </div>
        <div>
          <label htmlFor="birthday">Release Date</label>
          <input type="date" id='birthday' {...register('birthday')} />
        </div>
        <button>Submit</button>
      </form>
  )
}

export default Form