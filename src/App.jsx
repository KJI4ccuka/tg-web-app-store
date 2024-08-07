import {useTelegram} from "./hooks/useTelegram.js";
import {useEffect} from "react";
import Header from "./components/header/header.jsx";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/product-list/product-list.jsx";
import Form from "./components/form/form.jsx";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <>
            <Header/>
            <div className={'App'}>
                <Routes>
                    <Route index element={<ProductList/>}/>
                    <Route path={'/form'} element={<Form/>}/>
                </Routes>
                <button onClick={onToggleButton}>toggle</button>
            </div>
        </>
    )
}

export default App
