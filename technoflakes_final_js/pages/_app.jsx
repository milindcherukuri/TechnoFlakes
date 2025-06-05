// pages/_app.jsx
import "../styles/globals.css";   // ← this must match the path to your globals.css

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
