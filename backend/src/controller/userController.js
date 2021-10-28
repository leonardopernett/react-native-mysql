
import { connection } from '../database'
import redis from 'redis'
import {promisify} from 'util'

/* const client = redis.createClient()

const redis_get = promisify(client.get).bind(client)
const redis_set = promisify(client.set).bind(client)

 */
export const getTasks = async (req,res)=>{
  try {
      const db = await connection()
      const [ tasks ] = await db.query('SELECT * FROM tasks')
      res.status(200).json({ data:tasks }) 

  } catch (error) {
      res.status(401).json(error)
  }
}

export const getOneTasks = async(req,res)=>{
  try {
 
      const { id } = req.params 
      const db = await connection()
      const [ [ task ] ] = await db.query('SELECT * FROM tasks WHERE id=?', [id] )
      res.status(200).json(task)
  } catch (error) {
      res.status(401).json(error)
  }
}

export const getCountTasks = (req,res)=>{
  res.json('tasks')
}

export const createTasks = async (req,res)=>{
  try {
    const { title, description } = req.body
    const db = await connection()
    await db.query('INSERT INTO tasks (title, description) VALUES (?,?)',[ title,description ])
  
    res.json({message:'task created'})
  } catch (error) {
      res.status(401).json(error)
  }
}

export const deleteTasks = async (req,res)=>{
   try {
      const db = await connection()
      const { id } = req.params
      await db.query('DELETE FROM tasks  WHERE id=?',[ id ])
    
      res.json({message:'task deleted'})
   } catch (error) {
      res.status(401).json(error)
   }
}

export const editTasks = async (req,res) => {
    try {
        const db = await connection()
        const { id } = req.params
        const { title, description } = req.body
        await db.query('UPDATE tasks SET title=?, description=?  WHERE id=?',[title, description, id ])
       
        res.json({message:'task update'})
    } catch (error) {
       res.status(401).json(error)
    }
 
} 