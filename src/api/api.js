import { BASE_URL } from "~/api/url"

export const request = async (url, params, option = {}) => {
    try {
        let parameter = ''
        for (const { key, value } of params) {
            parameter += `&${key}=${value}`
        }
        const response = await fetch(`${BASE_URL}${url}?${parameter}`)

        if (response.ok) {
            const data = response.json()
            return data
        }

        throw new Error()

    } catch (exception) {
        console.error(exception)
        return {
            sucess: false
        }
    }
}