import { useCallback, useEffect, useMemo, useState } from 'react'
import Head from 'next/head'


const appKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ'

export default function Home() {
    
    const [ad, setAd] = useState(null)
    
    useEffect(() => {
        adrop.initialize(appKey)
    }, [])
    
    const request = useCallback(async () => {
        const res = await adrop.request('PUBLIC_TEST_UNIT_ID_375_80')
        setAd(res?.ad ?? '')
    }, [])
    
    const property = useCallback(async (key, value) => {
        await adrop.setProperty(key, value)
    }, [])
    
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico'/>
                <script type='text/javascript' src='https://storage.adrop.io/js/adrop-0.1.1.min.js'></script>
                <script>adrop = window.adrop || {}</script>
            </Head>
            
            <main>
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
                
                <div dangerouslySetInnerHTML={{ __html: ad }}/>
            </main>
        </div>
    )
}
