import Post from "./Post.js";

class PostController {
    async getAll(req, res) {
        try {
            const post = await Post.find()
            res.json(post)
        }
        catch (err) {
            console.log(err)
        }
    }
    async create(req, res) {
        try {
            const post = await Post.create(req.body)
            res.json(post)
        }
        catch (err) {
            console.log(err)
        }
    }
    async put(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(req.body._id, req.body, {new: true})
            res.json(post)
        }
        catch (err) {
            console.log(err)
        }
    }
    async delete(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params.id)
            res.json(post)
        }
        catch (err) {
            console.log(err)
        }
    }
}

export default new PostController();