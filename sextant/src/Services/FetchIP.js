
export const getIPAddress = async (apiLink) => {
    const response = await fetch(apiLink)
    const data = await response.json()
    return data
} 