// ThemedBox.jsx
export default function ThemedBox({ theme, label }) {
  const styles = {
    container: {
      width: 120,
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      fontWeight: 600,
      transition: "all 0.3s",
      // Dynamic colors based on the theme prop
      background: theme === "light" ? "#ffffff" : "#333",
      color: theme === "light" ? "#333" : "#fafafa",
      boxShadow:
        theme === "light"
          ? "0 2px 6px rgba(0,0,0,0.15)"
          : "0 2px 6px rgba(0,0,0,0.60)",
    },
  };

  return <div style={styles.container}>{label}</div>;
}
