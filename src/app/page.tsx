import { Box, Typography } from '@mui/material';

export default function Page() {
    return (
        <div className="bg-zinc-200 min-h-screen">
            <Box className="w-3/4 mx-auto py-4 flex flex-col gap-5">
                <Typography
                    className="font-bold"
                    variant="h3"
                    component="h2">
                    Home
                </Typography>
            </Box>
        </div>
    );
}
