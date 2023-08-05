export interface ScanState {
    // Scan state properties
    count: number;
}
  
export interface ThemeState {
    // Theme state properties
    theme: {
        bg: {
            primary: string;
            secondary: string;
        };
        text: {
        primary: string;
        secondary: string;
        };
        highLight: string;
    }
    colorScheme: string;
}

export interface FavoriteState {
    // Favorites state properties
}

export interface HistoryState {
    // History state properties
}

export interface SettingState {
    // Settings state properties
    beep: boolean;
    vibration: boolean;
    copy: boolean;
    url: boolean;
    batch: boolean;
    autoFocus: boolean;
    touchFocus: boolean;
}

export interface RootState {
    scan: ScanState;
    theme: ThemeState;
    favorites: FavoriteState;
    history: HistoryState;
    setting: SettingState;
}  