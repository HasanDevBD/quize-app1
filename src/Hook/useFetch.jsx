import { useEffect, useState } from 'react'

function useFetch(url, methord, headers) {
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(true)
    const [result, setResult]=useState(false)
    useEffect(() => {

        async function RequestFetch(){
            try {
                setLoading(true)
                setError(false)
                const respons= await fetch(url, {
                    method: methord || "GET",
                    headers: headers,
                })
                const data=await respons.json()
                setResult(data)
                setLoading(false)
            } catch (error) {
                
                setError(true)
                setLoading(false)
                console.log(error)
            }
        }
RequestFetch()

        // effect
        // return () => {
        //     cleanup
        // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return{
        error,
        loading,
        result,
    }
}

export default useFetch
