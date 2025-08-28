export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Large hexagonal DNA-like structure on the right */}
      <div className="absolute right-0 top-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="hexagonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Large hexagonal structure */}
          <g transform="translate(700, 200) scale(1.5)">
            {/* Main hexagon outline */}
            <polygon 
              points="100,20 180,60 180,140 100,180 20,140 20,60" 
              stroke="url(#hexagonGrad)" 
              strokeWidth="2" 
              fill="none"
              opacity="0.8"
            />
            
            {/* Inner connecting lines creating DNA-like structure */}
            <line x1="20" y1="60" x2="180" y2="140" stroke="url(#purpleGlow)" strokeWidth="2" opacity="0.6" />
            <line x1="20" y1="140" x2="180" y2="60" stroke="url(#cyanGlow)" strokeWidth="2" opacity="0.6" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="url(#hexagonGrad)" strokeWidth="1.5" opacity="0.5" />
            
            {/* Additional connecting points */}
            <circle cx="100" cy="20" r="3" fill="#8b5cf6" opacity="0.8" />
            <circle cx="180" cy="60" r="3" fill="#06b6d4" opacity="0.8" />
            <circle cx="180" cy="140" r="3" fill="#8b5cf6" opacity="0.8" />
            <circle cx="100" cy="180" r="3" fill="#06b6d4" opacity="0.8" />
            <circle cx="20" cy="140" r="3" fill="#8b5cf6" opacity="0.8" />
            <circle cx="20" cy="60" r="3" fill="#06b6d4" opacity="0.8" />
          </g>
          
          {/* Flowing geometric lines */}
          <path 
            d="M0,400 Q300,200 600,350 T1200,300" 
            stroke="url(#purpleGlow)" 
            strokeWidth="1.5" 
            fill="none"
            opacity="0.4"
          />
          <path 
            d="M0,500 Q400,300 800,450 T1200,400" 
            stroke="url(#cyanGlow)" 
            strokeWidth="1" 
            fill="none"
            opacity="0.3"
          />
          
          {/* Angular accent lines */}
          <line x1="0" y1="0" x2="400" y2="200" stroke="url(#purpleGlow)" strokeWidth="1" opacity="0.2" />
          <line x1="800" y1="0" x2="1200" y2="300" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-cyan-950/20" />
    </div>
  )
}
