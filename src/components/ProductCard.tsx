'use client';
// types
import type { Product } from '@/types/product.interface';
// mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Chip, IconButton, Rating } from '@mui/material';
import { Delete, Favorite } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useProductsStore } from '@/store/useProductsStore';

interface ProductCardProps {
    data: Product;
    isFavorite?: boolean;
}

export default function ProductCard({ data, isFavorite }: ProductCardProps) {
    const { toggleFavorite, removeProduct } = useProductsStore(
        (state) => state
    );
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(isFavorite);

    const handleToggleFavorite = (data: Product) => {
        toggleFavorite(data);
        setIsChecked(!isChecked);
    };

    return (
        <Card sx={{ maxWidth: 345, position: 'relative' }}>
            <CardActionArea onClick={() => router.push(`/products/${data.id}`)}>
                <CardMedia
                    className="min-h-96 w-full object-cover"
                    component="img"
                    image={data.thumbnail}
                    alt={`${data.brand} ${data.title}`}
                />
                <CardContent className="flex flex-col gap-2">
                    <Typography
                        className="truncate"
                        variant="h5"
                        component="h5">
                        {data.title}
                    </Typography>
                    {data.tags &&
                        data.tags.map((tag) => (
                            <Chip
                                className="bg-blue-100 capitalize"
                                key={tag}
                                label={tag}
                            />
                        ))}
                    <div className="flex gap-2"></div>
                    <Typography
                        variant="body2"
                        className="text-gray-600">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className="absolute top-[10px] right-[10px] flex items-center gap-2">
                <IconButton
                    className={isChecked ? 'text-red-600' : ''}
                    onClick={() => handleToggleFavorite(data)}>
                    <Favorite />
                </IconButton>
                <IconButton onClick={() => removeProduct(data.id)}>
                    <Delete />
                </IconButton>
            </div>
            <Rating
                sx={{ position: 'absolute', top: 20, left: 10 }}
                size="medium"
                readOnly
                defaultValue={data.rating}
            />
        </Card>
    );
}
