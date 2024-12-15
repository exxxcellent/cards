import type { CreateProduct, Product } from './product.interface';

export interface UseProductsStore {
    type: 'all' | 'favorite';
    changeType: (type: 'all' | 'favorite') => void;
    products: Product[];
    createdProducts: Product[];
    getProducts: () => Promise<Product[]>;
    addProduct: (data: CreateProduct) => void;
    removeProduct: (id: number) => void;
    favoriteProducts: Product[];
    toggleFavorite: (data: Product) => void;
}
