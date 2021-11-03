import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

interface IRichText {
  onEditorChange: (a: string, editor: TinyMCEEditor) => void;
}

function RichText({onEditorChange}:IRichText) {
  const editorRef = useRef<any>(null);

  return (
    <Editor
      apiKey={process.env.REACT_APP_RICHTEXT_API_KEY}
      onInit={(evt, editor) => editorRef.current = editor}
      onEditorChange={onEditorChange}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor image',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | image',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  )
}

export default RichText
