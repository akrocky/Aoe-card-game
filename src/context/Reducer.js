 const cardReducer = (state, action) => {
    switch (action.type) {

        case "fetch":
        
        return{
            ...state,playerCards:action.payload
        }
        case "asc":
            return { ...state, playerCards : state.playerCards?.sort((a, b) =>  a.playerName.toLowerCase().localeCompare(b.playerName.toLowerCase()))}
                  
        case "dsc":
            return { ...state, playerCards : state.playerCards?.sort((a, b) =>  b.playerName.toLowerCase().localeCompare(a.playerName.toLowerCase()))}

     case "details":
                    return { ...state, cardDeatails:{
                        id:action.payload.id, 
                        playerName:action.payload.playerName,
                         realName:action.payload.realName,
                          asset:action.payload.realName
                    } }
     case "removeDetails":
                    return { ...state, cardDeatails:{}}
        
  


        default:
            return state;
    }
}
export default  cardReducer