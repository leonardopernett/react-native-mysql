
export const config = {
    database:process.env.DB || 'taskdb',
    user:process.env.USER  || 'root',
    password:process.env.PASSWORD  || '',
    host:process.env.HOST  || 'localhost',
  
}