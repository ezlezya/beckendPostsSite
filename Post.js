import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author: {type: String, require: true},
    title: {type: String, require: true},
    content: {type: String, require: true},
})

export default mongoose.model("Post", Post)