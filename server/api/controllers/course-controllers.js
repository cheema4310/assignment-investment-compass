const Course = require('../models/course-model');

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Course By ID
const getCourseById = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Course.find({ _id: courseId });

    // Course.find method send back an Array
    // to send back Object instead of Array --course[0]
    res.json(course[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a Course
const createCourse = async (req, res) => {
  const { title, desc, detailDesc, overview, modules, imageUrl } = req.body;
  const newCourse = new Course({
    title,
    desc,
    detailDesc,
    overview,
    modules,
    imageUrl,
  });

  try {
    await newCourse.save();
    res.status(201).json({ message: 'Successfully Upload to Database' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourseById = async (req, res) => {
  const courseId = req.params.id;

  try {
    const response = await Course.deleteOne({ _id: courseId });
    if (response.ok) {
      res.status(201).json({ message: 'Course deleted successfully' });
    }
    res.status(401).json({ message: 'Course Not Found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCourses, getCourseById, createCourse, deleteCourseById };
