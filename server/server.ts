
import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseById} from "./get-courses.route";
import {searchLessons} from "./search-lessons.route";
import {addCourse, updateCourse, deleteCourse} from './save-course.route';
import {loginUser} from './login.route';

const bodyParser = require('body-parser');
// @ts-ignore
const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({origin: true}));

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/courses').post(addCourse);

app.route('/api/courses/:id').delete(deleteCourse);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(updateCourse);

app.route('/api/login').post(loginUser);


const httpServer = app.listen(9000, () => {
    // @ts-ignore
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



