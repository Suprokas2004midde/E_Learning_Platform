import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, BookOpen, Trash2, Edit } from "lucide-react";
import { courseService, Course } from "@/services/courseService";

export function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    courseService.getMyCourses().then(setCourses);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Courses</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and edit your video courses and curriculum</p>
        </div>
        <Link
          to="/courses/create"
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
        >
          <PlusCircle size={18} />
          <span>New Course</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Enrolled</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {courses.map((course) => (
              <tr key={course._id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <div>{course.title}</div>
                    <div className="text-xs text-slate-400 font-normal truncate max-w-xs">{course.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{course.category}</td>
                <td className="px-6 py-4 font-bold text-slate-900">
                  {course.price === 0 ? "Free" : `₹${course.price}`}
                </td>
                <td className="px-6 py-4">{course.enrollmentsCount || 0}</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition-colors">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
