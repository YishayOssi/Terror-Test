const BASE_URL = "http://localhost:3010";



export async function getAllData() {
    try {
        const res = await fetch(`${BASE_URL}/data`, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}


export async function saveScore(score) {
    try {
        const res = await fetch(`${BASE_URL}/save`, {
            method: "POST"
        });
        return await res.json();
    } catch (error) {
        console.error("Error fetching complaints:", error);
        return [];
    }
}
