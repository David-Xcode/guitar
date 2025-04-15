export const chordLibrary = {
  "C Major": {
    piano: [72, 76, 79], // C5 E5 G5
    guitar: [0, 1, 0, 2, 3, 0], // 从高音到低音：高E B G D A 低E
  },
  "G Major": {
    piano: [79, 83, 86], // G5 B5 D6
    guitar: [3, 0, 0, 0, 2, 3], // 标准G和弦指法
  },
  "A Minor": {
    piano: [81, 84, 88], // A5 C6 E6
    guitar: [0, 2, 2, 2, 0, 0], // 标准Am和弦指法
  },
  "D Major": {
    piano: [74, 78, 81], // D5 F#5 A5
    guitar: [2, 3, 2, 0, 0, 0], // 标准D和弦指法
  },
  "E Minor": {
    piano: [76, 79, 83], // E5 G5 B5
    guitar: [0, 0, 0, 2, 2, 0], // 标准Em和弦指法
  },
};

export type ChordName = keyof typeof chordLibrary;
