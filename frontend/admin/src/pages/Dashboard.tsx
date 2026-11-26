import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, DollarSign, TrendingUp, PlusCircle, ArrowUpRight } from "lucide-react";
import { courseService, Course } from "@/services/courseService";

export function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [analytics, setAnalytics] = useState({ totalCourses: 0, totalStudents: 0, totalEarnings: 0 });

  useEffect(() => {
    courseService.getMyCourses().then(setCourses);
    courseService.getAnalytics().then(setAnalytics);
  }, []);

  const stats = [
    { label: "Total Courses", value: analytics.totalCourses, icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Enrolled Students", value: analytics.totalStudents, icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Total Revenue", value: `₹${analytics.totalEarnings.toLocaleString()}`, icon: DollarSign, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Completion Rate", value: "78%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Instructor Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">
            Welcome back! Here is an overview of your course sales and student progress.
          </p>
        </div>
        <Link
          to="/courses/create"
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
        >
          <PlusCircle size={18} />
          <span>Create New Course</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <Icon size={18} />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-slate-900">Your Published Courses</h2>
          <Link to="/courses" className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1">
            View All <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {courses.map((course) => (
            <div key={course._id} className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {course.thumbnailUrl ? (
                  <img src={course.thumbnailUrl} alt="" className="w-14 h-14 rounded-xl object-cover" />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                    <BookOpen size={20} />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{course.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-medium">{course.category}</span>
                    <span>{course.enrollmentsCount || 0} students enrolled</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-bold text-slate-900">
                  {course.price === 0 ? "Free" : `₹${course.price}`}
                </div>
                <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Published
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
