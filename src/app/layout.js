"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

function ThemeProviderComponent({ children }) {
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      ...(themeMode === "light"
        ? {
            // Light mode settings
            primary: {
              main: "#1976d2",
            },
            background: {
              default: "#ffffff",
            },
          }
        : {
            // Dark mode settings
            primary: {
              main: "#90caf9",
            },
            background: {
              default: "#121212",
            },
          }),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeProviderComponent>{children}</ThemeProviderComponent>
        </Provider>
      </body>
    </html>
  );
}
