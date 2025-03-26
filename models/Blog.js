import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  content: Object, // Storing Tiptap JSON content
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
