import FrontendLayout from '@/app/components/layouts/FrontendLayout'
import { Navbar } from '@/app/components/navbar/Navbar'
import React from 'react'
import { FaMapMarkedAlt, FaRulerCombined } from 'react-icons/fa'
import { LuBath, LuBedDouble } from 'react-icons/lu'

const PropertyPage = () => {
    return (
        <FrontendLayout>
            <Navbar variant='Solid' />
            <section className='py-15'>
                <div className='mx-auto max-w-7xl px-6 lg:px-12 '>
                    <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
                        <div>
                            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-primary'>
                                For Sale
                            </p>
                            <h2 className='mt-3 text-4xl font-bold text-text md:text-5xl '>
                                Modern Luxury Apartment
                            </h2>
                            <div className='flex flex-wrap items-center gap-3 text-sm text-neutral-600 my-6  '>
                                <div className='flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 '>
                                    <FaMapMarkedAlt size={16} className='text-neutral-400' />
                                    <span className='font-medium text-neutral-800 '>
                                        Delhi Ncr
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 '>
                                    <FaRulerCombined size={16} className='text-neutral-400' />
                                    <span className='font-medium text-neutral-800 '>
                                        2200 sqft
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 '>
                                    <LuBedDouble size={16} className='text-neutral-400' />
                                    <span className='font-medium text-neutral-800 '>
                                       3 Rooms
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 '>
                                    <LuBath size={16} className='text-neutral-400' />
                                    <span className='font-medium text-neutral-800 '>
                                       2 Bathrooms
                                    </span>
                                </div>
                            </div>
                            
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    )
}

export default PropertyPage