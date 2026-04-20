'use client'

import { useState, useCallback, useEffect } from 'react'
import { Bold, Italic, List, ListOrdered, Link, Code, Quote, Heading, Eye, EyeOff, FileText, Hash } from 'lucide-react'

interface RichTextEditorProps {
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  contentType?: 'markdown' | 'plaintext'
  onContentTypeChange?: (type: 'markdown' | 'plaintext') => void
}

interface ToolbarButtonProps {
  icon: React.ComponentType<{ className?: string }>
  onClick: () => void
  active?: boolean
  title: string
  disabled?: boolean
}

function ToolbarButton({ icon: Icon, onClick, active = false, title, disabled = false }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={`p-2 rounded-md transition-colors ${disabled
          ? 'text-gray-600 cursor-not-allowed'
          : active
            ? 'bg-emerald-500 text-white'
            : 'text-gray-400 hover:text-white hover:bg-gray-700'
        }`}
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}

// Simple markdown to HTML converter for preview
function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold text-white mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold text-white mt-6 mb-3">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-white mt-8 mb-4">$1</h1>')
    // Bold and Italic
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-300">$1</em>')
    // Code
    .replace(/`(.*?)`/g, '<code class="bg-gray-800 text-emerald-300 px-1 rounded">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald-400 hover:text-emerald-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Lists
    .replace(/^\* (.*)$/gm, '<li class="text-gray-300 ml-4">• $1</li>')
    .replace(/^(\d+)\. (.*)$/gm, '<li class="text-gray-300 ml-4">$1. $2</li>')
    // Blockquotes
    .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-emerald-500 pl-4 italic text-gray-400">$1</blockquote>')
    // Line breaks
    .replace(/\n/g, '<br>')
}

export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Write your story...',
  contentType = 'plaintext',
  onContentTypeChange
}: RichTextEditorProps) {
  const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(null)
  const [previewMode, setPreviewMode] = useState(false)
  const [currentContentType, setCurrentContentType] = useState(contentType)

  // Ensure value is always a string
  const safeValue = value || ''

  useEffect(() => {
    setCurrentContentType(contentType)
  }, [contentType])

  const handleContentTypeChange = (type: 'markdown' | 'plaintext') => {
    setCurrentContentType(type)
    if (onContentTypeChange) {
      onContentTypeChange(type)
    }
  }

  const insertText = useCallback((before: string, after: string = '', placeholder: string = 'text') => {
    if (!textareaRef || currentContentType !== 'markdown') return

    const start = textareaRef.selectionStart
    const end = textareaRef.selectionEnd
    const selectedText = safeValue.substring(start, end)
    const textToInsert = selectedText || placeholder
    const newText = safeValue.substring(0, start) + before + textToInsert + after + safeValue.substring(end)

    onChange(newText)

    // Set cursor position after the inserted text
    setTimeout(() => {
      const newCursorPos = start + before.length + textToInsert.length + after.length
      textareaRef.setSelectionRange(newCursorPos, newCursorPos)
      textareaRef.focus()
    }, 0)
  }, [textareaRef, safeValue, onChange, currentContentType])

  return (
    <div className="w-full">
      {/* Content Type and Preview Toggle */}
      <div className="flex items-center justify-between mb-4 p-3 bg-gray-800 rounded-lg">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">Content Type:</span>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => handleContentTypeChange('plaintext')}
              className={`px-3 py-1 text-sm rounded-md transition-colors flex items-center space-x-1 ${currentContentType === 'plaintext'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
            >
              <FileText className="w-3 h-3" />
              <span>Plain Text</span>
            </button>
            <button
              type="button"
              onClick={() => handleContentTypeChange('markdown')}
              className={`px-3 py-1 text-sm rounded-md transition-colors flex items-center space-x-1 ${currentContentType === 'markdown'
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
            >
              <Hash className="w-3 h-3" />
              <span>Markdown</span>
            </button>
          </div>
        </div>

        {currentContentType === 'markdown' && (
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className={`px-3 py-1 text-sm rounded-md transition-colors flex items-center space-x-1 ${previewMode
                ? 'bg-green-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
          >
            {previewMode ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            <span>{previewMode ? 'Edit' : 'Preview'}</span>
          </button>
        )}
      </div>

      {/* Markdown Toolbar */}
      {currentContentType === 'markdown' && !previewMode && (
        <div className="flex flex-wrap gap-1 p-3 bg-gray-800 border-b border-gray-700 rounded-t-lg">
          <ToolbarButton
            icon={Heading}
            onClick={() => insertText('## ', '', 'Heading')}
            title="Heading"
          />
          <ToolbarButton
            icon={Bold}
            onClick={() => insertText('**', '**', 'bold text')}
            title="Bold"
          />
          <ToolbarButton
            icon={Italic}
            onClick={() => insertText('*', '*', 'italic text')}
            title="Italic"
          />
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <ToolbarButton
            icon={List}
            onClick={() => insertText('- ', '', 'list item')}
            title="Bullet List"
          />
          <ToolbarButton
            icon={ListOrdered}
            onClick={() => insertText('1. ', '', 'list item')}
            title="Numbered List"
          />
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <ToolbarButton
            icon={Link}
            onClick={() => insertText('[', '](url)', 'link text')}
            title="Link"
          />
          <ToolbarButton
            icon={Code}
            onClick={() => insertText('`', '`', 'code')}
            title="Inline Code"
          />
          <ToolbarButton
            icon={Quote}
            onClick={() => insertText('> ', '', 'quote')}
            title="Quote"
          />
        </div>
      )}

      {/* Editor/Preview Area */}
      <div className="relative">
        {previewMode && currentContentType === 'markdown' ? (
          <div
            className="min-h-[400px] p-4 bg-gray-900 rounded-b-lg border border-gray-700 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(safeValue) || '<p class="text-gray-500">Nothing to preview...</p>'
            }}
          />
        ) : (
          <textarea
            ref={setTextareaRef}
            value={safeValue}
            onChange={(e) => onChange(e.target.value)}
            placeholder={currentContentType === 'markdown' ? `${placeholder}\n\nMarkdown supported:\n# Heading\n**bold** *italic*\n- bullet points\n[link](url)\n\`code\`` : placeholder}
            className={`w-full min-h-[400px] p-4 bg-gray-900 text-white placeholder-gray-500 border border-gray-700 resize-none focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm leading-relaxed ${currentContentType === 'markdown' && !previewMode ? 'rounded-b-lg' : 'rounded-lg'
              }`}
            style={{
              lineHeight: '1.6'
            }}
          />
        )}
      </div>
    </div>
  )
}
