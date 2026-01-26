
export interface Position {
  id: number;
  title: string;
  description: string;
}

export type AppState = 'INTRO' | 'HOME' | 'SPINNING' | 'RESULT';
