import app from '../server/server.js'
import connectDB from '../server/config/mongodb.js'

export default async function handler(req, res) {
  await connectDB()
  return app(req, res)
}