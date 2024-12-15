'use client';
// react
import { useEffect } from 'react';
// store
import { useProductsStore } from '@/store/useProductsStore';
// mui
import { Typography } from '@mui/material';
// components
import ProductCard from './ProductCard';
import SkeletonProductCard from './SkeletonProductCard';

export default function CardList() {
    const { getProducts, products, createdProducts, type, favoriteProducts } =
        useProductsStore((state) => state);

    useEffect(() => {
        getProducts();
    }, []);

    if (type === 'favorite' && favoriteProducts.length === 0) {
        return <Typography variant="h3">No favorites products</Typography>;
    }

    if (type === 'all' && products.length === 0) {
        return (
            <div className="grid grid-cols-5 gap-5">
                {new Array(30).fill(0).map((_, index) => (
                    <SkeletonProductCard key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-5 gap-5">
            {type === 'all' &&
                products.length > 0 &&
                [...products, ...createdProducts].reverse().map((card) => (
                    <ProductCard
                        isFavorite={favoriteProducts.includes(card)}
                        key={card.id}
                        data={card}
                    />
                ))}
            {type === 'favorite' &&
                favoriteProducts.map((card) => (
                    <ProductCard
                        isFavorite={favoriteProducts.includes(card)}
                        key={card.id}
                        data={card}
                    />
                ))}
        </div>
    );
}
