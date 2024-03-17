const express = require('express');
const {
  getCourses,
  getCourseById,
  deleteCourseById,
  createCourse,
} = require('../controllers/course-controllers');

const router = express.Router();

// // Getting all the courses
// router.get('/', getCourses);
// router.post('/', createCourse);

router.route('/').get(getCourses).post(createCourse);

router.get('/:id', getCourseById);
router.delete('/:id', deleteCourseById);

module.exports = router;
