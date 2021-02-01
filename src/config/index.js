const hostsMap = {
    'development':'http://192.168.106.118:28080/',
    'production':''
}
export const host = hostsMap[process.env.NODE_ENV]