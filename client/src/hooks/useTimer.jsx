import React, { useEffect, useRef, useState } from "react"

const useTimer = (limitSecounds = 1) => {
  const [timeOver, setTimeOver] = useState(false)

  useEffect(() => {
    start()
  }, [])

  const start = () => {
    let counter = 0
    const interId = setInterval(() => {
      counter++
      if (counter == limitSecounds) {
        clearInterval(interId)
        setTimeOver(true)
      }
    }, 1000)
  }

  return { timeOver }
}

export default useTimer
