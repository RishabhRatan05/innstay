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
    images:[{
        type:String
    }],
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    facilities:{
        wifi:{
            type:Boolean,
            default:false
        },
        shower:{
            type:Boolean,
            default:false
        },
        furnished:{
            type:Boolean,
            default:false
        }
    }
})

export default Room = mongoose.model('room',RoomSchema)