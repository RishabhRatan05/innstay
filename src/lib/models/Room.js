import mongoose from "mongoose";


const RoomSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    imageUrl:{
        type:String
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    wifi:{
        type:Boolean,
        default:false
    },
    shower:{
        type:Boolean,
        default:false
    }
})

const Room = mongoose.models.Room mongoose.model('Room',RoomSchema)

export default Room