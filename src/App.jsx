
import { createTheme, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Company from "./components/Company";
import Agriculture from "./components/Agriculture";
import Construction from "./components/Construction";
import Contact from "./components/Contact";
import NewsMedia from "./components/NewsMedia";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: `#293A6E`,
      light: "#EAEBF1",
    },
    secondary: {
      main: `#FAA831`,
    },
    text: {
      primary: "#293A6E",
      secondary: "#707B9E",
    },
    
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            fontSize: "clamp(0.8rem, 3vw, 1rem)",
            backgroundColor: "primary.main",
            paddingBottom : "clamp(0.8rem,2vw,1.1rem)",
            paddingTop : "clamp(0.8rem,2vw,1.1rem)",
            paddingLeft : "clamp(1rem,5vw,2rem)",
            paddingRight : "clamp(1rem,5vw,2rem)",
            fontWeight: "700",
            lineHeight: "16px",
            borderRadius: "40px",
            textAlign: "center",
            textTransform: 'none',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            fontSize: "clamp(0.8rem, 3vw, 1rem)",
            BackgroundColor: "transparent",
            paddingBottom : "clamp(0.8rem,2vw,1.1rem)",
            paddingTop : "clamp(0.8rem,2vw,1.1rem)",
            paddingLeft : "clamp(1rem,5vw,2rem)",
            paddingRight : "clamp(1rem,5vw,2rem)",
            fontWeight: "700",
            lineHeight: "16px",
            borderRadius: "40px",
            textAlign: "center",
            textTransform: 'none',
          },
        },
      ],
    },
  },
});

theme.typography.h1 = {
  fontSize: "calc(1rem + 2.7vw)",
  fontWeight: "700",
  color: "primary",
  lineHeight: "clamp(2rem, 8vw, 4rem)",
  textAlign: "center",
};
theme.typography.h2 = {
  fontSize: "calc(1rem + 2.7vw)",
  fontWeight: "700",
  color: "primary",
  textAlign: "center",
};
theme.typography.h3 = {
  fontSize: "calc(1.355rem + 1.26vw)",
  fontWeight: "700",
  color: "primary",
  textAlign: "center",
};
theme.typography.h4 = {
  fontSize: "calc(1.3rem + 0.6vw)",
  fontWeight: "700",
  color: "primary",
  textAlign: "center",
};
theme.typography.h5 = {
  fontSize: "calc(1.1rem + 0.06vw)",
  fontWeight: "700",
  color: "primary",
  textAlign: "center",
};
theme.typography.h6 = {
  fontSize: "1rem",
  fontWeight: "700",
  color: "primary",
  textAlign: "center",
};
theme.typography.body1 =
{
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  fontWeight: '400',
  lineHeight: 'clamp(1.4rem, 4vw, 1.8rem)'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/agriculture" element={<Agriculture />}></Route>
          <Route exact path="/construction" element={<Construction />}></Route>
          <Route exact path="/news&media" element={<NewsMedia />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
