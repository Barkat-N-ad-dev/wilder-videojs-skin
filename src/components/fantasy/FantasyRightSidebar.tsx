import React, { useState } from 'react';
import type { NatureFilm } from '@/config/media';
import { Play, Sparkles, MessageSquareHeart, Eye, Flame } from 'lucide-react';

interface FantasyRightSidebarProps {
  films: NatureFilm[];
  selectedFilmId: string;
  onSelectFilm: (film: NatureFilm) => void;
}

export const FantasyRightSidebar: React.FC<FantasyRightSidebarProps> = ({
  films,
  selectedFilmId,
  onSelectFilm,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'videos'>('home');

  // Live Nature Community Voices matching reference
  const initialComments = [
    {
      id: 'c1',
      author: 'OwlWhisperer',
      avatar: '🐻',
      text: 'This is beautiful!',
      time: '12m ago',
    },
    {
      id: 'c2',
      author: 'RiverStone',
      avatar: '🐇',
      text: 'Love this channel!',
      time: '34m ago',
    },
    {
      id: 'c3',
      author: 'CanopyStargazer',
      avatar: '🦉',
      text: 'The 4K HDR stream is crystal clear!',
      time: '1h ago',
    },
  ];

  return (
    <aside className="fantasy-right-sidebar" aria-label="Recommended Nature Documentaries">
      {/* Lush Ivy / Mossy Living Hedge Container */}
      <div className="ivy-hedge-panel">
        {/* Top Header Navigation Tabs: Home / Videos */}
        <div className="ivy-panel-header">
          <div className="ivy-tabs-group">
            <button
              type="button"
              className={`ivy-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`ivy-tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
          </div>
          {/* Glowing Turquoise Spirit Orb */}
          <div className="spirit-orb-glow" title="Sanctuary Spirit Orb" aria-hidden="true" />
        </div>

        {/* Recommended Video Cards List */}
        <div className="ivy-cards-scroll">
          {films.map((film) => {
            const isPlaying = film.id === selectedFilmId;
            return (
              <div
                key={film.id}
                className={`fantasy-video-card ${isPlaying ? 'now-playing' : ''}`}
                onClick={() => onSelectFilm(film)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectFilm(film);
                  }
                }}
                aria-label={`Play ${film.title}`}
              >
                {/* Thumbnail inside carved twig frame */}
                <div className="twig-thumbnail-frame">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="card-thumb-img"
                    loading="lazy"
                  />
                  {/* Duration Badge in warm gold */}
                  <span className="card-duration-badge">
                    {film.durationString || '10:00'}
                  </span>
                  {/* Hover Overlay Play Icon */}
                  <div className="thumb-play-overlay">
                    <Play size={16} fill="#88d63a" color="#88d63a" />
                  </div>
                </div>

                {/* Video Info Details */}
                <div className="card-info-content">
                  <h4 className="card-film-title" title={film.title}>{film.title}</h4>
                  <div className="card-meta-row">
                    <span className="card-views">{film.views || '2.1M views'}</span>
                    {isPlaying ? (
                      <span className="playing-now-pill">NOW PLAYING</span>
                    ) : (
                      <span className="hd-spec-pill">4K</span>
                    )}
                  </div>

                  {/* Circular Leaf Play Action Button */}
                  <button
                    type="button"
                    className="card-quick-play-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFilm(film);
                    }}
                    aria-label={`Play ${film.title}`}
                    title="Play"
                  >
                    <Play size={11} fill="#ffffff" color="#ffffff" style={{ marginLeft: '1px' }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Viewer Live Comments Section */}
        <div className="ivy-comments-stream">
          <div className="comments-stream-header">
            <MessageSquareHeart size={13} color="#88d63a" />
            <span>Sanctuary Voices</span>
          </div>

          <div className="comments-stream-list">
            {initialComments.map((comment) => (
              <div key={comment.id} className="stream-comment-item">
                <span className="comment-avatar-badge">{comment.avatar}</span>
                <div className="comment-body-text">
                  <span className="comment-text-bubble">"{comment.text}"</span>
                  <span className="comment-author-tag">— {comment.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forest Floor Details: Bunny Rabbit & Acorn */}
        <div className="forest-floor-bunny" aria-hidden="true">
          <div className="acorn-glow" title="Golden Forest Acorn" />
        </div>
      </div>
    </aside>
  );
};
