import mongoose from 'mongoose'

let connected = false 

const connectDB = async () => {
  mongoose.set('strictQuery', true)

  if (connected) {
    console.log('MongoDB is connected!')
    return
  }  
}
