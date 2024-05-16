/// <reference types="vite/client" />
declare let adrop: {
    initialize: (appKey: string) => void;
    request: (unitId: string) => Promise<{ad: string, unit: string}>;
    setProperty: (key: string, value: string) => Promise<void>;
    logEvent: (name: string, params?: Record<string, any>) => Promise<void>;
}
