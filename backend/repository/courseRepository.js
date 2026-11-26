import courseModel from "../schema/courseModel.js";

export const findCourseByIdRepository = async (id) => {
  const course = await courseModel.findById(id);
  return course;
};

export const createCourseRepository = async (courseData) => {
  const newCourse = await courseModel.create(courseData);
  return newCourse;
};

export const updateCourseRepository = async (id, updateData) => {
  const updatedCourse = await courseModel.findByIdAndUpdate(id, updateData, { new: true });
  return updatedCourse;
};
