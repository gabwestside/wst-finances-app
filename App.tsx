import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
