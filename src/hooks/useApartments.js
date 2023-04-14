import { useEffect, useState } from 'react'


 export const useApartments = () => {
    const [Apartments, setApartments] = useState([])
    
    
    useEffect(() => {
        const abortController = new AbortController() 
        fetch('./db.json', { signal: abortController.signal })
            .then((res) => (res.json())
                .then((res) => setApartments(res)))
            .catch(console.error) 

        return () => {
            abortController.abort() 
        }
    }, []) 
    return Apartments
} 

