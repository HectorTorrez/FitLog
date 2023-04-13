import { useState } from "react"
import { useAuthProvider } from "../../hook/useAuthProvider"
import { useNavigate } from "react-router-dom"

export const Register = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null)


  const navigate = useNavigate()
  const { signup } = useAuthProvider()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await signup(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="youremail@email.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password"
          onChange={handleChange}

        />

        <button>Register</button>
      </form>
    </>
  )
}