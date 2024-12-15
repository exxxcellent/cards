import CreateForm from '@/components/CreateForm';
import { Box, Typography } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create new product',
    description: 'App about cards',
};

export default function Page() {
    return (
        <div className="bg-zinc-200 min-h-screen">
            <Box className="w-3/4 mx-auto py-4 flex flex-col gap-5">
                <Typography
                    className="font-bold"
                    variant="h3"
                    component="h2">
                    Create new product
                </Typography>
            </Box>
            <CreateForm />
        </div>
    );
}
