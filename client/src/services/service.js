import axios from "axios"

export const getRequest = async (url, config = {}) => {
  try {
    const resp = await axios.get(url, {
      ...config,
      headers: { Authorization: localStorage.getItem("token") },
    })
    return resp
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postRequest = async (url, data, config = {}) => {
  try {
    const resp = await axios.post(url, data, {
      ...config,
      headers: { Authorization: localStorage.getItem("token") },
    })
    return resp
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const putRequest = async (url, data, config = {}) => {
  try {
    const resp = await axios.put(url, data, {
      ...config,
      headers: { Authorization: localStorage.getItem("token") },
    })
    return resp
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const deleteRequest = async (url, config = {}) => {
  try {
    const resp = await axios.delete(url, {
      ...config,
      headers: { Authorization: localStorage.getItem("token") },
    })
    return resp
  } catch (error) {
    console.error(error)
    throw error
  }
}
