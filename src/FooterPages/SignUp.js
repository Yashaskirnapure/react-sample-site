import './signUp.css';

const SignUp = () => {
  return (
    <article className="SignUp">
      <h2>Sign up for our Newsletter</h2>
      <form action="" className="signUpForm">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          required
          placeholder="First Name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          required
          placeholder="Last Name"
        />
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          required
          placeholder="Enter you E-mail"
        />
        <button>Submit</button>
      </form>
    </article>
  )
}

export default SignUp