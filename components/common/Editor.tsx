"use client";

import { forwardRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type Props = {
  className?: string;
};

const Editor = forwardRef(
  (
    props: Props,
    ref:
      | ((instance: ReactQuill | null) => void)
      | React.RefObject<ReactQuill>
      | null
  ) => {
    const { className } = props;

    return (
      <ReactQuill
        ref={ref}
        theme="snow"
        className={className}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ align: "center" }, { align: "right" }, { align: "justify" }],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link"],
            ["clean"],
          ],
        }}
      />
    );
  }
);

Editor.displayName = "Editor";

export default Editor;
