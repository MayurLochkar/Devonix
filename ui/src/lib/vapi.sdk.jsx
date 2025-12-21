import { useEffect, useState } from "react";

export const useVapi = () => {
  const [vapi, setVapi] = useState(null);

  useEffect(() => {
    if (!window.Vapi) {
      const script = document.createElement("script");
      script.src = "https://cdn.vapi.ai/sdk/vapi.js";
      script.async = true;
      script.onload = () => {
        const client = new window.Vapi(process.env.REACT_APP_VAPI_KEY);
        setVapi(client);
      };
      document.body.appendChild(script);
    } else {
      const client = new window.Vapi(process.env.REACT_APP_VAPI_KEY);
      setVapi(client);
    }
  }, []);

  return vapi;
};
