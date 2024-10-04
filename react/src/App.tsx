import './App.css'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Banner, NativeAd } from './types'

const appKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ"

function App() {
    const [ad, setAd] = useState<Banner>()
    const [nativeAd, setNativeAd] = useState<NativeAd>()
    
    useEffect(() => {
        adrop.initialize(appKey)
    }, [])
    
    const banner = useMemo(() => ad?.ad ?? '', [ad])
    const native = useMemo(() => nativeAd?.ad ?? '', [nativeAd])
    
    const request = useCallback(async (unitId: string) => {
        return await adrop.request(unitId)
    }, [])
    
    const requestBanner = useCallback(async () => {
        setAd(await request('PUBLIC_TEST_UNIT_ID_375_80'))
    }, [request])
    
    const requestNativeAd = useCallback(async () => {
        setNativeAd(await request('PUBLIC_TEST_UNIT_ID_NATIVE'))
    }, [request])
    
    const sendEvent = useCallback(async () => {
        await adrop.logEvent("event_name", {
            "data_key_1": 1,
            "data_key_2": 1.1,
            "data_key_3": true,
            "data_key_4": "value_text"
        })
    }, [])
    
    const sendProperty = useCallback(async () => {
        await adrop.setProperty("property_key", "property_value")
    }, [])
    
    const renderNativeAd = useMemo(() => {
        if (!nativeAd) return null
        
        const profileLogo = nativeAd?.profile?.displayLogo
        const profileName = nativeAd?.profile?.displayName
        const headline = nativeAd?.headline
        const body = nativeAd?.body
        const creative = nativeAd?.ad
        const extra = nativeAd?.extra
        
        return (
            <div className='container column'>
                <div className='container row'>
                    {profileLogo && <img className='icon' src={profileLogo} alt='logo'/>}
                    {profileName && <span className='text'>{profileName}</span>}
                </div>
                {creative && <div dangerouslySetInnerHTML={{ __html: native }}/>}
                {headline && <div className='container text'>{headline}</div>}
                {body && <div className='container text'>{body}</div>}
                {extra && extra.map(({ id, text }) => (
                    <div key={id} className='container text'>{text}</div>
                ))}
            </div>
        )
    }, [nativeAd])
    
    return (
        <div>
            <h1>Adrop Example</h1>
            
            <div className='buttons'>
                <button onClick={requestBanner}>
                    Request Banner (375_80)
                </button>
                
                <button onClick={requestNativeAd}>
                    Request Native Ad
                </button>
                
                <button onClick={sendProperty}>
                    Property
                </button>
                
                <button onClick={sendEvent}>
                    Event
                </button>
            </div>
            
            <h2>Banner</h2>
            <div dangerouslySetInnerHTML={{ __html: banner }}/>
            
            <h2>Native Ad</h2>
            {renderNativeAd}
        </div>
    )
}

export default App
