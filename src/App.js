import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, styled } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./gloabalStyles";
import LoginSignupPage from "./pages/loginSignupPage";
import CustomerContact from "./pages/customerContact";
import HomePage from "./pages/homePage";
import MonthlyInventory from "./pages/monthlyInvertoryPage";
import GroceryListPage from "./pages/groceryListPage";
import DiscountPage from "./pages/discountPage";
import AddInventory from "./pages/addInventory";
import Header from "./components/utils/header/header";
import Sidebar from "./components/sidebar/sidebar";

const Layout = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding-top: 10vh;

  @media (max-width: 768px) {
    display: block;
    padding-top: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Routes>
        <Route path="/" Component={LoginSignupPage} />

        <Route
          path="/*"
          element={
            <Layout>
              <Header />
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
            </Layout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
