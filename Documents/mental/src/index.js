import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Yeh sahi hai
 // ✅ Yehi sahi import hai

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

