 const cardReducer = (state, action) => {
    switch (action.type) {

        case "FETCH":
        
        return{
            ...state,playerCards:action.payload
        }
        case "ASC":
            return { ...state, playerCards : state.playerCards?.sort((a, b) =>  a.playerName.toLowerCase().localeCompare(b.playerName.toLowerCase()))}
                  
        case "DSC":
            return { ...state, playerCards : state.playerCards?.sort((a, b) =>  b.playerName.toLowerCase().localeCompare(a.playerName.toLowerCase()))}

     case "DETAILS":
                    return { ...state, cardDeatails:{
                        id:action.payload.id, 
                        playerName:action.payload.playerName,
                         realName:action.payload.realName,
                          asset:action.payload.realName
                    } }
     case "REMOVEDETAILS":
                    return { ...state, cardDeatails:{}}
        
  


        default:
            return state;
    }
}
export default  cardReducer