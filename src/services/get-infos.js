async function getInfos(route) {
    const response = await fetch(`http://localhost:3000/json/${route}.json`)
    return await response.json()
}

export { getInfos }