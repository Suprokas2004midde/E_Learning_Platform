import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, PlusCircle, Video, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function Sidebar() {
  const { logout } = useAuth();

  const navItems = [
    { label: "Dashboard", to: "/", icon: LayoutDashboard },
    { label: "My Courses", to: "/courses", icon: BookOpen },
    { label: "New Course", to: "/courses/create", icon: PlusCircle },
    { label: "Video Uploads", to: "/upload", icon: Video },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col justify-between p-5">
      <div>
        <div className="flex items-center gap-3 px-3 py-2 mb-8">
          <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
            E
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-tight">EduPortal</h1>
            <p className="text-xs text-slate-500 font-medium">Instructor & Admin</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-100 space-y-1">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
