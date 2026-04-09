import React, { useEffect, useState } from 'react'

const images = [
    // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    // "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    // "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    {
        src:"/assets/f-img1.jpg"
    },
    {
        src:"/assets/f-img2.jpg"
    }
];
const FutureFarmingSlider = () => {
    const [current, setCurrent] = useState(0);
    
        const nextSlide = () => {
            setCurrent((prev) => (prev + 1) % images.length);
        };
    
        const prevSlide = () => {
            setCurrent((prev) => (prev - 1 + images.length) % images.length);
        };
    
        // Auto Slide
        useEffect(() => {
            const interval = setInterval(() => {
                nextSlide();
            }, 4000);
    
            return () => clearInterval(interval);
        }, []);
    return (
        <>
            <div className="max-w-[1440px] font-khand mx-auto pt-8 ">
                <div className="relative w-full h-[200px] md:h-[400px] lg:h-[600px] overflow-hidden ">

                    {/* Images */}
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={img.src}
                                alt="slider"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full"
                    >
                        ❮
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full"
                    >
                        ❯
                    </button>
                </div>
            </div>
        </>
    )
}

export default FutureFarmingSlider