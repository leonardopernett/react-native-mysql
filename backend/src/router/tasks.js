import { Router } from 'express'
import { 
  createTasks, 
  deleteTasks, 
  editTasks, 
  getCountTasks, 
  getOneTasks, 
  getTasks } from '../controller/userController'

const router = Router()



/**
 * @swagger
 *  tags:
 *    name:Tasks
 *    description:edpoint tasks
 */

/**
 * @swagger
 * /api/tasks:
 *  get:
 *    summary: Get All Tasks
 *    
 */
router.get('/tasks',getTasks)


/**
 * @swagger
 * /api/tasks:
 *  get:
 *    summary: Get one Tasks
 *   
 */

router.get('/tasks/:id',getOneTasks)

/**
 * @swagger
 * /api/tasks:
 *  get:
 *    summary: Get total Tasks
 * 
 */


router.get('/tasks/count',getCountTasks)

/**
 * @swagger
 * /api/tasks:
 *  post:
 *    summary: Create tasks
 *    
 */


router.post('/tasks',createTasks)

/**
 * @swagger
 * /api/tasks:
 *  delete:
 *    summary: Delete task
 *   
*/

router.delete('/tasks/:id',deleteTasks)

/**
 * @swagger
 * /api/tasks:
 *  put:
 *    summary: Update tasks
 *    
 */


router.put('/tasks/:id', editTasks)

export default router


