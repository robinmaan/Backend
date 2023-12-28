import mongoose , {Schema} from "mongoose";
import mongooseAggrefatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile:{
            required:true,
            type:'string'
        },
        thimbNail:{
            type:'string',
            required:true
        },
        title:{
            type:'string',
            required:true
        },
        description:{
            type:'string',
            required:true
        },
        duration:{
            type:'Number',
            required:true
        },
        views:{
            type:'Number',
            default: true,
        },
        isPublished:{
            type:'boolean',
            default:true,
        },
        user:{
            type: Schema.Types.ObjectID,
            ref: 'User',
        }
    



    },
    {
        timeseries:true,
    }
    )

videoSchema.plugin(mongooseAggrefatePaginate)
export const Video = mongoose.model("Video", videoSchema)