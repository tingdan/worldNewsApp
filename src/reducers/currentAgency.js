

const initialAgency = {
    name: 'nothing',
    imgLogo: '../images/news.jpg'
}

export default function(state = initialAgency, action) {
    switch (action.type) {
        case "CHANGE_AGENCY":
            return {
                name: action.agency,
                imgLogo: `./images/${action.agency}.png`
            }
        default:
            return state;

    }
}
