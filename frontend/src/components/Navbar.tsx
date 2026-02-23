export default function Navbar() {
    return (
        <header className="h-16 border-b border-imperial-gold/20 bg-obsidian/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <span className="text-imperial-gold text-sm tracking-tighter uppercase font-bold">
                    Kim Lan Quản Sự ✦ v1.0
                </span>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-medium text-silver-mist">Khách Nhân</p>
                        <p className="text-xs text-ancient-ash">Đang thụ thẩm...</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-imperial-gold/50 bg-imperial-deep overflow-hidden">
                        {/* Placeholder for Avatar */}
                        <div className="w-full h-full flex items-center justify-center text-imperial-gold">
                            ☯️
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
