import './App.css'

import React, { useCallback, useEffect, useState } from 'react'

const appKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ"

function App() {
    const [ad, setAd] = useState('')
    
    useEffect(() => {
        adrop.initialize(appKey)
    }, [])
    
    const request = useCallback(async () => {
        const res = await adrop.request('PUBLIC_TEST_UNIT_ID_375_80')
        setAd(res?.ad ?? '')
    }, [])
    
    const property = useCallback(async (key: string, value: string) => {
       await adrop.setProperty(key, value)
    }, [])
    
    const sendEvent = useCallback(async () => {
        await adrop.logEvent("event_name", {
            "data_key_1": 1,
            "data_key_2": 1.1,
            "data_key_3": true,
            "data_key_4": "value_text"
        })
    }, [])
    
    return (
        <div>
            <h1>Adrop Example</h1>
            
            <button onClick={request}>
                Request Ad (375_80)
            </button>
            
            <button onClick={() => property('GDR', 'M')}>
                Gender M
            </button>
            
            <button onClick={() => property('AGE', '25')}>
                Age 25
            </button>
            
            <button onClick={sendEvent}>
                Event
            </button>
            
            <div dangerouslySetInnerHTML={{ __html: ad }}/>
        </div>
    )
}

export default App
