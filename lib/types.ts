// lib/types.ts
import { links } from './data';

export type SectionName = (typeof links[keyof typeof links])[number]['name'];
