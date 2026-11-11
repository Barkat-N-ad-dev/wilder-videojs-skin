import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ObservationChamber } from './ObservationChamber';
import { SonarTimeline } from './SonarTimeline';
import { ControlDeck } from './ControlDeck';
import { InstrumentPanel } from './InstrumentPanel';
import { SettingsModal } from './SettingsModal';
import { MEDIA_CONFIG } from '@/config/media';

interface AbyssalSkinProps {
  children?: React.ReactNode;
  aspectRatio?: '16/9' | '21/9' | '4/3';
  title?: string;
  submersibleId?: string;
}

export const AbyssalSkin: React.FC<AbyssalSkinProps> = ({
  children,
  aspectRatio = '16/9',
  title = MEDIA_CONFIG.title,
  submersibleId = MEDIA_CONFIG.submersibleId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Core Playback State
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [bufferedEnd, setBufferedEnd] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Abyssal Futuristic Features
  const [showHud, setShowHud] = useState<boolean>(true);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [quality, setQuality] = useState<string>('auto');
  const [audioFilter, setAudioFilter] = useState<string>('flat');
  const [bioluminescentBoost, setBioluminescentBoost] = useState<boolean>(false);

  // Find inner video element rendered by children (e.g. MuxVideo or native video)
  useEffect(() => {
    if (!containerRef.current) return;
    const video = containerRef.current.querySelector('video');
    if (video) {
      videoRef.current = video;

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        if (video.buffered.length > 0) {
          setBufferedEnd(video.buffered.end(video.buffered.length - 1));
        }
      };
      const handleDurationChange = () => setDuration(video.duration || 0);
      const handleVolumeChange = () => {
        setVolume(video.volume);
        setIsMuted(video.muted);
      };
      const handleWaiting = () => setIsLoading(true);
      const handlePlaying = () => setIsLoading(false);
      const handleRateChange = () => setPlaybackRate(video.playbackRate);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('durationchange', handleDurationChange);
      video.addEventListener('volumechange', handleVolumeChange);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('ratechange', handleRateChange);

      // Initial state sync
      setIsPlaying(!video.paused);
      setCurrentTime(video.currentTime);
      setDuration(video.duration || 0);
      setVolume(video.volume);
      setIsMuted(video.muted);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('durationchange', handleDurationChange);
        video.removeEventListener('volumechange', handleVolumeChange);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('ratechange', handleRateChange);
      };
    }
  }, [children]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Controls Actions
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, []);

  const seekTo = useCallback((time: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const seekRelative = useCallback((seconds: number) => {
    if (!videoRef.current) return;
    const target = Math.max(0, Math.min(videoRef.current.duration || 100, videoRef.current.currentTime + seconds));
    videoRef.current.currentTime = target;
    setCurrentTime(target);
  }, []);

  const changeVolume = useCallback((val: number) => {
    if (!videoRef.current) return;
    videoRef.current.volume = val;
    videoRef.current.muted = val === 0;
    setVolume(val);
    setIsMuted(val === 0);
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

  const changePlaybackRate = useCallback((rate: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const togglePiP = useCallback(() => {
    if (!videoRef.current) return;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(() => {});
    } else if (videoRef.current.requestPictureInPicture) {
      videoRef.current.requestPictureInPicture().catch(() => {});
    }
  }, []);

  // Keyboard Shortcuts (WCAG AA requirement)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input/select
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case ' ':
        case 'k':
        case 'K':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowRight':
          e.preventDefault();
          seekRelative(5);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          seekRelative(-5);
          break;
        case 'ArrowUp':
          e.preventDefault();
          changeVolume(Math.min(1, volume + 0.05));
          break;
        case 'ArrowDown':
          e.preventDefault();
          changeVolume(Math.max(0, volume - 0.05));
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleMute();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'h':
        case 'H':
          e.preventDefault();
          setShowHud((prev) => !prev);
          break;
        case 'Escape':
          if (showSettings) setShowSettings(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, seekRelative, changeVolume, toggleMute, toggleFullscreen, volume, showSettings]);

  return (
    <div
      ref={containerRef}
      className={`abyssal-player-wrapper ${bioluminescentBoost ? 'bio-boost-active' : ''}`}
      style={{
        filter: bioluminescentBoost ? 'contrast(1.08) brightness(1.05)' : undefined,
      }}
    >
      {/* Decorative Submersible Rivets */}
      <div className="abyssal-chassis-rivet rivet-tl" />
      <div className="abyssal-chassis-rivet rivet-tr" />
      <div className="abyssal-chassis-rivet rivet-bl" />
      <div className="abyssal-chassis-rivet rivet-br" />

      {/* Header Status Bar */}
      <div className="abyssal-status-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="abyssal-badge">
            <span className={`abyssal-badge-dot ${isPlaying ? '' : 'amber'}`} />
            {isPlaying ? 'ACTIVE FEED' : 'STANDBY'}
          </span>
          <span style={{ fontWeight: 600, color: 'var(--abyss-text-primary)' }}>
            {title}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>LOC: 11°21′N 142°12′E</span>
          <span style={{ color: 'var(--abyss-cyan)' }}>V10.3 COMPLIANT</span>
        </div>
      </div>

      {/* Observation Chamber (Viewport) */}
      <ObservationChamber
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        showHud={showHud}
        isLoading={isLoading}
        aspectRatio={aspectRatio}
        submersibleId={submersibleId}
      >
        {children}
      </ObservationChamber>

      {/* Sonar Acoustic Scrub Timeline */}
      <SonarTimeline
        currentTime={currentTime}
        duration={duration}
        bufferedEnd={bufferedEnd}
        chapters={MEDIA_CONFIG.chapters}
        onSeek={seekTo}
      />

      {/* Tactical Bottom Control Deck */}
      <ControlDeck
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onSeekRelative={seekRelative}
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={changeVolume}
        onToggleMute={toggleMute}
        currentTime={currentTime}
        duration={duration}
        playbackRate={playbackRate}
        onChangePlaybackRate={changePlaybackRate}
        showHud={showHud}
        onToggleHud={() => setShowHud(!showHud)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showSettings={showSettings}
        onToggleSettings={() => setShowSettings(!showSettings)}
        onTogglePiP={togglePiP}
      />

      {/* Telemetry Status Rail */}
      <InstrumentPanel
        currentTime={currentTime}
        duration={duration}
        bufferedEnd={bufferedEnd}
      />

      {/* Diagnostic Settings Modal */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        playbackRate={playbackRate}
        onChangePlaybackRate={changePlaybackRate}
        quality={quality}
        onChangeQuality={setQuality}
        audioFilter={audioFilter}
        onChangeAudioFilter={setAudioFilter}
        bioluminescentBoost={bioluminescentBoost}
        onToggleBioBoost={() => setBioluminescentBoost(!bioluminescentBoost)}
      />
    </div>
  );
};
