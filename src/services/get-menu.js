async function getMenu() {
    const response = await fetch(`https://localhost:3000/json/main.json`)
    return await response.json()
}

export {getMenu}