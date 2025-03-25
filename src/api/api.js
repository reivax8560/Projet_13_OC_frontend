
export async function getUserDatas(token) {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
            // headers: {
            //     'Content-Type': 'application/json',
            //     Authorization: `Bearer ${token}`
            // }
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

export async function updateName(token, dataToSend) {


    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(dataToSend)
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