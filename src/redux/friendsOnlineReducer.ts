import ava1 from "../images/ava_1.png";
import ava2 from "../images/ava_2.png";
import ava3 from "../images/ava_3.png";


let initialState = {
    sidebar: [
        {id: 1, name: 'Неясыть', ava: ava1},
        {id: 2, name: 'Филин', ava: ava2},
        {id: 3, name: 'Полярная сова', ava: ava3}
    ]
}
const friendsOnlineReducer = (state:any = initialState, action:any) => {

    return state
}

export default friendsOnlineReducer