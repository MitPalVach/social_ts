const ava = 'https://cdn-icons-png.flaticon.com/512/12/12426.png'


export type SidebarType = {
    id: number
    name: string
    ava: string
}
export type InitialStateType = {
    sidebar: Array<SidebarType>
}
let initialState: InitialStateType = {
    sidebar: [
        {id: 1, name: 'Неясыть', ava: ava},
        {id: 2, name: 'Филин', ava: ava},
        {id: 3, name: 'Полярная сова', ava: ava}
    ]
}
const friendsOnlineReducer = (state: InitialStateType = initialState) => {
    return state
}

export default friendsOnlineReducer