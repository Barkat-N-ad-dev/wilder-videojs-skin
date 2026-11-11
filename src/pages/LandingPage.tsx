import React, { useState, useEffect } from 'react';
import { VideoPlayer } from '@videojs/react/video';
import { MuxVideo } from '@videojs/react/media/mux-video';
import { WilderSkin } from '@/components/wilder/WilderSkin';
import { NATURE_FILMS, NatureFilm } from '@/config/media';
import { FantasyTopNav } from '@/components/fantasy/FantasyTopNav';
import { FantasyLeftNav } from '@/components/fantasy/FantasyLeftNav';
import { FantasyRightSidebar } from '@/components/fantasy/FantasyRightSidebar';
import { LivingForestFireflies } from '@/components/fantasy/FantasyAvianDecor';

export const LandingPage: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<NatureFilm>(NATURE_FILMS[0]);
  const [activeNavTab, setActiveNavTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Hotkey navigation for left sidebar: 1 = Home, 2 = Trending, 3 = Subscriptions, 4 = Library
  useEffect(() => {
    const handleNavKeys = (e: KeyboardEvent) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      switch (e.key) {
        case '1':
          setActiveNavTab('home');
          break;
        case '2':
          setActiveNavTab('trending');
          break;
        case '3':
          setActiveNavTab('subscriptions');
          break;
        case '4':
          setActiveNavTab('library');
          break;
      }
    };
    window.addEventListener('keydown', handleNavKeys);
    return () => window.removeEventListener('keydown', handleNavKeys);
  }, []);

  const filteredFilms = NATURE_FILMS.filter((f) =>
    f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.series.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fantasy-forest-world">
      {/* Background Illustrated Forest Environment Canvas */}
      <div className="forest-environment-canvas" aria-hidden="true" />

      {/* Atmospheric Sunlight Caustic Beam */}
      <div className="sunlight-god-rays" aria-hidden="true" />

      {/* Bioluminescent Living Forest Fireflies & Spores */}
      <LivingForestFireflies />

      {/* Top Navigation Bar: WILDER Branding, Twisted Branch Search, Nature Guide */}
      <FantasyTopNav
        onSearch={(q) => setSearchQuery(q)}
        activeSearchQuery={searchQuery}
      />

      {/* Main Sanctuary Grid Layout: Left Nav + Center Player + Right Sidebar */}
      <div className="fantasy-main-layout">
        {/* Left Wooden Tree Trunk Navigation */}
        <FantasyLeftNav
          activeTab={activeNavTab}
          onSelectTab={(tab) => setActiveNavTab(tab)}
        />

        {/* Central Living Tree Video Player Clearing */}
        <main className="fantasy-player-clearing">
          <VideoPlayer>
            <WilderSkin film={selectedFilm} aspectRatio="16/9">
              {selectedFilm.muxPlaybackId ? (
                <MuxVideo
                  source={{ playbackId: selectedFilm.muxPlaybackId }}
                  poster={selectedFilm.poster}
                  playsInline
                />
              ) : (
                <video
                  src={selectedFilm.videoSrc}
                  poster={selectedFilm.poster}
                  playsInline
                  controls={false}
                />
              )}
            </WilderSkin>
          </VideoPlayer>
        </main>

        {/* Right Ivy-Covered Sidebar: Recommended Nature Videos */}
        <FantasyRightSidebar
          films={filteredFilms.length > 0 ? filteredFilms : NATURE_FILMS}
          selectedFilmId={selectedFilm.id}
          onSelectFilm={(film) => setSelectedFilm(film)}
        />
      </div>

      {/* Ambient World Footer */}
      <footer className="fantasy-world-footer">
        <span>WILDER // NATURE IN MOTION // LIVING FOREST SANCTUARY // HARDWARE ACCELERATED</span>
      </footer>
    </div>
  );
};
