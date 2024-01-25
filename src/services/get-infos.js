async function getInfos(route) {
    const response = await fetch(`/json/${route}.json`)
    return await response.json()
}

export { getInfos }