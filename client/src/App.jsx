import { useEffect } from "react"
import { GET_ME_URL } from "./constant/endpoints"
import { useUserStore } from "./global/user"
import axios from "axios"

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

  return <h1 className="text-3xl font-bold underline">hey hwy</h1>
}

export default App
