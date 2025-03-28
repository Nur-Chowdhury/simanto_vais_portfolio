'use client';

import {
  AiOutlineBold,
  AiOutlineClose,
  AiOutlineEnter,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineRedo,
  AiOutlineStrikethrough,
  AiOutlineUndo,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiParagraph } from "react-icons/bi";
import { FiCode } from "react-icons/fi";
import { MdOutlineLayersClear } from "react-icons/md";
import { PiCodeBlock, PiQuotes } from "react-icons/pi";
import { TbSpacingVertical } from "react-icons/tb";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border border-slate-300 rounded-xl px-5 py-2 sticky top-3 left-0 right-0 bg-white z-10 flex gap-2 flex-wrap">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={` font-extrabold px-1 text-slate-900 ${
          editor.isActive("heading", { level: 1 }) && "bg-slate-400 rounded"
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`editor-btn font-bold px-1 text-slate-900 ${
          editor.isActive("heading", { level: 2 }) && "bg-slate-400 rounded"
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`editor-btn font-semibold px-1 text-slate-900 ${
          editor.isActive("heading", { level: 3 }) && "bg-slate-400 rounded"
        }`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`editor-btn font-medium px-1 text-slate-900 ${
          editor.isActive("heading", { level: 4 }) && "bg-slate-400 rounded"
        }`}
      >
        H4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("bold") && "bg-slate-400 rounded"
        }`}
      >
        <AiOutlineBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("italic") && "bg-slate-400 rounded"
        }`}
      >
        <AiOutlineItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("strike") && "bg-slate-400 rounded"
        }`}
      >
        <AiOutlineStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("code") && "bg-slate-400 rounded"
        }`}
      >
        <FiCode />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={`editor-btn px-1 text-slate-900`}
      >
        <MdOutlineLayersClear />
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={`editor-btn px-1 text-slate-900`}
      >
        <AiOutlineClose />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("paragraph") && "bg-slate-400 rounded"
        }`}
      >
        <BiParagraph />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("bulletList") && "bg-slate-400 rounded"
        }`}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("orderedList") && "bg-slate-400 rounded"
        }`}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("codeBlock") && "bg-slate-400 rounded"
        }`}
      >
        <PiCodeBlock />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`editor-btn px-1 text-slate-900 ${
          editor.isActive("blockquote") && "bg-slate-400 rounded"
        }`}
      >
        <PiQuotes />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={`editor-btn px-1 text-slate-900`}
      >
        <TbSpacingVertical />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`editor-btn px-1 text-slate-900`}
      >
        <AiOutlineEnter />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`editor-btn px-1 text-slate-900`}
      >
        <AiOutlineUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`editor-btn px-1 text-slate-900`}
      >
        <AiOutlineRedo />
      </button>
    </div>
  );
};

export default MenuBar;