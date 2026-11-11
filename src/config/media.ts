export interface DocumentaryChapter {
  time: number;
  title: string;
  location: string;
  description: string;
  depth?: string;
  coordinates?: string;
}

export type VideoChapter = DocumentaryChapter;

export interface NatureFilm {
  id: string;
  title: string;
  series: string;
  cinematographer: string;
  location: string;
  resolution: string;
  framerate: string;
  audioSpec: string;
  synopsis: string;
  poster: string;
  videoSrc: string;
  muxPlaybackId?: string;
  views?: string;
  durationString?: string;
  chapters: DocumentaryChapter[];
}

export const NATURE_FILMS: NatureFilm[] = [
  {
    id: 'secret-life-of-bees',
    title: 'The Secret Life of Bees',
    series: 'WILDER CANOPY CHRONICLES',
    cinematographer: 'Sir David Attenborough Macro Unit',
    location: 'Enchanted Forest Meadow',
    resolution: '4K Ultra HD',
    framerate: '60 FPS',
    audioSpec: 'Micro-Acoustic Meadow Ambience',
    synopsis: 'Delve into the hidden, golden architecture of the wild forest hive. Discover the extraordinary communication dances, flight aerodynamics, and delicate pollination symphonies that keep ancient woodlands blooming.',
    poster: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1920&q=85',
    videoSrc: 'https://vjs.zencdn.net/v/oceans.mp4',
    muxPlaybackId: 'BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM',
    views: '4.8M views',
    durationString: '9:42',
    chapters: [
      { time: 0, title: 'I. The Honeycomb Kingdom', location: 'Heart of Old Oak Hive', description: 'Hexagonal wax architecture bathed in warm honey sunlight.' },
      { time: 10, title: 'II. Dance of the Pollinators', location: 'Wild Clover Glade', description: 'High-speed wing harmonics and precise navigation.' },
      { time: 24, title: 'III. Wildflower Nectar Harvest', location: 'Alpine Meadow', description: 'Gathering microscopic golden pollen under dawn dew.' },
      { time: 38, title: 'IV. Return to the Queen', location: 'Royal Chamber', description: 'Harmony and collective wisdom in the living colony.' },
    ],
  },
  {
    id: 'wilderness-adventure',
    title: 'WILDERNESS ADVENTURE!',
    series: 'EPIC EXPEDITIONS // 4K',
    cinematographer: 'Wilder Airborne Cinema Team',
    location: 'Cascadia Mountain Waterfalls',
    resolution: '4K Ultra HD',
    framerate: '60 FPS',
    audioSpec: 'Dolby Atmos Cascades',
    synopsis: 'An exhilarating aerial descent through emerald moss gorges and towering waterfalls where mountain mists nourish ancient fern valleys untouched by civilization.',
    poster: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=85',
    videoSrc: 'https://vjs.zencdn.net/v/oceans.mp4',
    muxPlaybackId: 'BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM',
    views: '3.2M views',
    durationString: '7:28',
    chapters: [
      { time: 0, title: 'I. The High Rapids', location: 'Alpine Ridge', description: 'Torrents plunging into crystalline emerald basins.' },
      { time: 14, title: 'II. Fern Canyon Veil', location: 'Deep Valley', description: 'Water droplets refracting rainbows through tree canopies.' },
      { time: 32, title: 'III. River of Living Stone', location: 'Ancient Gorge', description: 'Centuries of water sculpting granite bedrock.' },
    ],
  },
  {
    id: 'forest-symphony-4k',
    title: 'The Forest Symphony - 4K',
    series: 'BIOME ACOUSTICS',
    cinematographer: 'Elin Lindqvist // Nordic Soundscape Group',
    location: 'Bavarian & Black Forest, Germany',
    resolution: '4K Ultra HD',
    framerate: '60 FPS',
    audioSpec: 'Binaural 3D Forest Ambience',
    synopsis: 'Listen to the living acoustic ecosystem of the ancient woodland: gentle wind whistling through pine needles, babbling mossy brooks, woodpeckers tapping, and morning birdsong.',
    poster: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85',
    videoSrc: 'https://vjs.zencdn.net/v/oceans.mp4',
    muxPlaybackId: 'BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM',
    views: '1.8M views',
    durationString: '13:58',
    chapters: [
      { time: 0, title: 'I. Morning Chorus', location: 'Sunlit Clearing', description: 'Early songbirds greeting the first rays of dawn.' },
      { time: 16, title: 'II. The Whispering Creek', location: 'Moss Brook', description: 'Clear mountain meltwater flowing over pebbles.' },
      { time: 30, title: 'III. Dusk Wind in the Pines', location: 'High Ridge', description: 'Gentle rustling needles as twilight settles in the woods.' },
    ],
  },
  {
    id: 'misty-woodlands',
    title: 'Misty Woodlands & Wildlife',
    series: 'NORDIC ANCIENT TAIGA',
    cinematographer: 'Klaus Brandl // Wildlife Tracking Unit',
    location: 'Jotunheimen National Park, Norway',
    resolution: '4K Ultra HD',
    framerate: '60 FPS',
    audioSpec: 'Highland Wind & Wildlife Calls',
    synopsis: 'Follow red deer fawns, inquisitive red squirrels, and brown bear families as they forage through misty old-growth pine forests under radiant morning sunbeams.',
    poster: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1920&q=85',
    videoSrc: 'https://vjs.zencdn.net/v/oceans.mp4',
    muxPlaybackId: 'BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM',
    views: '950K views',
    durationString: '12:38',
    chapters: [
      { time: 0, title: 'I. The Fawn Awakening', location: 'Misty Meadow', description: 'A young deer emerges through golden vapor.' },
      { time: 15, title: 'II. Canopy Acorn Harvest', location: 'Oak Copse', description: 'Squirrels busily preparing for autumn in the treetops.' },
      { time: 35, title: 'III. Bear Cubs at the Stream', location: 'Salmon Creek', description: 'Young cubs playfully learning to fish and swim.' },
    ],
  },
  {
    id: 'oceans-endless-deep',
    title: 'Oceans: The Endless Realm',
    series: 'WILDER PLANET COLLECTION',
    cinematographer: 'Jacques Perrin & Marine Cinematography Unit',
    location: 'Pacific Equatorial Ridge',
    resolution: '4K Ultra HD',
    framerate: '60 FPS',
    audioSpec: 'Dolby Atmos Hydrophone Array',
    synopsis: 'A mesmerizing visual journey into the open waters, exploring pelagic wildlife migrations, crystal wave breaks, and the peaceful majesty of marine life in motion.',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
    videoSrc: 'https://vjs.zencdn.net/v/oceans.mp4',
    muxPlaybackId: 'BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM',
    views: '2.4M views',
    durationString: '18:45',
    chapters: [
      { time: 0, title: 'I. Breakers of the Pelagic', location: 'Open Pacific', description: 'Sunlight filtering through rolling sapphire swell.' },
      { time: 12, title: 'II. The Coral Nursery', location: 'Great Barrier Reef', description: 'Flourishing marine biodiversity in shallow atolls.' },
      { time: 28, title: 'III. Pelagic Wanderers', location: 'Kermadec Trench', description: 'Majestic oceanic mantas and marine mammals in synchrony.' },
      { time: 42, title: 'IV. Benthic Sanctuary', location: 'Hadal Slopes', description: 'Serenity across untouched oceanic canyons.' },
    ],
  },
];

export const ACTIVE_DEFAULT_FILM = NATURE_FILMS[0];

// Backward-compatibility alias for legacy Abyssal components
export const MEDIA_CONFIG = {
  title: ACTIVE_DEFAULT_FILM.title,
  submersibleId: 'WILDER-01',
  expedition: 'GLOBAL NATURE EXPEDITION',
  diveDepth: 'PACIFIC PELAGIC',
  muxPlaybackId: ACTIVE_DEFAULT_FILM.muxPlaybackId || 'BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM',
  hlsSrc: 'https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM.m3u8',
  fallbackMp4: ACTIVE_DEFAULT_FILM.videoSrc,
  chapters: ACTIVE_DEFAULT_FILM.chapters,
};

