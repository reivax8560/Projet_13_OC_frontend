
export default async function getToken(credentials) {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error(`${response.status}, ${response.statusText}`)
        }
        const result = await response.json();
        return result.body.token
    }

    catch (error) {
        return error
    }
}
