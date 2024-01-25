async function getMenu() {
    const response = await fetch(`/json/main.json`)
    return await response.json()
}

export {getMenu}