import {
  createCourseService,
  getCourseByIdService,
  updateCourseService,
} from "../services/courseService.js";

export const createCourse = async (req, res) => {
  try {
    const { title, description, price, category, instructorId } = req.body;
    const response = await createCourseService(title, description, price, category, instructorId);
    return res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getCourseByIdService(id);
    return res.status(200).json({
      success: true,
      message: "Course fetched successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
