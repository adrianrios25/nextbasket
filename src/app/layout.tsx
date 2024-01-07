import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};
import { ReduxProviders } from "./globalRedux/provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProviders>
          <ThemeRegistry>
            <AppBar position="fixed" sx={{ boxShadow: "none" }}>
              <Header />
              <Navbar />
            </AppBar>
            <Box
              component="main"
              sx={{
                bgcolor: "background.default",
                mt: { xs: "64px", md: "140px" },
              }}
            >
              {children}
            </Box>
          </ThemeRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
