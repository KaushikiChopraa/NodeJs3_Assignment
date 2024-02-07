import express from 'express';
import {add, getById, update, updateOne, deletes} from "../controller/employee.js"

export const router = express.Router();


// router to add a user
router.post("/employees", add )

// router to get a user
router.get("/employees/:id",getById)


//router to update user's fields
router.patch("/employees/:id", updateOne)

//router to update user's all fields
router.put("/employees/:id", update)



//router to delete a user
router.delete("/employees/:id", deletes)
