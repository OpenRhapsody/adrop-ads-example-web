export interface Banner {
    ad: string
    unit: string
}

export interface NativeAd  extends Banner {
    headline?: string
    body?: string
    extra?: { id: string, text: string }[]
    profile?: { displayName: string, displayLogo: string, link: string }
}
