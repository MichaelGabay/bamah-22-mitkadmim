import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN_URL } from "../constant/endpoints"
import toast from "react-hot-toast"
import { useUserStore } from "../global/user"

function Login() {
  const { setUser } = useUserStore()
  const [form, setForm] = useState({
    email: "john@gmail.com",
    password: "123456",
  })
  const nav = useNavigate()

  const updateForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(LOGIN_URL, form)
      localStorage.setItem("token", data.token)
      setUser(data.user)
      nav("/", { replace: true })
    } catch (error) {
      toast.error("there is an error", { position: "top-left", duration: 1000 })
      setForm({ email: "", password: "" })
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-slate-900">Log in</h1>
        <p className="mt-1 text-slate-600">Sign in to your account.</p>
        <form onSubmit={login} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              value={form.email}
              onChange={updateForm}
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              value={form.password}
              onChange={updateForm}
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Log in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-slate-900 underline hover:no-underline"
          >
            Register
          </a>
        </p>
      </div>
    </main>
  )
}

export default Login
