import React from 'react';
import cl from  './product-item.module.scss';
import Button from "../button/button.jsx";

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={cl.product + className}>
            <div className={cl.img}/>
            <div className={cl.title}>{product.title}</div>
            <div className={cl.description}>{product.description}</div>
            <div className={cl.price}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={cl.add-btn} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;