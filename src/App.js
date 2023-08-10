import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./gloabalStyles";
import LoginSignupPage from "./pages/loginSignupPage";
import CustomerContact from "./pages/customerContact";
import HomePage from "./pages/homePage";
import MonthlyInventory from "./pages/monthlyInvertoryPage";
import GroceryListPage from "./pages/groceryListPage";
import DiscountPage from "./pages/discountPage";
import AddInventory from "./pages/addInventory";
import ShoppingPage from "./pages/shoppingPage";
import TestBar from "./components/text-sidebar/testNavbar";
import Header from "./components/utils/header/header";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Routes>
        <Route path="/" Component={LoginSignupPage} />

        <Route
          path="/*"
          element={
            <div style={{ display: "flex", alignItems: "stretch" }}>
              {/* <Header /> */}
              <Sidebar />
              <Routes>
                <Route path="/home" Component={HomePage} />
                <Route path="/monthly-inventory" Component={MonthlyInventory} />
                <Route path="/discount" Component={DiscountPage} />
                <Route path="/grocery-list" Component={GroceryListPage} />
                <Route path="/add-inventory" Component={AddInventory} />
                {/* <Route path="/shopping-page" Component={ShoppingPage} /> */}
                <Route path="customer-services" Component={CustomerContact} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
