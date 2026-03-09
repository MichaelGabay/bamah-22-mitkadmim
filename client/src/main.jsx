import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import axios from "axios"
import { BASE_URL } from "./constant/endpoints.js"
// כל הבקשות שיצאו דרך אקסיוס ישתמשו בבייס יו אר אל הנל
axios.defaults.baseURL = BASE_URL

createRoot(document.getElementById("root")).render(<App />)
