import React from "react";
import useWindowWidth from "./useWindowWidth"; // adjust path if needed

function MyComponent() {
  const width = useWindowWidth();

  const getDeviceType = () => {
    if (width < 600) return "📱 Mobile";
    if (width < 1024) return "💻 Tablet";
    return "🖥 Desktop";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Window Width Tracker</h2>
      <p style={styles.widthText}>
        Current width: <strong>{width}px</strong>
      </p>
      <p style={styles.deviceType}>
        Detected device: <strong>{getDeviceType()}</strong>
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "2rem auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333",
  },
  widthText: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  deviceType: {
    fontSize: "1.2rem",
    color: "#0077cc",
  },
};

export default MyComponent;
