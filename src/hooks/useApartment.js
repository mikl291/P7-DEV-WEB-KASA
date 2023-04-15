import { useEffect, useState } from "react"
export function useApartment(id) {
    const [flat, setFlat] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        fetch('./db.json', { signal: abortController.signal })
            .then((res) => (res.json())
                .then((flats) => {
                    const flat = flats.find(flat => flat.id === id)
                    setFlat(flat)
                }))
            .catch(console.error)
        return () => {
            abortController.abort()
        }
    }, [flat])
    return flat
}