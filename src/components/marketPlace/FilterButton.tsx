"use client"
import { useFilterModalStore } from '@/src/store/useFilterModalStore';
import { Button } from '../ui/Button'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'

const FilterButton = () => {
    const { open } = useFilterModalStore();




    return (
        <Button variant="outline" icon={<HiOutlineAdjustmentsHorizontal size={20}  />} onClick={open}>
            Filter
        </Button>

    )
}

export default FilterButton