export interface Level {
    maxLetters: number;
    letters: string[];
    words: { visible: boolean; value: string }[];
    hints: string[];
}
