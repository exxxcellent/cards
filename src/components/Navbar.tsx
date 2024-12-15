'use client';
import { pages } from '@/constants/pages';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="p-5 bg-zinc-600 text-white flex items-center gap-10">
            <Typography
                variant="h3"
                fontWeight={500}
                component="h1">
                Cards
            </Typography>
            <ul className="flex gap-4">
                {pages.map((page) => (
                    <li key={page.label}>
                        <Button
                            variant="text"
                            size="large"
                            className="text-white text-xl capitalize"
                            onClick={() => {
                                router.push(page.href);
                            }}>
                            {page.label}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
