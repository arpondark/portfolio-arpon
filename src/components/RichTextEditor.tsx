'use client'

import { useState, useRef } from 'react'
import { Bold, Italic, List, Link, Image, Code, Eye, EyeOff } from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  contentType: 'markdown' | 'plaintext'
}

export default function RichTextEditor({ value, onChange, contentType }: RichTextEditorProps) {
  const [showPreview, setShowPreview] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const newText = before + selectedText + after
    
    const newValue = value.substring(0, start) + newText + value.substring(end)
    onChange(newValue)
    
    // Set cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const insertMarkdown = (syntax: string) => {
    insertText(syntax, syntax)
  }

  const insertImage = async () => {
    const choice = confirm('Upload image from your device? (Cancel to enter URL instead)')
    
    if (choice) {
      // Create file input for upload
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.onchange = async (e) => {
        const target = e.target as HTMLInputElement
        const file = target.files?.[0]
        if (file) {
          try {
            const formData = new FormData()
            formData.append('file', file)

            const response = await fetch('/api/admin/upload', {
              method: 'POST',
              body: formData,
            })

            const data = await response.json()

            if (response.ok) {
              const altText = prompt('Enter alt text for the image:') || 'Image'
              insertText(`![${altText}](${data.url})`)
            } else {
              alert('Failed to upload image: ' + (data.error || 'Unknown error'))
            }
          } catch (error) {
            console.error('Upload error:', error)
            alert('Failed to upload image')
          }
        }
      }
      input.click()
    } else {
      // Original URL input method
      const url = prompt('Enter image URL:')
      if (url) {
        const altText = prompt('Enter alt text for the image:') || 'Image'
        insertText(`![${altText}](${url})`)
      }
    }
  }

  const insertLink = () => {
    const url = prompt('Enter URL:')
    const text = prompt('Enter link text:') || url
    if (url) {
      insertText(`[${text}](${url})`)
    }
  }

  const renderMarkdown = (text: string) => {
    // Simple markdown renderer
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-white mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-white mb-3">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-semibold text-white mb-4">$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>')
      .replace(/\*(.*)\*/gim, '<em class="text-gray-300">$1</em>')
      .replace(/`(.*)`/gim, '<code class="bg-gray-700 text-purple-400 px-2 py-1 rounded">$1</code>')
      .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-4" />')
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-purple-400 hover:text-purple-300">$1</a>')
      .replace(/^- (.*$)/gim, '<li class="text-gray-300 ml-4">$1</li>')
      .replace(/\n\n/gim, '</p><p class="text-gray-300 mb-4">')
      .replace(/\n/gim, '<br />')
      .replace(/^(.*)$/gim, '<p class="text-gray-300 mb-4">$1</p>')
  }

  const toolbarButtons = [
    {
      icon: Bold,
      label: 'Bold',
      action: () => insertMarkdown('**'),
      shortcut: 'Ctrl+B'
    },
    {
      icon: Italic,
      label: 'Italic',
      action: () => insertMarkdown('*'),
      shortcut: 'Ctrl+I'
    },
    {
      icon: Code,
      label: 'Code',
      action: () => insertMarkdown('`'),
      shortcut: 'Ctrl+`'
    },
    {
      icon: List,
      label: 'List',
      action: () => insertText('- '),
      shortcut: 'Ctrl+L'
    },
    {
      icon: Link,
      label: 'Link',
      action: insertLink,
      shortcut: 'Ctrl+K'
    },
    {
      icon: Image,
      label: 'Image',
      action: insertImage,
      shortcut: 'Ctrl+Shift+I'
    }
  ]

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2">
        <div className="flex items-center space-x-2">
          {contentType === 'markdown' && toolbarButtons.map((button, index) => (
            <button
              key={index}
              type="button"
              onClick={button.action}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors"
              title={`${button.label} (${button.shortcut})`}
            >
              <button.icon className="w-4 h-4" />
            </button>
          ))}
        </div>
        
        {contentType === 'markdown' && (
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showPreview ? 'Edit' : 'Preview'}</span>
          </button>
        )}
      </div>

      {/* Editor/Preview */}
      <div className="relative">
        {showPreview && contentType === 'markdown' ? (
          <div className="min-h-[400px] p-4 bg-gray-700 rounded-lg border border-gray-600">
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
            />
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full min-h-[400px] p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical"
            placeholder={
              contentType === 'markdown' 
                ? 'Write your markdown content here...\n\n# Heading\n**Bold text**\n*Italic text*\n- List item\n[Link](url)\n![Image](url)'
                : 'Write your content here...'
            }
          />
        )}
      </div>

      {/* Character Count */}
      <div className="text-right text-sm text-gray-400">
        {value.length} characters
      </div>
    </div>
  )
}
