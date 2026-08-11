// import mongoose from "mongoose";

// const connectDB = async()=>{

//     mongoose.connection.on('connected', ()=>{
//         console.log("Database Connected")
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
// }

// export default connectDB;


import mongoose from "mongoose";

let cached = global.mongooseConn
if (!cached) cached = global.mongooseConn = { conn: null, promise: null }

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        mongoose.connection.on('connected', () => {
            console.log("Database Connected")
        })

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/imagify`).then((m) => m)
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB;