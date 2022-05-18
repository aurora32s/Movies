/**
 * 영화 관련 작업 repository
 */

import { request } from "~/api/api"

/**
 * @param {String} title 영화 제목
 * @param {Number} page 검색 페이지
 */
export const getMoviesByTitle = async (params) => {
    return request('/', params)
}

/**
 * @param {*} movieId 영화 id
 * @param {*} plot 영화 줄거리 길이(short/full)
 */
export const getMovieById = async (params) => {
    return request('/', params)
}