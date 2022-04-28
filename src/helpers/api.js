export const getDataFromAPI = (endpoint, filter) => {
    const apiUrl = 'http://api.football-data.org/v2/'
    const token = 'ac40da2ccc4d4cfb97446629eba68930'
    let link = ''
    filter !== undefined ?
    link = `${apiUrl}/${endpoint}?${filter}` : 
    link = `${apiUrl}/${endpoint}`
    
    return fetch(link, {
        headers: {
            'X-Auth-Token': token
        }
    })
}