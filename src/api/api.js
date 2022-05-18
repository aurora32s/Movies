import { BASE_URL } from "~/api/url"

const API_KEY = '7035c60c'

export const request = async (url, params = {}, option = {}) => {
    try {
        let parameter = ''
        console.log(params)
        for (const [key, value] of Object.entries(params)) {
            parameter += `&${key}=${value}`
        }
        const response = await fetch(`${BASE_URL}${url}?apikey=${API_KEY}${parameter}`)

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