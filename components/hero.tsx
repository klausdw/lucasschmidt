import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover animate-brightness-sharp-fade"
      >
        <source src="/assets/landing.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
      <div className="absolute inset-0 bg-black/10 animate-brightness-sharp-fade" />
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="text-center text-white py-36">
          <h2 className="text-6xl md:text-7xl font-bold animate-fade-in-up fancy-stroke font-[family-name:var(--font-name-sans)]">
            Lucas Ian Schmidt
          </h2>
          <p className="text-xl md:text-2xl mb-4 animate-slide-in-left golf-stroke">
            German U18: Ranklist: #27
          </p>
          <Link
            className="bg-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-md animate-bounce-in"
            href="#about"
          >
            zu mir
          </Link>
        </div>
      </div>
    </section>
  );
}
