declare let adrop: {
    initialize: (appKey: string) => void;
    request: (unitId: string) => Promise<{
        ad: string,
        unit: string,
        headline?: string,
        body?: string,
        profile?: { displayName: string, displayLogo: string, link: string },
        extra?: { id: string, text: string }[]
    }>;
    setProperty: (key: string, value: any) => Promise<void>;
    logEvent: (name: string, params?: Record<string, any>) => Promise<void>;
};
