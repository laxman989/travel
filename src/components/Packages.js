import React from "react";
import { packages } from "../data.js";
import PackageCard from "./PackageCard.js";

const Packages = () => {
    return <>
        <section id="packages" className="py-10 px-5">
            <h1 className="text-3xl text-center font-semibold uppercase pb-5">Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    packages.map(data => (
                        <PackageCard key={data.id} data={data} />
                    ))
                }
            </div>
        </section>
    </>
}

export default Packages;