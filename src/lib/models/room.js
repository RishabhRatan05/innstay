import mongoose from "mongoose";


const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  url: {
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  food: {
    type: Boolean,
    default: false,
  },
  wifi: {
    type: Boolean,
    default: false,
  },
  shower: {
    type: Boolean,
    default: false,
  },
  price:{
    type:Number,
    required:true
  }
},{timestamps:true})

const Room = mongoose.models.Room || mongoose.model('Room',RoomSchema)

export default Room