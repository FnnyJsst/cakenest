import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";
import  LoginPage  from "./components/pages/login/LoginPage";
import  OrderPage  from "./components/pages/order/OrderPage";
import Menu from "./components/pages/order/Main/MainRightSide/Menu";
import { MenuProvider } from "./context/MenuContext";

function App() {
    return (
        <MenuProvider>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/order/:username" element={<OrderPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </MenuProvider>
    );
}

export default App;
