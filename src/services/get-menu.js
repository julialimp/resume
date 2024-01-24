async function getMenu() {
    const response = await fetch(`http://localhost:3000/json/main.json`)
    return await response.json()
}

export {getMenu}