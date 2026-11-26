import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseForm, CourseFormData } from "@/components/CourseForm/CourseForm";
import { VideoUploader } from "@/components/VideoUploader/VideoUploader";
import { courseService } from "@/services/courseService";
import { Check } from "lucide-react";

export function CreateCourse() {
  const navigate = useNavigate();
  const [createdCourseId, setCreatedCourseId] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const handleCourseSubmit = async (data: CourseFormData) => {
    const course = await courseService.createCourse(data);
    setCreatedCourseId(course._id);
    setStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Create a New Course</h1>
        <p className="text-sm text-slate-500 mt-1">Step {step} of 2: {step === 1 ? "Course Details" : "Upload First Lesson Video"}</p>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
        <div className={`flex items-center gap-2 text-sm font-semibold ${step >= 1 ? "text-brand-600" : "text-slate-400"}`}>
          <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs">
            {step > 1 ? <Check size={14} /> : "1"}
          </div>
          <span>1. Basic Details</span>
        </div>

        <div className="w-12 h-0.5 bg-slate-200"></div>

        <div className={`flex items-center gap-2 text-sm font-semibold ${step >= 2 ? "text-brand-600" : "text-slate-400"}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-600"}`}>
            2
          </div>
          <span>2. Video & Media</span>
        </div>
      </div>

      {step === 1 && <CourseForm onSubmit={handleCourseSubmit} />}

      {step === 2 && (
        <div className="space-y-6">
          <VideoUploader
            onUploadSuccess={(url) => {
              console.log("Lesson video uploaded to:", url);
            }}
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={() => navigate("/courses")}
              className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
            >
              Finish & Go to Courses
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
