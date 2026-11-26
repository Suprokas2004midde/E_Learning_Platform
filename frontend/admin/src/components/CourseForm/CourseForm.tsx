import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DollarSign, BookOpen, Layers, Image as ImageIcon } from "lucide-react";

const CourseFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Please select or enter a category"),
  price: z.number().min(0, "Price cannot be negative"),
  thumbnailUrl: z.string().url("Valid thumbnail URL is required").optional().or(z.literal("")),
});

export type CourseFormData = z.infer<typeof CourseFormSchema>;

interface CourseFormProps {
  initialData?: Partial<CourseFormData>;
  onSubmit: (data: CourseFormData) => Promise<void> | void;
  isLoading?: boolean;
}

export function CourseForm({ initialData, onSubmit, isLoading = false }: CourseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: zodResolver(CourseFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      category: initialData?.category || "Development",
      price: initialData?.price || 0,
      thumbnailUrl: initialData?.thumbnailUrl || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
          Course Title
        </label>
        <div className="relative">
          <BookOpen size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            {...register("title")}
            placeholder="e.g. Master Full Stack MERN Development"
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
          />
        </div>
        {errors.title && <p className="text-xs text-red-500 mt-1.5">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={4}
          placeholder="Detailed overview of what students will learn in this course..."
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
        />
        {errors.description && <p className="text-xs text-red-500 mt-1.5">{errors.description.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Category
          </label>
          <div className="relative">
            <Layers size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              {...register("category")}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            >
              <option value="Development">Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Database">Database & Cloud</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Business">Business & Marketing</option>
            </select>
          </div>
          {errors.category && <p className="text-xs text-red-500 mt-1.5">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Price (₹ INR)
          </label>
          <div className="relative">
            <DollarSign size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              step="1"
              {...register("price", { valueAsNumber: true })}
              placeholder="0 for Free"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            />
          </div>
          {errors.price && <p className="text-xs text-red-500 mt-1.5">{errors.price.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
          Thumbnail URL (Optional)
        </label>
        <div className="relative">
          <ImageIcon size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            {...register("thumbnailUrl")}
            placeholder="https://images.unsplash.com/..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
          />
        </div>
        {errors.thumbnailUrl && <p className="text-xs text-red-500 mt-1.5">{errors.thumbnailUrl.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors shadow-sm disabled:opacity-50"
      >
        {isLoading ? "Saving Course..." : "Save & Continue to Lessons"}
      </button>
    </form>
  );
}
