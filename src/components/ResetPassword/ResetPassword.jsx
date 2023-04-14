import { Link } from "react-router-dom"
import { useAuthProvider } from "../../hook/useAuthProvider"
import { useState } from "react"
import { Alert } from "../Alert/Alert"

export const ResetPassword = () => {

  const { resetPassword, user, setUser } = useAuthProvider()
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleReset = async (e) => {
    e.preventDefault()
    if (!user?.email) return setError('Please enter your email')
    try {
      resetPassword(user.email)
      setMessage('Check your email for further instructions')
      setError(null)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} /> || message && <p className="bg-blue-100 border-blue-400 text-blue-700 px-4 py-2 rounded relative mb-2 text-center">{message}</p>}

      <form onSubmit={handleReset} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="youremail@email.com"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-center">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reset</button>
        </div>


        <p className="my-4 text-sm flex justify-between px-3">Don't have an Account? <Link className="text-blue-500" to='/register'>Register</Link></p>


      </form>
    </div>
  )
}