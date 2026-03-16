import { useEffect } from "react"
import { GET_ME_URL } from "./constant/endpoints"
import { useUserStore } from "./global/user"
import axios from "axios"
import { useCounterStore } from "./global/counter"
import Home from "./components/Home"

function App() {
  const { setUser, user } = useUserStore()
  const checkUser = async () => {
    const token = localStorage.getItem("token")
    if (!token) return
    try {
      const { data } = await axios.get(GET_ME_URL)
      setUser(data.user)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      {/* ליצור ראוטים עם react router */}
      {/* / -> Home.jsx*/}
      {/* /register - Register.jsx */}
      {/* /login -> Login.jsx */}
    </>
  )
}

export default App
