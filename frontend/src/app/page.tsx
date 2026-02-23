import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-24">
      <div className="card-wuxia max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-imperial-gold mb-4 tracking-widest">
          KIM LAN QUẢN SỰ
        </h1>
        <hr className="divider-wuxia" />
        <p className="text-lg mb-8 italic text-silver-mist/80">
          "Kiếm xuất giang hồ, tâm tại Kim Lan"
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard" className="btn-wuxia-primary">
            XUẤT QUÂN ⚔️
          </Link>
          <button className="border border-imperial-gold text-imperial-gold px-7 py-2.5 hover:bg-imperial-gold/10 transition-all">
            QUY ẨN 🌿
          </button>
        </div>
      </div>
    </main>
  );
}
