import Image from "next/image";



const blogsData = [
    {
        id: 1,
        title: '5 Signs Your Car Needs an Engine Check',
        description: 'Learn how to recognize early signs of engine trouble and avoid costly repairs.',
        author: 'Michael Anderson',
        date: 'September 20, 2024',
        img: '/assets/images/team/1.jpg',
    },
    {
        id: 2,
        title: 'Brake Maintenance Tips for Safe Driving',
        description: 'Discover essential brake maintenance tips to ensure safety on the road.',
        author: 'Sarah Mitchell',
        date: 'September 18, 2024',
        img: '/assets/images/team/2.jpg',
    },
    {
        id: 3,
        title: 'How to Extend the Life of Your Car Battery',
        description: 'Simple steps to improve your car battery lifespan and prevent breakdowns.',
        author: 'Chris Ford',
        date: 'September 10, 2024',
        img: '/assets/images/team/3.jpg',
    },
    {
        id: 4,
        title: 'Top 10 Car Maintenance Tips for Winter',
        description: 'Prepare your car for winter with these essential maintenance tips to keep you safe.',
        author: 'Emily Clarkson',
        date: 'September 5, 2024',
        img: '/assets/images/services/3.jpg',
    },
    {
        id: 5,
        title: 'How to Improve Fuel Efficiency in Your Car',
        description: 'Learn how to reduce fuel consumption and save money with simple driving habits.',
        author: 'Johnathan Blake',
        date: 'August 28, 2024',
        img: '/assets/images/services/2.jpg',
    },
    {
        id: 6,
        title: 'The Importance of Regular Tire Rotation',
        description: 'Why tire rotation is essential and how it can help extend the life of your tires.',
        author: 'Samantha Taylor',
        date: 'August 15, 2024',
        img: '/assets/images/services/4.jpg',
    },
];


const page = () => {
    return (
        <div className='bg-white text-black text-center'>
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="font-bold text-4xl text-center mb-12 text-primary">Our Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogsData.map((blog) => (
                            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <Image width={100} height={48} src={blog.img} alt={blog.title} className="h-48 w-full object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                                    <p className="text-gray-600 mb-4">{blog.description}</p>
                                    <div className="text-sm text-gray-500">
                                        <span>{blog.author}</span> | <span>{blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;