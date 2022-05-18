import { BASE_URL } from "~/api/url"

const API_KEY = '7035c60c'

export const request = async (url, params = {}, option = {}) => {
    try {
        let query = ''
        for (const [key, value] of Object.entries(params)) {
            query += `&${key}=${value}`
        }
        const response = await fetch(`${BASE_URL}${url}?apikey=${API_KEY}${query}`)

        if (response.ok) {
            const data = await response.json()
            return {
                ...data,
                success: true
            }
        }

        throw new Error()

    } catch (exception) {
        console.error(exception)
        return {
            sucess: false
        }
    }
}