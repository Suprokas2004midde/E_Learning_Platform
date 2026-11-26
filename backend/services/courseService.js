import {
  createCourseRepository,
  findCourseByIdRepository,
  updateCourseRepository,
} from "../repository/courseRepository.js";

export const createCourseService = async (title, description, price, category, instructorId) => {
  const courseData = { title, description, price, category, instructorId };
  const response = await createCourseRepository(courseData);
  return response;
};

export const getCourseByIdService = async (id) => {
  const course = await findCourseByIdRepository(id);
  return course;
};

export const updateCourseService = async (id, updateData) => {
  const response = await updateCourseRepository(id, updateData);
  return response;
};
