
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://car-doctor-pro-one.vercel.app/';

export const getServices = async () => {
    const res = await fetch(`${baseUrl}/services/api/get-all`);
    if (!res.ok) {
        throw new Error('Failed to fetch services');
    }
    const services = await res.json();
    return services;
};

export const getServicesDetails = async (id) => {
    const res = await fetch(`${baseUrl}/services/api/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch service with id: ${id}`);
    }
    const service = await res.json();
    return service;
};

