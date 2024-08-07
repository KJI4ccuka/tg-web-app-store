import {useTelegram} from "./hooks/useTelegram.js";
import {useEffect} from "react";
import Header from "./components/header/header.jsx";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/product-list/product-list.jsx";
import Form from "./components/form/form.jsx";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </div>
    )
}

export default App
