'use client';

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: true, // TODO: Set to false because marks are not preserved when attrs are kept
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: true, // TODO: Set to false because marks are not preserved when attrs are kept
    },
    
  }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
];
