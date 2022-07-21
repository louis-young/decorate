import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { queryClientConfiguration } from "./constants/queryClient";
import { Fallback } from "./components/Fallback";
import { Application } from "./Application";
import "./index.css";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient(queryClientConfiguration);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <QueryClientProvider client={queryClient}>
        <Toaster
          gutter={16}
          toastOptions={{
            duration: 3 * 1000, // Three seconds.
          }}
        />
        <Application />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
