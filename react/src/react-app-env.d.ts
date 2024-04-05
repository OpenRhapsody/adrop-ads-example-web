/// <reference types="react-scripts" />

declare var adrop: {
    initialize: (appKey: string) => void;
    request: (unitId: string) => Promise<{ad: string, unit: string}>;
    setProperty: (key: string, value: string) => Promise<void>;
}
