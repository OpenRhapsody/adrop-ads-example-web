/// <reference types="vite/client" />

interface Banner {
    ad: string
    unit: string
}
interface NativeAd extends Banner{
    headline: string
    body: string
    profile: {
        displayName: string
        displayLogo: string
    }
    asset: string
    extra: { id: string, text: string }[]
    destinationURL: string
}

declare let adrop: {
    initialize: (appKey: string) => void;
    request: (unitId: string) => Promise<NativeAd>;
    setProperty: (key: string, value: any) => Promise<void>;
    logEvent: (name: string, params?: Record<string, any>) => Promise<void>;
    onClick: (unitId: string, link: string) => void;
}
