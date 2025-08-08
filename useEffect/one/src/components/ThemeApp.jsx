import { useState, useEffect} from 'react'
import ThemedBox from './ThemedBox'

function ThemeApp() {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light';
    });
    useEffect(()=>{
        localStorage.setItem('theme', theme);
    },[theme])
    const toggleTheme = () => {
            setTheme(theme === 'light'?'dark':'light')
    }
    return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme === "light" ? "#f5f5f5" : "#1e1e1e",
        transition: "background 0.3s",
      }}
    >
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* 4️⃣ Render 3 themed boxes */}
      <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
        <ThemedBox theme={theme} label="Box 1" />
        <ThemedBox theme={theme} label="Box 2" />
        <ThemedBox theme={theme} label="Box 3" />
      </div>
    </div>
  );
}

export default ThemeApp
