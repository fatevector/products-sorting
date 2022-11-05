// Файл productList.jsx
import React, { useState } from "react";
import { products as productsFromData } from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";

// Варинты выбора признака сортировки
const sortOptions = [{ value: "price", label: "Цена" }];

const ProductList = () => {
    // Наши товары
    const [products] = useState(productsFromData);

    // Хранение признака сортировки
    const [sortSign, setSortSign] = useState("price");

    // Метод для изменения признака сортировки
    const handleChangeSortSign = e => {
        setSortSign(e.target.value);
    };

    return (
        <div className="container mt-t">
            <div>
                {/* Компонент выбора признака сортировки */}
                <SortSelect
                    value={sortSign}
                    options={sortOptions}
                    onSort={handleChangeSortSign}
                />
            </div>
            <div className="row mt-4">
                {products.map(product => (
                    // Список товаров
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
