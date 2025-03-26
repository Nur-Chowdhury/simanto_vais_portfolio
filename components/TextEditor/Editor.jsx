'use client';

import { EditorContent, useEditor } from "@tiptap/react";
import { extensions } from "./tiptapExtensions";
import Menubar from "./Menubar";

const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: extensions,
    editorProps: {
      attributes: {
        class:
          "mt-7 border border-slate-300 rounded-xl p-5 bg-white text-black",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onDataChange(json);
    },
    content: content,
  })

  return (
    <div className="w-full relative">
      {editable && <Menubar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
