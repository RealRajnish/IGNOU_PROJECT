import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/productContext";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { FilterContextProvider } from "./contexts/filterContext";
import SingleProduct from "./pages/SingleProduct";
import { CartProvider } from "./contexts/cartContext";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import StrayAnimalPage from "./pages/StrayAnimalPage";
import BookAppointment from "./pages/BookAppointment";
import { UserProvider } from "./contexts/userContext";
import AddStrayAnimalPage from "./pages/AddStrayAnimalPage";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <UserProvider>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <ThemeProvider theme={theme} >
              <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/singleproduct/:id" element={<SingleProduct />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/loginPage" element={<LoginPage />} />
                  <Route path="/signUpPage" element={<UserRegistrationPage />} />
                  <Route path="/strayAnimalPage" element={<StrayAnimalPage />} />
                  <Route path="/bookAppointments" element={<BookAppointment />} />
                  <Route path="/addStrayAnimal" element={<AddStrayAnimalPage />} />
                  <Route path="*" element={<ErrorPage />} />



                </Routes>
                <Footer />
              </BrowserRouter>
            </ThemeProvider>
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </UserProvider>
  );
}

export default App;
