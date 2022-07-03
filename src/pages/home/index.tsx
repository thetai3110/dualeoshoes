import Banner from "./components/Banner";
import Hot from "./components/Hot";
import Introduce from "./components/Introduce";
import New from "./components/New";
import Policy from "./components/Policy";
import SupperSale from "./components/SupperSale";
import Shop from "./components/Shop";
import SaleInfo from "./components/SaleInfo";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import './Home.scss';

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Policy />
            <SupperSale />
            <Hot />
            <Shop />
            <New />
            <Introduce />
            <SaleInfo />
            <Footer />
        </>
    )
}