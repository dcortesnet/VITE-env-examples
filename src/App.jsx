import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const envFile = import.meta.env.VITE_ENV_FILE;

  console.log("API URL:", apiUrl);
  console.log("API Key:", apiKey);
  console.log("Vite name env file:", envFile);

  return (
    <div>
      <h1>Variables de entorno en Vite</h1>
      <ul>
        <li>API URL: {apiUrl}</li>
        <li>API Key: {apiKey}</li>
        <li>ENV file: {envFile}</li>
      </ul>
    </div>
  );
}

export default App;
