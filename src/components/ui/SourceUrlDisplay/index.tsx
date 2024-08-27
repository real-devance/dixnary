interface SourceUrlProps {
    url: string; 
}

function SourceUrlDisplay({ url }: SourceUrlProps) {
  return (
    <div className="font-inconsolata font-normal flex items-center gap-5">
  
      <p className="text-gray-500 text-base">Source</p>
      
      <a
        href={url} // The URL to navigate to
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="source" 
        className="text-sm underline break-all"  
      >
        {url} 
      </a>
    </div>
  );
}

export default SourceUrlDisplay;
