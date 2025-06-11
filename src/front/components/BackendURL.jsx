import React from "react";
import envFile from "../../../docs/assets/env-file.png";

const Dark = ({ children }) => (
  <span className="bg-dark text-white px-1 rounded">{children}</span>
);

export const BackendURL = () => (
  <div className="mt-5 pt-5 w-50 mx-auto">
    <h2>Missing <Dark>VITE_BACKEND_URL</Dark> env variable</h2>
    <p>
      Here's a video tutorial on{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.awesomescreenshot.com/video/16498567?key=72dbf905fe4fa6d3224783d02a8b1b9c"
      >
        how to update your backend URL environment variable.
      </a>
    </p>
    <p>
      There's a file called <Dark>.env</Dark> that contains the environmental variables for your project.
    </p>
    <p>
      There's one variable called <Dark>VITE_BACKEND_URL</Dark> that needs to be manually set by yourself.
    </p>
    <ol>
      <li>Make sure your backend is running on port <Dark>5000</Dark>.</li>
      <li>Open your API and copy the API host.</li>
      <li>Open the <Dark>.env</Dark> file (do not edit <Dark>.env.example</Dark>).</li>
      <li>
        Add a new variable like: <Dark>VITE_BACKEND_URL=http://localhost:5000</Dark>
      </li>
      <li>
        Replace <Dark>http://localhost:5000</Dark> with the public API URL of your backend server if running in the cloud.
      </li>
    </ol>
    <div className="w-100">
      <img src={envFile} alt="env setup" className="w-100" />
    </div>
    <p>
      <strong>Note:</strong> If you are deploying to Heroku, Render.com or any other hosting provider, follow their specific instructions for setting env variables.
    </p>
  </div>
);
