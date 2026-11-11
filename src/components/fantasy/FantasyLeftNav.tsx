import React from 'react';
import {
  WoodenHutIcon,
  PerchedOwlIcon,
  CarvedPlaqueIcon,
  TreeLibraryIcon,
} from './FantasyAvianDecor';

interface FantasyLeftNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const FantasyLeftNav: React.FC<FantasyLeftNavProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <WoodenHutIcon size={24} />, key: '1' },
    { id: 'trending', label: 'Trending', icon: <PerchedOwlIcon size={24} />, key: '2' },
    { id: 'subscriptions', label: 'Subscriptions', icon: <CarvedPlaqueIcon size={24} />, key: '3' },
    { id: 'library', label: 'Library', icon: <TreeLibraryIcon size={24} />, key: '4' },
  ];

  return (
    <aside className="fantasy-left-sidebar" aria-label="Main Forest Navigation">
      {/* Carved Wooden Tree-Trunk Navigation Column */}
      <div className="wooden-trunk-nav">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`trunk-nav-item ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectTab(item.id)}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              title={`${item.label} (Key ${item.key})`}
            >
              <div className="trunk-icon-wrapper">
                {item.icon}
                {isActive && <div className="active-leaf-glow" />}
              </div>
              <span className="trunk-item-label">{item.label}</span>
              <span className="trunk-hotkey-badge">{item.key}</span>
            </button>
          );
        })}
      </div>

      {/* Wildlife Accents: Animated Squirrels & Fawn */}
      <div className="left-wildlife-ambient" aria-hidden="true">
        <div className="tree-squirrel squirrel-upper" title="Forest Squirrel" />
        <div className="tree-squirrel squirrel-lower" title="Forest Squirrel" />
      </div>
    </aside>
  );
};
