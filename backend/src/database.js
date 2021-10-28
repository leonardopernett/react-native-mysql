import { createPool } from 'mysql2/promise'
import { config } from './config'

export const connection = () => {
    const pool = createPool(config)
    console.log('db is connected')
    return pool
}