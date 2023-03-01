import "./index.css";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

//FIRST we need to connect with our supabase, for that we use our environment variables and connect to them with the following function and configuration:
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

//SECONDLY we cover our App with the SessionContextProvider, adding the property for the supabaseClient of our previous connection and configuration --> supabase
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
