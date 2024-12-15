import { Skeleton } from '@mui/material';

export default function SkeletonProductCard() {
    return (
        <div className="flex flex-col items-start gap-1 relative">
            <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ width: '100%', height: 240 }}
            />
            <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: '100%', height: 40 }}
            />
            <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                    width: '20%',
                    height: 36,
                    position: 'absolute',
                    left: 10,
                    top: 10,
                    borderRadius: 16,
                }}
            />
            <Skeleton
                variant="rounded"
                animation="wave"
                sx={{ width: '100%', height: 100 }}
            />
        </div>
    );
}
