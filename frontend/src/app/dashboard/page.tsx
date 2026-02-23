import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-obsidian">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-imperial-gold tracking-widest">
                            TRUNG TÂM CHỈ HUY 🏯
                        </h1>
                        <p className="text-ancient-ash italic mt-2">
                            "Nơi hội tụ các hào kiệt Kim Lan, bàn định đại sự."
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Quick Stats Card */}
                        <div className="card-wuxia">
                            <h3 className="text-imperial-gold font-bold mb-4 flex items-center gap-2">
                                <span>⚔️</span> Sự kiện sắp tới
                            </h3>
                            <div className="space-y-4">
                                <div className="border-b border-imperial-gold/10 pb-2">
                                    <p className="text-silver-mist font-medium">Vũ Dương Thành (P1)</p>
                                    <p className="text-xs text-ancient-ash">Hôm nay - 20:00 PM</p>
                                </div>
                                <button className="text-sm text-blood-jade hover:underline">
                                    Xem chi tiết →
                                </button>
                            </div>
                        </div>

                        {/* Notification Card */}
                        <div className="card-wuxia">
                            <h3 className="text-imperial-gold font-bold mb-4 flex items-center gap-2">
                                <span>🏮</span> Thông báo môn phái
                            </h3>
                            <p className="text-sm text-silver-mist/80 mb-4 text-center">
                                Chưa có mật thư mới.
                            </p>
                        </div>

                        {/* Member Participation Card */}
                        <div className="card-wuxia">
                            <h3 className="text-imperial-gold font-bold mb-4 flex items-center gap-2">
                                <span>📜</span> Trạng thái tu luyện
                            </h3>
                            <div className="flex flex-col items-center justify-center p-4">
                                <div className="text-4xl mb-2">☯️</div>
                                <p className="text-sm text-ancient-ash">Đang thụ thẩm...</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
