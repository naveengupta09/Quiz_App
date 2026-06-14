import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const root = createRoot(document.getElementById('root'));

if (clerkKey) {
  root.render(
    <ClerkProvider publishableKey={clerkKey} navigate={(to) => (window.location.href = to)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  );
} else {
  console.warn('VITE_CLERK_PUBLISHABLE_KEY is not set — rendering without Clerk (auth disabled).');
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}