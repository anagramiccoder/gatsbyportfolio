import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "./layout.css"
export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) {
          return null
        }
        return (
        <div className="theme-switch-wrapper">
          <label className="theme-switch">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
              checked={theme === "light"}
            />
            <div className="slider round"></div>
          </label>
        </div>
        )
      }}
    </ThemeToggler>
  )
}