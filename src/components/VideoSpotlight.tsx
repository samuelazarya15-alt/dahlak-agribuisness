import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Film,
  Upload,
  Clock,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  FileVideo,
  Settings,
  HelpCircle
} from 'lucide-react';
import { VIDEO_SPOTLIGHT_DATA } from '../data/agrobusinessData';
import { DAHLAK_REAL_IMAGES } from '../data/dahlakImages';

export const VideoSpotlight: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [duration, setDuration] = useState<string>('5:48');
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState<boolean>(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
  // Local video upload & custom video state
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [localFileName, setLocalFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activeVideoSource = localVideoUrl || VIDEO_SPOTLIGHT_DATA.html5VideoUrl;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Video play error:', err);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 348;
    setProgress((current / total) * 100);

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);

    // Update chapter highlight
    const chIndex = VIDEO_SPOTLIGHT_DATA.chapters.findIndex((ch, idx, arr) => {
      const nextCh = arr[idx + 1];
      return current >= ch.seconds && (!nextCh || current < nextCh.seconds);
    });
    if (chIndex >= 0) {
      setActiveChapterIndex(chIndex);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const total = videoRef.current.duration;
    if (total && !isNaN(total)) {
      const mins = Math.floor(total / 60);
      const secs = Math.floor(total % 60);
      setDuration(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetPct = parseFloat(e.target.value);
    const total = videoRef.current.duration || 348;
    const newTime = (targetPct / 100) * total;
    videoRef.current.currentTime = newTime;
    setProgress(targetPct);
  };

  const seekToChapter = (seconds: number, index: number) => {
    setActiveChapterIndex(index);
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      if (!isPlaying) {
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
    setShowSpeedMenu(false);
  };

  const handleFullscreenToggle = () => {
    if (!playerContainerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      playerContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  // Handle local video file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  const processSelectedFile = (file: File) => {
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setLocalVideoUrl(url);
      setLocalFileName(file.name);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime('0:00');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <section id="video" className="py-20 lg:py-28 bg-[#f5f5f4] border-b border-stone-200/90 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Tigrinya & Pro Editorial Badges */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            <Film className="w-3.5 h-3.5 text-emerald-400" />
            <span>ቪድዮ ንምርኣይ • Farm Video &amp; Field Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Watch Our Farm in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {VIDEO_SPOTLIGHT_DATA.subtitle}
          </p>
        </div>

        {/* Video Player Action Bar (Load Local Video from Phone or Computer) */}
        <div className="max-w-5xl mx-auto mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
              <FileVideo className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 font-editorial-serif block">
                {localFileName ? `Loaded: ${localFileName}` : 'Dahlak Agribusiness Field Recording'}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                {localFileName ? 'Custom local video active' : 'Select your handheld video file or play the default recording below'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="video/mp4,video/webm,video/quicktime,video/m4v,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{localFileName ? 'Change Video File' : 'Select Video from Device'}</span>
            </button>

            {localFileName && (
              <button
                type="button"
                onClick={() => {
                  setLocalVideoUrl(null);
                  setLocalFileName(null);
                  setIsPlaying(false);
                }}
                className="px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-medium border border-stone-300 transition-colors"
                title="Reset to default video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Main Pro-Level Native Video Player Viewport */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={playerContainerRef}
            id="dahlak-video-player"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`group relative w-full aspect-video rounded-2xl overflow-hidden bg-black border-2 transition-all duration-300 shadow-2xl ${
              isDragging ? 'border-emerald-500 ring-4 ring-emerald-500/30' : 'border-stone-800'
            }`}
          >
            {/* HTML5 Native Video Tag */}
            <video
              ref={videoRef}
              src={activeVideoSource}
              poster={DAHLAK_REAL_IMAGES.heroDroneFarm || VIDEO_SPOTLIGHT_DATA.html5PosterUrl}
              className="w-full h-full object-cover cursor-pointer"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Drag and Drop Overlay Indicator */}
            {isDragging && (
              <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-xs flex flex-col items-center justify-center z-40 text-white pointer-events-none">
                <Upload className="w-12 h-12 text-emerald-400 animate-bounce mb-2" />
                <p className="text-base font-bold font-editorial-serif">Drop your farm video file here</p>
                <p className="text-xs text-emerald-200 font-mono mt-1">Supports MP4, MOV, WebM</p>
              </div>
            )}

            {/* Center Play Overlay when Paused */}
            {!isPlaying && !isDragging && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/45 backdrop-blur-[1.5px] flex flex-col items-center justify-center cursor-pointer transition-opacity z-20"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-900/90 hover:bg-emerald-800 text-white flex items-center justify-center shadow-2xl border-2 border-emerald-400/80 transition-transform duration-200 hover:scale-110 active:scale-95">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5 text-emerald-200" fill="currentColor" />
                </div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-black/80 text-white text-xs sm:text-sm font-editorial-serif tracking-wide border border-stone-700 flex items-center gap-2">
                  <span>Click to Play ({duration})</span>
                </div>
              </div>
            )}

            {/* Bottom Sleek Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 sm:p-5 z-30 transition-opacity duration-300">
              
              {/* Scrubbable Seek Bar */}
              <div className="relative mb-3 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress || 0}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-stone-700/80 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:h-2 transition-all"
                  aria-label="Video progression seek bar"
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-white text-xs font-mono">
                
                {/* Left Controls: Play, Volume, Time */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-stone-800/90 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center gap-1.5 group/vol">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-stone-800/90 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-14 sm:w-18 h-1 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 hidden sm:inline-block"
                      aria-label="Volume level slider"
                    />
                  </div>

                  <span className="text-stone-300 text-xs font-mono pl-1">
                    {currentTime} <span className="text-stone-500">/</span> {duration}
                  </span>
                </div>

                {/* Right Controls: Speed, Chapter label, Fullscreen */}
                <div className="flex items-center gap-2.5">
                  
                  {/* Speed Selector */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                      className="px-2.5 py-1 rounded bg-stone-800/90 hover:bg-stone-700 text-stone-200 text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{playbackRate}x</span>
                    </button>

                    {showSpeedMenu && (
                      <div className="absolute bottom-full mb-2 right-0 bg-stone-900 border border-stone-700 rounded-lg p-1 shadow-xl z-50 flex flex-col space-y-1 min-w-[70px]">
                        {[0.75, 1, 1.25, 1.5, 2].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => changeSpeed(rate)}
                            className={`px-2 py-1 text-left rounded text-xs font-mono ${
                              playbackRate === rate ? 'bg-emerald-800 text-white font-bold' : 'text-stone-300 hover:bg-stone-800'
                            }`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleFullscreenToggle}
                    className="p-2 rounded-lg bg-stone-800/90 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                    aria-label="Toggle fullscreen"
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Documentary Narrative & Chapter Segments Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Documentary Overview */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-stone-300 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold uppercase tracking-wider mb-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Executive Agronomy &amp; Field Operations Feature</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal font-editorial-serif text-slate-900 leading-snug">
                {VIDEO_SPOTLIGHT_DATA.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {VIDEO_SPOTLIGHT_DATA.description}
              </p>
              
              <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <span className="font-serif italic text-slate-800">
                  {VIDEO_SPOTLIGHT_DATA.narrator}
                </span>
                <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Location: Luweero City Council Demonstration Farm
                </span>
              </div>
            </div>

            {/* Right 1 Col: Video Key Chapters */}
            <div className="bg-white rounded-xl border border-stone-300 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-editorial-serif text-base font-normal text-slate-900 pb-2 border-b border-stone-200 mb-3 flex items-center justify-between">
                  <span>Farm Walkthrough Chapters</span>
                  <span className="text-xs font-mono text-slate-500 font-normal">5 Segments</span>
                </h4>
                
                <div className="space-y-2">
                  {VIDEO_SPOTLIGHT_DATA.chapters.map((ch, idx) => (
                    <button
                      key={ch.time}
                      type="button"
                      onClick={() => seekToChapter(ch.seconds, idx)}
                      className={`w-full text-left p-2 rounded-lg transition-all flex items-start gap-2.5 text-xs cursor-pointer ${
                        activeChapterIndex === idx
                          ? 'bg-emerald-900 text-white shadow-xs'
                          : 'hover:bg-stone-100 text-slate-700'
                      }`}
                    >
                      <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-bold ${
                        activeChapterIndex === idx ? 'bg-emerald-800 text-emerald-200' : 'bg-stone-200 text-slate-700'
                      }`}>
                        {ch.time}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{ch.title}</p>
                        <p className={`text-[11px] line-clamp-1 ${activeChapterIndex === idx ? 'text-emerald-100' : 'text-slate-500'}`}>
                          {ch.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
