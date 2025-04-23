export const chordLibrary = {
  // C chords
  "C Major": {
    piano: [72, 76, 79], // C5 E5 G5
    guitar: [0, 1, 0, 2, 3, 0], // 从高音到低音：高E B G D A 低E
  },
  "C Minor": {
    piano: [72, 75, 79], // C5 Eb5 G5
    guitar: [3, 4, 5, 5, 3, 3],
  },
  // C# chords
  "C# Major": {
    piano: [73, 77, 80], // C#5 F5 G#5
    guitar: [1, 2, 1, 3, 4, 1],
  },
  "C# Minor": {
    piano: [73, 76, 80], // C#5 E5 G#5
    guitar: [4, 5, 6, 6, 4, 4],
  },
  // D chords
  "D Major": {
    piano: [74, 78, 81], // D5 F#5 A5
    guitar: [2, 3, 2, 0, 0, 0], // 标准D和弦指法
  },
  "D Minor": {
    piano: [74, 77, 81], // D5 F5 A5
    guitar: [1, 3, 2, 0, 0, 1],
  },
  // D# chords
  "D# Major": {
    piano: [75, 79, 82], // D#5 G5 A#5
    guitar: [3, 4, 3, 1, 1, 1],
  },
  "D# Minor": {
    piano: [75, 78, 82], // D#5 F#5 A#5
    guitar: [2, 4, 3, 1, 1, 2],
  },
  // E chords
  "E Major": {
    piano: [76, 80, 83], // E5 G#5 B5
    guitar: [0, 0, 1, 2, 2, 0],
  },
  "E Minor": {
    piano: [76, 79, 83], // E5 G5 B5
    guitar: [0, 0, 0, 2, 2, 0], // 标准Em和弦指法
  },
  // F chords
  "F Major": {
    piano: [77, 81, 84], // F5 A5 C6
    guitar: [1, 1, 2, 3, 3, 1],
  },
  "F Minor": {
    piano: [77, 80, 84], // F5 Ab5 C6
    guitar: [1, 1, 1, 3, 3, 1],
  },
  // F# chords
  "F# Major": {
    piano: [78, 82, 85], // F#5 A#5 C#6
    guitar: [2, 2, 3, 4, 4, 2],
  },
  "F# Minor": {
    piano: [78, 81, 85], // F#5 A5 C#6
    guitar: [2, 2, 2, 4, 4, 2],
  },
  // G chords
  "G Major": {
    piano: [79, 83, 86], // G5 B5 D6
    guitar: [3, 0, 0, 0, 2, 3], // 标准G和弦指法
  },
  "G Minor": {
    piano: [79, 82, 86], // G5 Bb5 D6
    guitar: [3, 3, 3, 5, 5, 3],
  },
  // G# chords
  "G# Major": {
    piano: [80, 84, 87], // G#5 C6 D#6
    guitar: [4, 1, 1, 1, 3, 4],
  },
  "G# Minor": {
    piano: [80, 83, 87], // G#5 B5 D#6
    guitar: [4, 4, 4, 6, 6, 4],
  },
  // A chords
  "A Major": {
    piano: [81, 85, 88], // A5 C#6 E6
    guitar: [0, 2, 2, 2, 0, 0], // 标准A和弦指法
  },
  "A Minor": {
    piano: [81, 84, 88], // A5 C6 E6
    guitar: [0, 1, 2, 2, 0, 0], // 标准Am和弦指法
  },
  // A# chords
  "A# Major": {
    piano: [82, 86, 89], // A#5 D6 F6
    guitar: [1, 3, 3, 3, 1, 1],
  },
  "A# Minor": {
    piano: [82, 85, 89], // A#5 C#6 F6
    guitar: [1, 2, 3, 3, 1, 1],
  },
  // B chords
  "B Major": {
    piano: [83, 87, 90], // B5 D#6 F#6
    guitar: [2, 4, 4, 4, 2, 2],
  },
  "B Minor": {
    piano: [83, 86, 90], // B5 D6 F#6
    guitar: [2, 3, 4, 4, 2, 2],
  },
};

export type ChordName = keyof typeof chordLibrary;
