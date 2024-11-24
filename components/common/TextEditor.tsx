"use client";

import { cn } from "@/lib/utils";
import {
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  Redo2Icon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { useState, useRef } from "react";

const formatCommand = [
  {
    command: "bold",
    icon: <BoldIcon />,
  },
  {
    command: "underline",
    icon: <UnderlineIcon />,
  },
  {
    command: "italic",
    icon: <ItalicIcon />,
  },
  {
    command: "justifyLeft",
    icon: <AlignLeftIcon />,
  },
  {
    command: "justifyRight",
    icon: <AlignRightIcon />,
  },
  {
    command: "undo",
    icon: <Undo2Icon />,
  },
  {
    command: "redo",
    icon: <Redo2Icon />,
  },
];

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [htmlContent, setHtmlContent] = useState("");

  const handleInput = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      setHtmlContent(content);
    }
  };

  const formatText = (commandId: string) => {
    document.execCommand(commandId, false, "");
  };

  return (
    <div className="space-y-6">
      <div className="border border-border">
        <div className="flex bg-muted/50 border-b border-border text-muted-foreground overflow-x-auto">
          {formatCommand.map((item) => (
            <button
              key={item.command}
              onClick={() => formatText(item.command)}
              className={cn(
                "shrink-0 flex items-center justify-center p-4 [&_svg]:size-5 border-e border-border/50",
                "hover:bg-secondary hover:text-white"
              )}
              name={item.command}
              title={item.command}
              aria-label={item.command}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className="p-4 w-full min-h-[200px] focus:outline-none"
        ></div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      ></div>
    </div>
  );
};

export default TextEditor;
