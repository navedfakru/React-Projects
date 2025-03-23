import React from 'react'
import useTheme from '../contexts/Theme'

function ThemeBtn() {

  const {darkTheme, lightTheme, themeMode} = useTheme()

  const changeBtn = (e) => {
    const toggle = e.currentTarget.checked;
    // (e) => console.log(e.currentTarget.checked)
    console.log(toggle)
    if(toggle){
      darkTheme()
    }else {
      lightTheme()
    }
  }

  return (
    <input
      type='checkbox'
      className='w-5 h-5 rounded-full'
      value=""
      onChange={changeBtn}
      // checked={themeMode === "dark"}
      checked={themeMode === "dark"}
    />
  )
}

export default ThemeBtn