
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        </div>
      </main>
      <Footer />
    </div>
  );
}
