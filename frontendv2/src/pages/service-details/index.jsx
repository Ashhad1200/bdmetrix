import { useEffect } from 'react';
import { useRouter } from 'next/router';
import service_data from '@/src/data/service-data';

// Redirect /service-details to the first service
const ServiceDetailsIndex = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the first service
        if (service_data.length > 0) {
            router.replace(`/service-details/${service_data[0].slug}`);
        } else {
            router.replace('/service');
        }
    }, [router]);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh'
        }}>
            <p>Loading...</p>
        </div>
    );
};

export default ServiceDetailsIndex;
