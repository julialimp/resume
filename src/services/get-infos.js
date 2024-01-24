async function getInfos(route) {
    const response = await fetch(`https://localhost:3000/json/${route}.json`)
    return await response.json()
}

export { getInfos }