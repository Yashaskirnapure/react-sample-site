import React from 'react'
import './feedbackForm.css'

const Feedback = () => {
  return (
    <div className="feedbackForm">
      <h1>Send us your feedback</h1>
      <form action="">
        <label htmlFor="firstName">First Name</label>
        <input
          id='firstName'
          type="text"
          placeholder='First Name'
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id='lastName'
          type="text"
          required
          placeholder='Last Name'
        />
        <label htmlFor="email">E-mail</label>
        <input
          id='email'
          type="text"
          required
          placeholder='E-mail'
        />
        <label htmlFor="body"></label>
        <textarea
          type="text"
          required
          id='body'
          rows='10'
        />
        <button className='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default Feedback