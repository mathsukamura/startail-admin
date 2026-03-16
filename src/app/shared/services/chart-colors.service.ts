import { Injectable } from '@angular/core';
import { ThemeService } from './theme.service';
import { Observable, map } from 'rxjs';

export interface ChartColors {
  primary: string;
  primaryLight: string;
  muted: string;
  border: string;
  text: string;
  track: string;
  set: string[];
}

@Injectable({ providedIn: 'root' })
export class ChartColorsService {
  colors$: Observable<ChartColors>;

  constructor(private themeService: ThemeService) {
    this.colors$ = this.themeService.theme$.pipe(
      map((theme) => {
        if (theme === 'dark') {
          return {
            primary: '#e2e8f0',     // slate-200 (light on dark)
            primaryLight: '#94a3b8', // slate-400
            muted: '#334155',        // slate-700
            border: '#334155',       // slate-700
            text: '#cbd5e1',         // slate-300
            track: '#334155',        // slate-700
            set: ['#e2e8f0', '#94a3b8', '#64748b', '#475569'],
          };
        }
        return {
          primary: '#0f172a',      // slate-900
          primaryLight: '#94a3b8', // slate-400
          muted: '#f1f5f9',        // slate-100
          border: '#e2e8f0',       // slate-200
          text: '#64748b',         // slate-500
          track: '#e2e8f0',        // slate-200
          set: ['#0f172a', '#334155', '#64748b', '#cbd5e1'],
        };
      })
    );
  }
}
