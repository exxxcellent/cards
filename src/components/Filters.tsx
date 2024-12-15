'use client';
import { useProductsStore } from '@/store/useProductsStore';
import { KeyboardArrowDown } from '@mui/icons-material';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material';

export default function Filters() {
    const { changeType, type } = useProductsStore((state) => state);

    return (
        <div className="flex justify-between">
            <Typography
                className="font-bold"
                variant="h4"
                component="div">
                Фильтры
            </Typography>
            <FormControl className="w-1/4">
                <InputLabel id="type-select">Type</InputLabel>
                <Select
                    size="small"
                    IconComponent={KeyboardArrowDown}
                    labelId="type-select"
                    id="demo-simple-select"
                    defaultValue={'all'}
                    value={type}
                    label="Type"
                    onChange={(e: SelectChangeEvent) =>
                        changeType(e.target.value as 'all' | 'favorite')
                    }>
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={'favorite'}>Favorite</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
