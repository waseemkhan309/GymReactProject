import React, { useState } from 'react'
import {BiSolidSun,BiSolidMoon} from "react-icons/bi"

const Darkmode = () => {
  const [theme,setTheme] = useState("light")
  return (
    <div>
      {
        theme === "light" ? (<BiSolidSun/>) :(<BiSolidMoon/>)
      }
    </div>
  )
}

export default Darkmode