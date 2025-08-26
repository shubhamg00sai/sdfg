import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const items = [
  { title: "Machine Learning — SoloLearn", link: "https://www.sololearn.com/certificates/CT-N1AN1HMU" },
  { title: "Python Core — SoloLearn", link: "https://www.sololearn.com/certificates/CT-Y3J2ZVWU" },
  { title: "C Language — SoloLearn", link: "https://www.sololearn.com/certificates/CT-VR8GUYW5" },
  { title: "Go Language — SoloLearn", link: "https://www.sololearn.com/certificates/CT-NMI6IJZH" },
  { title: "HTML — SoloLearn", link: "https://www.sololearn.com/certificates/CT-AZDWKF0B" },
  { title: "Swift4 — SoloLearn", link: "https://www.sololearn.com/certificates/CT-AWUSL0GC" }
];

export default function Certificates() {
  return (
    <section id="certificates" className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Certificates</h2>
      <Swiper spaceBetween={20} slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {items.map((it) => (
          <SwiperSlide key={it.link}>
            <div className="p-6 rounded-2xl shadow w-full bg-white">
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <a href={it.link} target="_blank" className="underline">View Certificate</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}