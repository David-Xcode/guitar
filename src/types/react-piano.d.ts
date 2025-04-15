declare module 'react-piano' {
  import { ReactNode } from 'react';

  export interface NoteRange {
    first: number;
    last: number;
  }

  export interface PianoProps {
    noteRange: NoteRange;
    playNote?: (midiNumber: number) => void;
    stopNote?: (midiNumber: number) => void;
    activeNotes?: number[];
    width?: number;
    keyWidthToHeight?: number;
    renderNoteLabel?: (midiNumber: number) => ReactNode;
  }

  export const Piano: React.FC<PianoProps>;

  export const MidiNumbers: {
    fromNote: (note: string) => number;
    getAttributes: (midiNumber: number) => {
      note: string;
      octave: number;
      midiNumber: number;
    };
  };
} 