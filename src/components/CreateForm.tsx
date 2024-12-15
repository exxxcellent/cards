'use client';
import { useProductsStore } from '@/store/useProductsStore';
import type { CreateProduct } from '@/types/product.interface';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function CreateForm() {
    const { addProduct } = useProductsStore((state) => state);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            brand: '',
            title: '',
            price: '',
            description: '',
            width: '-',
            height: '-',
            depth: '-',
            thumbnail: '',
            images: '',
        },
    });

    const onSubmit = (data: CreateProduct) => {
        console.log(data);
        addProduct(data);
    };

    return (
        <form
            className="w-3/4 mx-auto py-4 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
                <FormControl>
                    <TextField
                        {...register('brand', {
                            required: true,
                            pattern: /^[A-Za-z]+$/,
                        })}
                        helperText={
                            errors.brand && 'Brand is required. From a to z.'
                        }
                        label="Brand *"
                        error={!!errors.brand}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        {...register('title', {
                            required: true,
                            pattern: /^[A-Za-z]+$/,
                        })}
                        helperText={
                            errors.title && 'Title is required. From a to z.'
                        }
                        label="Title *"
                        error={!!errors.title}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        multiline
                        rows={4}
                        {...register('description', {
                            required: true,
                            pattern: /^[A-Za-z]+$/,
                        })}
                        helperText={
                            errors.description && 'Description is required.'
                        }
                        label="Description *"
                        error={!!errors.description}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        type="number"
                        {...register('price', {
                            required: true,
                            pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                        })}
                        helperText={
                            errors.price && 'Price is required. From 0.'
                        }
                        label="Price *"
                        error={!!errors.price}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        multiline
                        rows={4}
                        {...register('images', {
                            required: true,
                            pattern: /^[A-Za-z]+$/,
                        })}
                        helperText={
                            errors.images &&
                            'Images is required and must be a links.'
                        }
                        label="Images *"
                        error={!!errors.images}
                    />
                    <p className="text-zinc-500 mt-2">
                        Links to images separated by commas
                    </p>
                </FormControl>
                <FormControl>
                    <TextField
                        {...register('thumbnail', {
                            required: true,
                            pattern:
                                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
                        })}
                        helperText={
                            errors.thumbnail &&
                            'Thumbnail is required and must be a link.'
                        }
                        label="Thumbnail *"
                        error={!!errors.thumbnail}
                    />
                </FormControl>
                <Typography>Dimensions</Typography>
                <div className="flex justify-between">
                    <FormControl fullWidth>
                        <TextField
                            type="number"
                            {...register('width', {
                                required: false,
                                pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                            })}
                            label="Width"
                            error={!!errors.width}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="number"
                            {...register('height', {
                                required: false,
                                pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                            })}
                            label="Height"
                            error={!!errors.height}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="number"
                            {...register('depth', {
                                required: false,
                                pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                            })}
                            label="Depth"
                            error={!!errors.depth}
                        />
                    </FormControl>
                </div>
            </div>
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Create
            </Button>
        </form>
    );
}
