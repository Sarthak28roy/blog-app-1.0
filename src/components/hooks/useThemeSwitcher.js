import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const [theme, setTheme] = useTheme();
    const currentTheme = theme ==='system'? systemTheme : theme;
  return (
    <div>useThemeSwitcher</div>
  )
}

export default useThemeSwitcher