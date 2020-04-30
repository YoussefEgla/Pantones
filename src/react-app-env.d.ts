/// <reference types="react-scripts" />

// Views

/**
 * Pantones View
 */
interface Pantones {
  name: string;
  id: string;
  emoji?: string;
  colors: { name: string; color: string }[];
}
