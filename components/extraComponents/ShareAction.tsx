'use client';

import { useState } from 'react';

interface ShareActionProps {
  title: string;
  text: string;
  path: string; // π.χ. /events/my-event
}

const ShareAction = ({ title, text, path }: ShareActionProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${path}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleShare();
      }}
      className="inline-flex items-center gap-2 rounded-full border border-[#B9007C]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B9007C] transition-all hover:bg-[#B9007C] hover:text-white"
    >
      {copied ? (
        'Το link αντιγράφηκε!'
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          Share
        </>
      )}
    </button>
  );
};

export default ShareAction;
