
export async function getUserDatas(token) {

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

export async function updateName(token, firstName, lastName) {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: { Authorization: 'Bearer' + token },
            body:
            {
                "firstName": firstName,
                "lastName": lastName
            }
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