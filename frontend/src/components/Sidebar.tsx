"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Trung Tâm Chỉ Huy", path: "/dashboard", icon: "🏯" },
        { name: "Kim Lan", path: "/guilds", icon: "🎋" },
        { name: "Sự Kiện", path: "/events", icon: "⚔️" },
        { name: "Môn Đệ", path: "/members", icon: "🌸" },
        { name: "Hồ Sơ", path: "/profile", icon: "☯️" },
    ];

    return (
        <aside className="w-64 bg-obsidian border-r border-imperial-gold/20 flex flex-col">
            <div className="p-6 border-b border-imperial-gold/20">
                <h2 className="text-xl font-bold text-imperial-gold tracking-widest text-center">
                    KIM LAN
                </h2>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded transition-all ${pathname === item.path
                                ? "bg-imperial-gold/10 text-imperial-gold border-l-2 border-imperial-gold"
                                : "text-silver-mist/70 hover:bg-imperial-gold/5 hover:text-silver-mist"
                            }`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-imperial-gold/10">
                <button className="w-full text-left px-4 py-2 text-ancient-ash hover:text-blood-jade transition-colors">
                    Quy Ẩn 🌿
                </button>
            </div>
        </aside>
    );
}
