import { Bell, Search, UserCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search courses, lessons, analytics..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl relative transition-colors">
          <Bell size={20} />
          <span className="w-2 h-2 bg-brand-600 rounded-full absolute top-2 right-2"></span>
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <UserCircle size={36} className="text-slate-400" />
          <div>
            <div className="text-sm font-semibold text-slate-900 leading-tight">
              {user?.name || "Instructor"}
            </div>
            <div className="text-xs text-brand-600 font-medium">
              {user?.role || "INSTRUCTOR"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
