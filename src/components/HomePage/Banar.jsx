import Image from "next/image";


const Banar = () => {
    const Baners = [
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide2',
            prev: '#slide4'
        },
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide3',
            prev: '#slide1'
        },
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide4',
            prev: '#slide2'
        },
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide1',
            prev: '#slide3'
        },
    ]
    return (
        <div className="container mx-auto">
            <div className="carousel w-full">
                {
                    Baners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`
                            }}
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full bg-no-repeat h-[100vh]"
                        >
                            <div className="h-full w-full flex items-center pl-36">
                                <div className="space-y-4">
                                    <h1 className="text-6xl ml-5">{banner.title}</h1>
                                    <h1 className="text-3 ml-5">{banner.description}</h1>
                                    <button className="btn btn-primary mr-5">Discover</button>
                                    <button className="btn btn-blue  text-wrap">Latest More</button>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Banar;