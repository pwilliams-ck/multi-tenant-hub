'use client'

import * as React from 'react'
import { Lightbulb, LightbulbOff } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  // Get setTheme and the actual resolved theme
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    // Toggle between light and dark based on the resolved theme
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button variant="default" size="icon" onClick={toggleTheme}>
      <LightbulbOff className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Lightbulb className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
