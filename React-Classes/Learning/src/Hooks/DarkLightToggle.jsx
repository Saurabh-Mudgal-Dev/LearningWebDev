import React, {useState} from 'react'

const DarkLightToggle = () => {
    const [dark, setDark] = useState(false);

    return (
        <div style={{
            backgroundColor: dark ? "#222" : "#fff",
            color: dark ? "#fff" : "#000",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    );
}

export default DarkLightToggle