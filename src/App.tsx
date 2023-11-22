import React from "react";
import "./assets/styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./assets/mui/them";
import { ThemeProvider } from "@mui/material";
import { queryClientOptions } from "./config/query-client.config";
import Routes from "./routes/routes";

function App() {
  const queryClient = new QueryClient(queryClientOptions);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
