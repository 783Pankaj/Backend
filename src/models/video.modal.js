import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        discription: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        views: {
            type: String,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Video = mongoose.model("Video", videoSchema)