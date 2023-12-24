import React from "react";
import { galleryImages } from "../data.js";

const Gallery = () => {
    return (
        <div id="gallery" className="py-10 px-5 md:px-20 text-teal-900">
            <h1 className="text-3xl text-center font-bold uppercase pb-5">Gallery</h1>
            <div className="flex items-center justify-center flex-wrap gap-4">
                {
                    galleryImages.map(image => <img key={image.id} className="w-40 md:w-52 shadow-sm rounded-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500  object-cover aspect-square" src={image.imageUrl} alt="img" />
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;