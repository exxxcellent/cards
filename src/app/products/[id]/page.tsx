import { Product } from '@/types/product.interface';
import {
    Breadcrumbs,
    Chip,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material';
import Link from 'next/link';

interface PageProps {
    params: { id: string };
}

const getProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return await response.json();
};

export default async function Page({ params }: PageProps) {
    const data = await getProductById(+params.id);

    return (
        <div className="bg-zinc-200 min-h-screen">
            <div className="w-3/4 mx-auto py-4 flex flex-col gap-5">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        href="/products"
                        className="text-xl text-blue-500 hover:underline">
                        Products
                    </Link>
                    <Typography className="text-xl">{data.title}</Typography>
                </Breadcrumbs>
                <Typography
                    className="font-bold w-full flex justify-between"
                    variant="h3"
                    component="h2">
                    <div className="flex gap-5">
                        <Typography
                            className="font-bold"
                            variant="h3"
                            component="h2"
                            sx={{ color: 'text.primary' }}>
                            {data.brand}
                        </Typography>
                        <Typography
                            className="font-bold"
                            variant="h3"
                            component="h2"
                            sx={{ color: 'text.secondary' }}>
                            {data.title}
                        </Typography>
                        <Rating
                            size="medium"
                            readOnly
                            defaultValue={data.rating}
                        />
                    </div>
                    <Typography
                        className="font-bold text-blue-500"
                        variant="h3"
                        component="h2">
                        ${data.price}
                    </Typography>
                </Typography>
                <div className="flex gap-3">
                    {data.tags.map((tag) => (
                        <Chip
                            className="capitalize"
                            key={tag}
                            label={tag}
                            color="primary"
                            variant="filled"
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-3 gap-5">
                        {data.images.map((image) => (
                            <img
                                key={image}
                                src={image}
                                alt={data.title}
                                className="w-full border border-zinc-300 rounded-md object-cover h-[500px]"
                            />
                        ))}
                    </div>
                </div>
                <div className="bg-zinc-300 p-5 rounded-md">
                    <Typography
                        variant="h5"
                        component="h5"
                        gutterBottom>
                        Description
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p">
                        {data.description}
                    </Typography>
                </div>
                <Table className="bg-zinc-200 rounded-md">
                    <TableBody>
                        <TableRow>
                            <TableCell
                                colSpan={2}
                                className="bg-zinc-300">
                                <Typography
                                    variant="h6"
                                    component="h6">
                                    Dimensions
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    component="p">
                                    Width
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    component="p">
                                    {data.dimensions.width} cm
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    component="p">
                                    Height
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    component="p">
                                    {data.dimensions.height} cm
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    component="p">
                                    Depth
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    component="p">
                                    {data.dimensions.depth} cm
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div>
                    <Typography
                        variant="h5"
                        component="h5"
                        gutterBottom>
                        Reviews
                    </Typography>
                    <ul className="flex flex-col gap-5">
                        {data.reviews &&
                            data.reviews.map((review) => (
                                <li
                                    key={review.reviewerEmail}
                                    className="flex justify-between bg-zinc-300 p-5 rounded-md">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-0">
                                            <Typography
                                                className="font-medium text-blue-500"
                                                variant="h6"
                                                component="h6">
                                                {review.reviewerName}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                                sx={{
                                                    color: 'text.secondary',
                                                }}>
                                                {new Date(
                                                    review.date
                                                ).toDateString()}
                                            </Typography>
                                        </div>

                                        <Typography
                                            variant="body1"
                                            component="p">
                                            {review.comment}
                                        </Typography>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <Rating
                                            size="medium"
                                            value={review.rating}
                                            readOnly
                                        />
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
