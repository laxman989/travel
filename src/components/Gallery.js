import React from "react";
import { galleryImages } from "../data.js";

const Gallery = () => {
    return (
        <div id="gallery" className="py-10 px-5 bg-slate-200">
            <h1 className="text-3xl text-center font-semibold uppercase pb-5">Gallery</h1>
            <div className="flex items-center justify-center flex-wrap gap-4">
                {
                    galleryImages.map(image => <img key={image.id} className="w-40 md:w-52 rounded-md hover:scale-105 hover:-translate-y-2 transition-all object-cover aspect-square" src={image.imageUrl} alt="img" />
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;