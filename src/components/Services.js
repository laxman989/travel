import React from "react";
import { services } from "../data.js";

const Services = () => {
    return <>
        <section id="services" className="py-10 px-5">
            <h1 className="text-3xl text-center font-semibold uppercase pb-5">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => (
                        <div key={service.id} className="rounded-sm shadow-md p-4">
                            <h4 className="text-center font-semibold">{service.name}</h4>
                            <p className="text-center">{service.description}</p>
                        </div>
                    )
                    )
                }
            </div>
        </section>
    </>
}

export default Services;