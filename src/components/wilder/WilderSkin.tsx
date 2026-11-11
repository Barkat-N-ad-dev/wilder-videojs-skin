import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FantasyCenterPlayer } from '@/components/fantasy/FantasyCenterPlayer';
import { WilderSettingsModal } from './WilderSettingsModal';
import type { NatureFilm } from '@/config/media';

interface WilderSkinProps {
  children?: React.ReactNode;
  film: NatureFilm;
  aspectRatio?: '16/9' | '21/9' | '4/3';
}

export const WilderSkin: React.FC<WilderSkinProps> = ({
  children,
  film,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Playback States
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [bufferedEnd, setBufferedEnd] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // UI Interactive States
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showCaptions, setShowCaptions] = useState<boolean>(false);
  const [quality, setQuality] = useState<string>('4k');
  const [audioAcoustics, setAudioAcoustics] = useState<string>('dolby');
  const [narratorTrack, setNarratorTrack] = useState<boolean>(true);

  // Bind to Video element
  useEffect(() => {
    if (!containerRef.current) return;
    const video = containerRef.current.querySelector('video');
    if (video) {
      videoRef.current = video;

      const handlePlay = () => {
        setIsPlaying(true);
        setIsLoading(false);
      };
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
      const handlePlaying = () => {
        setIsLoading(false);
        setHasError(false);
      };
      const handleCanPlay = () => setIsLoading(false);
      const handleRateChange = () => setPlaybackRate(video.playbackRate);

      const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        const err = video.error;
        if (err) {
          switch (err.code) {
            case 1: // MEDIA_ERR_ABORTED
              setErrorMessage('Wildlife stream playback was interrupted.');
              break;
            case 2: // MEDIA_ERR_NETWORK
              setErrorMessage('A network delay interrupted the wildlife stream.');
              break;
            case 3: // MEDIA_ERR_DECODE
              setErrorMessage('Video decoding error in the stream.');
              break;
            case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
              setErrorMessage('Stream format not supported by browser.');
              break;
            default:
              setErrorMessage('Encountered an unexpected stream error.');
          }
        } else {
          setErrorMessage('Unable to connect to the wildlife stream.');
        }
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('durationchange', handleDurationChange);
      video.addEventListener('volumechange', handleVolumeChange);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ratechange', handleRateChange);
      video.addEventListener('error', handleError);

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
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('ratechange', handleRateChange);
        video.removeEventListener('error', handleError);
      };
    }
  }, [children, film]);

  // Fullscreen tracking
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Actions
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      setHasError(false);
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

  const retryPlayback = useCallback(() => {
    if (!videoRef.current) return;
    setHasError(false);
    setIsLoading(true);
    videoRef.current.load();
    videoRef.current.play().catch(() => {});
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
        case 'c':
        case 'C':
          e.preventDefault();
          setShowCaptions((prev) => !prev);
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
    <div ref={containerRef} className="fantasy-player-host">
      {/* Fantasy Living Tree Player with Eagle, Cubs & Glowing Controls */}
      <FantasyCenterPlayer
        film={film}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onSeekRelative={seekRelative}
        onSeekTo={seekTo}
        currentTime={currentTime}
        duration={duration}
        bufferedEnd={bufferedEnd}
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={changeVolume}
        onToggleMute={toggleMute}
        playbackRate={playbackRate}
        onChangePlaybackRate={changePlaybackRate}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showSettings={showSettings}
        onToggleSettings={() => setShowSettings(!showSettings)}
        showCaptions={showCaptions}
        onToggleCaptions={() => setShowCaptions(!showCaptions)}
        isLoading={isLoading}
        hasError={hasError}
        errorMessage={errorMessage}
        onRetryPlayback={retryPlayback}
      >
        {children}
      </FantasyCenterPlayer>

      {/* Stream & Audio Settings Modal */}
      <WilderSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        playbackRate={playbackRate}
        onChangePlaybackRate={changePlaybackRate}
        quality={quality}
        onChangeQuality={setQuality}
        audioAcoustics={audioAcoustics}
        onChangeAudioAcoustics={setAudioAcoustics}
        narratorTrack={narratorTrack}
        onToggleNarratorTrack={() => setNarratorTrack(!narratorTrack)}
      />
    </div>
  );
};
