import ServicesCard from '@/components/Cards/ServicesCard';
import React from 'react';
import { getServices } from "@/servicess/getServices";

const page = async () => {
    const { services } = await getServices();
    return (
        <div className='container mx-auto text-center bg-base-100'>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    services.map((service) => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }

            </div>
        </div>

    );
};

export default page;