import { en } from './en';
import { pl } from './pl';
import { es } from './es';
import { it } from './it';
import type { UI } from './en';

const translations: Record<string, UI> = { en, pl, es, it };

export function t(lang: string): UI {
  return translations[lang] ?? en;
}

export const LOCALES = ['en', 'pl', 'es', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

export function localePath(lang: string, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean === '/' ? '' : clean}`;
}
