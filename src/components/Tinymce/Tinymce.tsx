// import { Editor } from "@tinymce/tinymce-react";
// import { useEffect, useRef } from "react";

// interface Props {
//   disabled?: boolean;
// }

// export const Tinymce: React.FC<Props> = ({ disabled = false }) => {
//   const editorRef = useRef<any>(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current.mode.set(disabled ? "readonly" : "design"); // Cập nhật chế độ chỉnh sửa
//     }
//   }, [disabled]);

//   return (
//     <Editor
//       apiKey="dufyukkbyh9ohhkwfc7prhpijco47bic0wdlemphv866mh8u"
//       onInit={(_evt, editor) => {
//         editorRef.current = editor; // Gán editor instance vào ref
//         editor.mode.set(disabled ? "readonly" : "design");
//       }}
//       initialValue="<p>This is the initial content of the editor.</p>"
//       disabled={disabled}
//       init={{
//         disabled:disabled,
//         statusbar: false,
//         branding: false,
//         resize: false,
//         height: 500,
//         menubar: disabled ? false : "file edit view insert format tools table",
//         toolbar: disabled
//           ? false
//           : "undo redo | blocks | " +
//             "bold italic forecolor | alignleft aligncenter " +
//             "alignright alignjustify | bullist numlist outdent indent | " +
//             "removeformat",
//         content_style:
//           "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//       }}
//     />
//   );
// };
const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';
// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/table';
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import dompurify from "dompurify";


interface Props {
  disabled?: boolean;
  onChange?: (value: string) => void;
  value?: string;
}

export const Tinymce: React.FC<Props> = ({ disabled = false, onChange, value = "" }) => {
  const editorRef = useRef<any>(null);
  if (disabled) {
    return (
      <div className="max-h-[500px] min-h-[100px]">
        <div
          className="border max-h-[500px] min-h-[100px]"
          dangerouslySetInnerHTML={{ __html: dompurify.sanitize(value) }}
        ></div>
      </div>
    );
  } else {
    return (
      <Editor
        apiKey={apiKey}
        onInit={(_, editor) => (editorRef.current = editor)}
        value={value}
        onEditorChange={(val) => onChange?.(dompurify.sanitize(val))}
        init={{
          promotion:false,
          statusbar: false,
          branding: false,
          resize: false,
          height: 500,
        menubar: disabled ? false : "file edit view insert format tools table",
        toolbar: disabled
          ? false
          : "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    );
  }
};
