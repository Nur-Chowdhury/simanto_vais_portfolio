"use client";

import Editor from "@/components/TextEditor/Editor";
import axios from "axios";
import React, { useState } from "react";

export default function CreateBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});

  const handleSubmit = async () => {
    // await axios.post("/api/blog", { title, content });
    console.log({ title, content });
    alert("Blog saved!");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full py-4">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold uppercase">Create Blog</h1>
        </div>
        <div className="my-12 flex flex-col w-full justify-center items-center">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor content={content} editable={true}
            onDataChange={(content) => {
              setContent(content);
            }}
          />
          <button onClick={handleSubmit}>Save Blog</button>
        </div>
      </div>
    </section>
  );
}
