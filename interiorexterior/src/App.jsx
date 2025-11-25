import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import About from './pages/About';
// import InteriorExteriorContent from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// MUI Theme
import ServiceDetail from './components/ServicesCardForAll';// MUI Theme
const theme = createTheme({
  palette: {
    text: { primary: "#333333" },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Suspense fallback={<Loader />}> */}
          <Navbar />
<Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='/about' element={<About/>} />
  {/* <Route path='/services' element={<InteriorExteriorContent/>} /> */}

 <Route path="/services/:serviceId" element={<ServiceDetail />} />
  
  <Route path='/gallery' element={<Gallery/>} />
  <Route path ='/contact' element={<Contact/>}/>
</Routes>
<Footer/>
        {/* </Suspense> */}
      </Router>
    </ThemeProvider>
  );
}


export default App
