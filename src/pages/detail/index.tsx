import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ProductMain from "./components/ProductMain";
import ProductFooter from "./components/ProductFooter";

import './Detail.scss';

export default function Detail() {
    return (
        <>
            <Header />
            <ProductMain />
            <ProductFooter />
            <Footer />
        </>
    )
}