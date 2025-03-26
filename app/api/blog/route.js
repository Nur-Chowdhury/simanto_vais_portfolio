import { connectToDatabase } from "../../../lib/mongodb";
import Blog from "../../../models/Blog.js";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const { title, content } = req.body;
      const newBlog = new Blog({ title, content });
      await newBlog.save();
      return res.status(201).json({ message: "Blog saved", blog: newBlog });
    } catch (error) {
      return res.status(500).json({ message: "Error saving blog", error });
    }
  }

  if (req.method === "GET") {
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  }

  res.status(405).json({ message: "Method not allowed" });
}
