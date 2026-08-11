// import dns from 'dns'
// dns.setServers(['8.8.8.8', '8.8.4.4'])

// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'

// import connectDB from './config/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'

// const PORT = process.env.PORT || 4000
// const app = express()

// app.use(express.json())
// app.use(cors())
// await connectDB()
// app.use('/api/user' , userRouter)
// app.use('/api/image' , imageRouter)

// app.get('/' , (req , res)=> res.send("API Working"))

// app.listen(PORT, ()=> console.log('Server running on port '+ PORT));


import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])

import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => res.send("API Working"))

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000
  connectDB().then(() => {
    app.listen(PORT, () => console.log('Server running on port ' + PORT))
  })
}

export default app



