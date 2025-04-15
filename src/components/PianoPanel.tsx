import React from "react";
import { Piano, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

interface Props {
  highlightedNotes: number[];
}

export default function PianoPanel({ highlightedNotes }: Props) {
  const firstNote = MidiNumbers.fromNote("c4");
  const lastNote = MidiNumbers.fromNote("b6");

  const pianoStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  };

  return (
    <div style={pianoStyle}>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={() => {}}
        stopNote={() => {}}
        activeNotes={highlightedNotes}
        width={800}
      />
    </div>
  );
}
