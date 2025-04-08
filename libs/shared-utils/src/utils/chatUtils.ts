function createChatId(a: string, b: string) {
    return a > b ? `${b}-${a}` : `${a}-${b}`
}

export const chatUtils = {
    createChatId
}