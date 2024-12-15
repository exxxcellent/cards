// types
import { Product } from '@/types/product.interface';
import type { UseProductsStore } from '@/types/useProductsStore.interface';
// zustand
import { create } from 'zustand';

export const useProductsStore = create<UseProductsStore>((set, get) => ({
    type: 'all',
    changeType: (type) => {
        set({ type });
    },
    products: [],
    createdProducts: [],
    getProducts: async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        set({ products: data.products });

        return data.products;
    },
    addProduct: (data) => {
        const product: Product = {
            availabilityStatus: '',
            brand: data.brand,
            category: '',
            description: data.description,
            discountPercentage: 0,
            id: get().products.length + 1,
            images: data.images.split(','),
            price: +data.price,
            rating: 0,
            sku: '',
            stock: 0,
            tags: [''],
            thumbnail: data.thumbnail,
            title: data.title,
            weight: 0,
            warrantyInformation: '',
            shippingInformation: '',
            returnPolicy: '',
            minimumOrderQuantity: 0,
            dimensions: {
                width: +data.width,
                height: +data.height,
                depth: +data.depth,
            },
            meta: {
                createdAt: new Date().toISOString(),
                updatedAt: '',
                barcode: '',
                qrCode: '',
            },
        };

        set((state) => ({
            createdProducts: [...state.createdProducts, product],
        }));
    },
    removeProduct: (id) => {
        set((state) => ({
            products: state.products.filter((item) => item.id !== id),
            favoriteProducts: state.favoriteProducts.filter(
                (item) => item.id !== id
            ),
        }));
    },
    favoriteProducts: [],
    toggleFavorite: (data) => {
        set((state) => ({
            favoriteProducts: state.favoriteProducts.includes(data)
                ? state.favoriteProducts.filter((item) => item.id !== data.id)
                : [...state.favoriteProducts, data],
        }));
    },
}));
