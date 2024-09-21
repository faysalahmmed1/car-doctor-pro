// import { services } from "@/Lib/Services";
import { getServices } from "@/servicess/getServices";
import ServicesCard from "../Cards/ServicesCard";
import Link from "next/link";

const Services = async () => {
    const { services } = await getServices();
   

    return (
        <div className="container mx-auto text-center">
            <div className="text-center">
                <h1 className="text-red-500 font-semibold">Services</h1>
                <h1 className="text-4xl text-black"> Our Service Area</h1>
                <p className="text-black">The majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 m-10 ">
                {
                    services?.length > 0 && services.map((service) => (
                        <ServicesCard key={service._id} service={service} />
                    ))
                }
            </div>
            <Link href={'/service'}><button className="btn text-center items-center btn-outline">More Services..</button></Link>
        </div>
    );
};

export default Services;