
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  { src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86", alt: "Campus trees and greenery" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b", alt: "Green campus mountains" },
  { src: "https://images.unsplash.com/photo-1551038247-3d9af20df552", alt: "Campus building under blue sky" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            ISRA Vatanappally is committed to integrating Islamic wisdom with modern science and technology, fostering an environment where spiritual growth goes hand in hand with academic and scientific achievement. We empower students and scholars to innovate, research, and serve humanity with excellence and integrity.
          </p>
          <section aria-label="Campus Life Carousel" className="mt-10 mb-8">
            <Carousel>
              <CarouselContent>
                {images.map((img, idx) => (
                  <CarouselItem key={idx} className="flex justify-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg object-cover w-full h-64 max-w-2xl shadow-md"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious aria-label="Previous Slide" />
              <CarouselNext aria-label="Next Slide" />
            </Carousel>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
