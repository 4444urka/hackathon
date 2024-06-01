import React from 'react';
import Markdown  from 'marked-react';

interface MarkdownRendererProps {
  markdown: string | Promise<string>;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  // Если markdown является Promise, отображаем загрузку или индикатор
  if (markdown instanceof Promise) {
    return <div>Загрузка...</div>;
  }

  // Используем компонент Markdown для отображения Markdown
  return <Markdown>{markdown}</Markdown>;
};

export default MarkdownRenderer;