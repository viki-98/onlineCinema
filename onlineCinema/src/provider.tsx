import React, { createContext, useEffect, useState } from "react"

export const TContext = createContext()

const TProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (theme === "dark") document.body.classList.add("dark")
        else document.body.classList.remove("dark")
    }, [theme])
    return (
        <TContext.Provider value={[theme, setTheme]}>
            {children}
        </TContext.Provider>
    )
}

export default TProvider