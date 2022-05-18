import { BASE_URL } from "~/api/url"

export const request = async (url, option = {}) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`)

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