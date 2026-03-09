import { useEffect } from "react"
import { getRequest } from "./services/service"
import { GET_ME_URL } from "./constant/endpoints"
import { useUserStore } from "./global/user"

function App() {
  const { setUser, user } = useUserStore()
  const checkUser = async () => {
    const token = localStorage.getItem("token")
    if (!token) return
    try {
      const { data } = await getRequest(GET_ME_URL)
      setUser(data.user)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    checkUser()
  }, [])

  return <h1 className="text-3xl font-bold underline">{user.createdAt}</h1>
}

export default App
