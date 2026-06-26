import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Tentang Kami | Crustyverr" }];
};

const BRAND_IMAGE =
  "http://localhost:3001/uploads/d3khyrr6/4599/assets/85077933-b552-41df-879d-4fe966feca0b_1781492752293_xxp05k.png";

const values = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Kualitas Tanpa Kompromi",
    text: "Setiap biji kopi dipilih dengan cermat dari petani lokal terbaik. Kami tidak pernah menurunkan standar demi biaya yang lebih murah.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Lokal & Berkelas",
    text: "Kami bangga mengangkat cita rasa Nusantara ke panggung yang lebih luas — premium bukan berarti harus impor.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Dibuat dengan Cinta",
    text: "Dari proses roasting hingga penyajian, setiap langkah dijalani dengan penuh perhatian dan rasa cinta terhadap kopi yang sesungguhnya.",
  },
];

const team = [
  {
    name: "Arjuna Pratama",
    role: "Founder & Head Roaster",
    bio: "Jatuh cinta pada kopi sejak pertama mencicipi single origin Gayo di usia 19 tahun.",
  },
  {
    name: "Sari Dewi",
    role: "Coffee Sourcing & Quality",
    bio: "Keliling pulau-pulau Indonesia untuk menemukan biji kopi dengan cerita paling autentik.",
  },
  {
    name: "Bagas Nugroho",
    role: "Barista & Brand Creative",
    bio: "Percaya bahwa secangkir kopi yang baik bisa mengubah suasana hati seseorang.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#FDF6E3", color: "#2C1A0E" }}>
      {/* ── 1. HERO BANNER ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#2C1A0E" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-0">
          {/* Text side */}
          <div className="flex-1 flex flex-col justify-center px-8 py-16 md:py-24 text-center md:text-left">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C47E1A" }}
            >
              Tentang Crustyverr
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#FDF6E3" }}
            >
              Cerita di Balik Secangkir Crustyverr
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: "#C47E1A" }}>
              Lahir dari kecintaan mendalam terhadap kopi Nusantara — setiap tegukan membawa kehangatan, kebanggaan, dan cerita.
            </p>
          </div>

          {/* Image side */}
          <div className="flex-1 w-full md:h-[520px] relative overflow-hidden">
            <img
              src={BRAND_IMAGE}
              alt="Crustyverr Coffee Brand"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "280px" }}
            />
            {/* Gradient overlay blending into dark bg on desktop */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, #2C1A0E 0%, transparent 40%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. OUR STORY ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: "#C47E1A" }}
        >
          Kisah Kami
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: "#2C1A0E" }}
        >
          Dari Cinta, Lahirlah Crustyverr
        </h2>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-left md:text-center" style={{ color: "#2C1A0E" }}>
          <p>
            Crustyverr lahir dari sebuah meja kecil di sudut ruang tamu, tempat sang pendiri pertama kali memanggang biji kopi Gayo dengan wajan tua. Aroma yang mengepul itu bukan sekadar wangi — itu adalah panggilannya untuk membawa kopi terbaik Indonesia ke tangan lebih banyak orang.
          </p>
          <p>
            Kami percaya kopi bukan sekadar minuman. Ia adalah jembatan antara petani yang merawat kebun dengan tangan penuh kasih, dan kamu yang membutuhkan semangat di pagi hari. Itulah mengapa setiap proses — dari pemilihan biji hingga pengiriman — kami lakukan dengan standar tertinggi.
          </p>
          <p>
            Hari ini, Crustyverr hadir untuk membuktikan bahwa produk lokal bisa berdiri sejajar dengan brand internasional mana pun — dan bahkan lebih kaya ceritanya. Karena setiap cangkir kami adalah cangkir yang jujur, dari bumi Indonesia.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-6">
        <hr style={{ borderColor: "#C47E1A", opacity: 0.3 }} />
      </div>

      {/* ── 3. MISSION & VALUES ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#C47E1A" }}
          >
            Nilai Kami
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#2C1A0E" }}
          >
            Misi & Nilai yang Kami Pegang
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <Link
              key={v.title}
              to="/"
              className="group block rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: "#FDF6E3",
                borderColor: "#C47E1A",
                borderWidth: "1px",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-colors duration-300 group-hover:opacity-90"
                style={{ backgroundColor: "#2C1A0E", color: "#C47E1A" }}
              >
                {v.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#2C1A0E" }}
              >
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#2C1A0E", opacity: 0.75 }}>
                {v.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-6">
        <hr style={{ borderColor: "#C47E1A", opacity: 0.3 }} />
      </div>

      {/* ── 4. TEAM SPOTLIGHT ── */}
      <section
        className="relative w-full py-20 md:py-28 overflow-hidden"
      >
        {/* Subtle brand image background accent */}
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${BRAND_IMAGE})` }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#C47E1A" }}
            >
              Tim Kami
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#2C1A0E" }}
            >
              Orang-orang di Balik Setiap Cangkir
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-8 text-center border"
                style={{
                  backgroundColor: "#2C1A0E",
                  borderColor: "#C47E1A",
                  borderWidth: "1px",
                }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: "#C47E1A", color: "#2C1A0E" }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "#FDF6E3" }}>
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ color: "#C47E1A" }}
                >
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#FDF6E3", opacity: 0.75 }}>
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GET STARTED BANNER ── */}
      <section
        className="w-full py-20 md:py-28"
        style={{ backgroundColor: "#2C1A0E" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C47E1A", opacity: 0.8 }}
          >
            Mulai Sekarang
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: "#C47E1A" }}
          >
            Siap Merasakan Perbedaannya?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "#FDF6E3", opacity: 0.8 }}
          >
            Rasakan sendiri kopi Nusantara yang premium, jujur, dan penuh cerita. Satu tegukan sudah cukup untuk membuktikannya.
          </p>
          <Link
            to="/"
            className="inline-block px-10 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#C47E1A",
              color: "#2C1A0E",
            }}
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}
