import { createTheme } from '@mui/material';

export const ThemingComponent = createTheme({
    palette:{
        primary:{
            main:"#1adced"
        },
        secondary:{
            main:"#d13bdb"
        }
    },
    typography:{
        h1:{
            fontSize: "2rem"
        }
    }

}) 


/*** #index.js code
import { ThemeProvider } from "@emotion/react";
import { ThemingComponent } from "./components/ThemingComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemingComponent}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
***/