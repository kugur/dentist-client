import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        background: "#89C2D9",
        darkerBackground: "#55A6D9",
        inputBackground:  "#55A6D9",
        panelBackground: "#89C2D9",
        inputFontColor: "#0D4373",
        buttonColor: "#0D4373",
        buttonFontColor: "#89C2D9",
        fontColor:  "#55A6D9",
        primary: "#1462A6",
        secondary: "#2182BF",
        thirdry: "#0D4373",
        white: "#BCCFD1",
    }
}

const Theme = ({children}) => {
   return ( <ThemeProvider theme={theme}>{children}</ThemeProvider>)
};

export default Theme;