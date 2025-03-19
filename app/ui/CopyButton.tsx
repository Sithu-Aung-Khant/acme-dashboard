'use client';

import { ClipboardIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface CopyButtonProps {
  text: string;
  label: string;
  title: string;
  className?: string;
}

export function CopyButton({ text, label, title, className = '' }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div 
      className={`flex items-center justify-between bg-accent/10 p-3 rounded-md border cursor-pointer hover:bg-accent/20 ${className}`}
      onClick={handleCopy}
    >
      <span className="text-sm font-medium">{title}:</span>
      <div className="flex items-center gap-2">
        <span className="text-sm">{text}</span>
        <button 
          onClick={handleCopy}
          className="p-1 hover:bg-blue-500/10 rounded"
        >
          <ClipboardIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 