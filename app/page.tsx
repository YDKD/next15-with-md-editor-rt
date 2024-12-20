'use client';
import { MdPreview, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import { useState } from 'react';

export default function Home() {
  // will be error: ReferenceError: isSpace is not defined
  // const [text] = useState('1. 123');

  // Although the following code will be rendered as '1. 123', but the html code is not be `ol` tag
  const [text] = useState('1\\. 123');

  const [id] = useState('preview-only');

  return <MdPreview id={id} value={text} />;
}
