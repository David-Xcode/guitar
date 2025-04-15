import React, { useState } from "react";
import { chordLibrary, ChordName } from "../data/chordLibrary";

interface Props {
  selected: ChordName;
  onChange: (chord: ChordName) => void;
}

type NoteColor = {
  base: string;
  light: string;
  dark: string;
};

// 音符对应的主题色
const noteColors: Record<string, NoteColor> = {
  'C': {
    base: 'rgb(249, 115, 22)', // orange-500
    light: 'rgb(251, 146, 60)', // orange-400
    dark: 'rgb(194, 65, 12)', // orange-600
  },
  'C#': {
    base: 'rgb(234, 179, 8)', // yellow-500
    light: 'rgb(250, 204, 21)', // yellow-400
    dark: 'rgb(202, 138, 4)', // yellow-600
  },
  'D': {
    base: 'rgb(34, 197, 94)', // green-500
    light: 'rgb(74, 222, 128)', // green-400
    dark: 'rgb(22, 163, 74)', // green-600
  },
  'D#': {
    base: 'rgb(16, 185, 129)', // emerald-500
    light: 'rgb(52, 211, 153)', // emerald-400
    dark: 'rgb(5, 150, 105)', // emerald-600
  },
  'E': {
    base: 'rgb(20, 184, 166)', // teal-500
    light: 'rgb(45, 212, 191)', // teal-400
    dark: 'rgb(13, 148, 136)', // teal-600
  },
  'F': {
    base: 'rgb(6, 182, 212)', // cyan-500
    light: 'rgb(34, 211, 238)', // cyan-400
    dark: 'rgb(8, 145, 178)', // cyan-600
  },
  'F#': {
    base: 'rgb(59, 130, 246)', // blue-500
    light: 'rgb(96, 165, 250)', // blue-400
    dark: 'rgb(37, 99, 235)', // blue-600
  },
  'G': {
    base: 'rgb(99, 102, 241)', // indigo-500
    light: 'rgb(129, 140, 248)', // indigo-400
    dark: 'rgb(79, 70, 229)', // indigo-600
  },
  'G#': {
    base: 'rgb(139, 92, 246)', // violet-500
    light: 'rgb(167, 139, 250)', // violet-400
    dark: 'rgb(124, 58, 237)', // violet-600
  },
  'A': {
    base: 'rgb(168, 85, 247)', // purple-500
    light: 'rgb(192, 132, 252)', // purple-400
    dark: 'rgb(147, 51, 234)', // purple-600
  },
  'A#': {
    base: 'rgb(217, 70, 239)', // fuchsia-500
    light: 'rgb(232, 121, 249)', // fuchsia-400
    dark: 'rgb(192, 38, 211)', // fuchsia-600
  },
  'B': {
    base: 'rgb(236, 72, 153)', // pink-500
    light: 'rgb(244, 114, 182)', // pink-400
    dark: 'rgb(219, 39, 119)', // pink-600
  }
};

// 基础音符
const baseNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] as const;

// 和弦类型
const chordTypes = [
  { id: "Major", label: "Major" },
  { id: "Minor", label: "Minor" },
  { id: "7", label: "7" },
  { id: "5", label: "5" },
  { id: "dim", label: "dim" },
  { id: "dim7", label: "dim7" },
  { id: "aug", label: "aug" },
  { id: "sus2", label: "sus2" },
  { id: "sus4", label: "sus4" },
  { id: "maj7", label: "maj7" }
] as const;

export default function ChordSelector({ selected, onChange }: Props) {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  // 构建和弦名称
  const getChordName = (note: string, type: string) => {
    if (type === "Major") return note;
    return `${note}${type}` as ChordName;
  };

  const getButtonStyle = (note: string, isSelected: boolean) => {
    const color = noteColors[note];
    return {
      backgroundColor: isSelected ? color.base : 'rgba(55, 65, 81, 0.3)',
      color: 'white',
      boxShadow: isSelected ? `0 0 10px ${color.base}` : 'none',
      transition: 'all 0.2s ease',
      padding: '12px',
      borderRadius: '8px',
      cursor: 'pointer',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '8px',
    } as React.CSSProperties;
  };

  const getChordButtonStyle = (note: string, isSelected: boolean) => {
    const color = noteColors[note];
    return {
      backgroundColor: isSelected ? color.base : 'rgba(55, 65, 81, 0.2)',
      color: isSelected ? 'white' : color.light,
      boxShadow: isSelected ? `0 0 10px ${color.base}` : 'none',
      transition: 'all 0.2s ease',
      padding: '12px',
      borderRadius: '8px',
      cursor: 'pointer',
      width: '100px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '8px',
    } as React.CSSProperties;
  };

  const containerStyle: React.CSSProperties = {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const sectionStyle: React.CSSProperties = {
    padding: '4px',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
  };

  const noteTextStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const chordTextStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '500',
  };

  return (
    <div style={containerStyle}>
      {/* 基础音符选择器 */}
      <div style={sectionStyle}>
        <div style={buttonContainerStyle}>
          {baseNotes.map((note) => (
            <button
              key={note}
              onClick={() => setSelectedNote(note)}
              style={getButtonStyle(note, selectedNote === note)}
            >
              <span style={noteTextStyle}>{note}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 和弦类型选择器 */}
      {selectedNote && (
        <div style={sectionStyle}>
          <div style={buttonContainerStyle}>
            {chordTypes.map((type) => {
              const chordName = getChordName(selectedNote, type.id);
              return (
                <button
                  key={type.id}
                  onClick={() => onChange(chordName as ChordName)}
                  style={getChordButtonStyle(selectedNote, selected === chordName)}
                >
                  <span style={chordTextStyle}>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
