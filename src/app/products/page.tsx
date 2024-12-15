import Filters from '@/components/Filters';
import CardList from '@/components/ProductCardList';
import { Divider, Typography } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products',
    description: 'App about cards',
};

export default function Page() {
    return (
        <div className="bg-zinc-200 min-h-screen">
            <div className="w-3/4 mx-auto py-4 flex flex-col gap-5">
                <Typography
                    className="font-bold"
                    variant="h3"
                    component="h2">
                    Products
                </Typography>
                <Filters />
                <Divider />
                <CardList />
            </div>
        </div>
    );
}
