export const required = (value: string) => {
    if (value) return undefined

    return 'Обязательно заполните';
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Не больше ${maxLength} символов`

    return undefined
}






