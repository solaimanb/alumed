import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import SmoothScroll from "components/SmoothScroll";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SmoothScroll>
    <App
      whileInView={{ opacity: 1 }}
      initial={{
        opacity: 0,
        background: "rgba(255, 255, 255, 0.1)",
      }}
      whileHover={{
        scale: 1.025,
        background: "rgba(255, 255, 255, 0.15)",
      }}
      transition={{
        type: "spring",
      }}
    />
  </SmoothScroll>
);
