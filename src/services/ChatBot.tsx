"use client";
import { useEffect } from "react";

// function for script script
const injectScripts = () => {
  const botpressScript = document.createElement("script");
  botpressScript.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
  botpressScript.async = true;

  const configScript = document.createElement("script");
  configScript.src = process.env.NEXT_PUBLIC_BOT_ID!;
  configScript.defer = true;

  // Append the scripts to the body
  document.body.appendChild(botpressScript);
  document.body.appendChild(configScript);

  return { botpressScript, configScript };
};

const Chatbot = () => {
  useEffect(() => {
    const { botpressScript, configScript } = injectScripts();
    botpressScript.onload = () => {
      const { botpress } = window;

      if (!botpress) return;

      botpress.on("error", (error: any) => {
        console.error(`Error while initializing chatbot: ${error}`);
      });
    };
    // Cleanup function
    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null;
};

export default Chatbot;
