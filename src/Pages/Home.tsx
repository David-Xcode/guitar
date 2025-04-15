'use client';
import React, { useState } from "react";
import ChordSelector from "../components/ChordSelector";
import PianoPanel from "../components/PianoPanel";
import GuitarPanel from "../components/GuitarPanel";
import { chordLibrary, ChordName } from "../data/chordLibrary";

export default function Home() {
  const [selectedChord, setSelectedChord] = useState<ChordName>("C Major");
  const { piano, guitar } = chordLibrary[selectedChord];

  const pageStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    backgroundColor: '#1a1a1a',
  };

  return (
    <div style={pageStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <PianoPanel highlightedNotes={piano} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ChordSelector
          selected={selectedChord}
          onChange={setSelectedChord}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <GuitarPanel frets={guitar} />
      </div>
    </div>
  );
}
