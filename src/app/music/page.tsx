"use client";

import { Heading, Text, Card } from "@once-ui-system/core";
import { PiMusicNote } from "react-icons/pi";

export default function MusicPage() {
  const tracks = [
    { id: 1, title: "Dreamscape", artist: "Magic Sound", cover: "/images/music1.jpg" },
    { id: 2, title: "Eternal Flow", artist: "Magic Sound", cover: "/images/music2.jpg" },
    { id: 3, title: "Night Vibes", artist: "Magic Sound", cover: "/images/music3.jpg" },
  ];

  return (
    <div className="py-12 px-6">
      <Heading as="h2" className="mb-8 flex items-center gap-2">
        <PiMusicNote className="w-8 h-8" /> Music
      </Heading>

      {/* pakai flex grid */}
      <div className="flex flex-wrap gap-6">
        {tracks.map((track) => (
          <Card
            key={track.id}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={track.cover}
              alt={track.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <Heading >{track.title}</Heading>
              <Text color="muted">
                {track.artist}
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
