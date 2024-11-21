import {Request, Response} from 'express';
import {COURSES} from "./db-data";
import {setTimeout} from 'timers';

export function updateCourse(req: Request, res: Response) {

  /*
    console.log("ERROR saving course!");
    res.sendStatus(500);
    return;
  */


  const id = req.params["id"],
    changes = req.body;

  console.log("Saving course changes", id, JSON.stringify(changes));

  const newCourse = {
    ...COURSES[id],
    ...changes
  };

  COURSES[id] = newCourse;

  console.log("new course version", newCourse);

  setTimeout(() => {

    res.status(200).json(COURSES[id]);

  }, 2000);


}

export function addCourse(req: Request, res: Response) {
  const changes = req.body;
  let newCourse;
  console.log("Course not existing, adding it\n")
  const maxId = Math.max(...Object.keys(COURSES).map(key => Number(key))); // Find the max existing ID
  console.log("All ids" + Object.keys(COURSES));
  console.log("Max id is " + maxId)
  const newId = maxId + 1; // Increment the ID
  newCourse = {id: newId, ...changes}; // Create the new course object

  COURSES[newId] = newCourse; // Add the new course to the COURSES object

  console.log("the new course is : " + JSON.stringify(COURSES[newId]));

  setTimeout(() => {

    res.status(200).json(COURSES[newId]);

  }, 2000);
}

export function deleteCourse(req: Request, res: Response) {
  const { id } = req.params; // Extract id from URL parameters
  const courseId = Number(id); // Convert the id to a number

  // Check if the course exists
  if (COURSES[courseId]) {
    delete COURSES[courseId]; // Delete the course
    return res.json({ message: `Course with id ${courseId} deleted successfully` });
  } else {
    return res.status(404).json({ message: `Course with id ${courseId} not found` });
  }
}
