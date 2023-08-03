import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./gloabalStyles";

import LoginSignupPage from "./pages/loginSignupPage";
import CustomerContact from "./pages/customerContact";
import HomePage from "./pages/homePage";
import MonthlyInventory from "./pages/monthlyInvertoryPage";
import DiscountPage from "./pages/discountPage";
import SearchProduct from "./pages/searchProduct";
import ShoppingPage from "./pages/shoppingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" Component={LoginSignupPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/monthly-inventory" Component={MonthlyInventory} />
        <Route path="/discount" Component={DiscountPage} />
        <Route path="/search" Component={SearchProduct} />
        <Route path="/shopping-page" Component={ShoppingPage} />
        <Route path="customer-services" Component={CustomerContact} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
