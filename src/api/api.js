
export default async function getUserDatas(token) {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: { Authorization: 'Bearer' + token }
        });
        if (!response.ok) {
            throw new Error(`Erreur ${response.status} : ${response.statusText}`)
        }
        const result = await response.json();
        return result
    }

    catch (error) {
        return error
    }
}