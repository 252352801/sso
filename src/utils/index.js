import { get as lodashGet} from 'lodash'
export function getUrlQuery(url) {
    let search = url.split('?')[1]
    const res = {}
    if (search) {
        search = search.replace(/#.*/g, '')
        const params = search.split('&')
        params.forEach(ele => {
            const keyVal = ele.split('=')
            res[keyVal[0]] = keyVal[1] || ''
        })
    }
    return res
}
export function get(...args) {
    return lodashGet(...args)
}