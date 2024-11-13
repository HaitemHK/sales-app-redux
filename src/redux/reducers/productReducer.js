export const initialState = {
  clients:[{
        numero:'1',
        nom:'n1',
        prenom:'p1'
    }],
  products:[{
    codeProd : "1",
    intitule : 'Produit1',
    prix : 10
  },{
    codeProd : "2",
    intitule : 'Produit2',
    prix : 20
  },{
    codeProd : "3",
    intitule : 'Produit3',
    prix : 30
  }],
  achats:[
    {
        numero:'1',
        codeProd : '1',
        qte:5
    }
  ] 
}

function Reducer(state = initialState, action){
    switch(action.type){
        case 'AJOUTER_ACHAT':
           return({...state,achats:[...state.achats,action.payload]})
        case 'DELETE':
            return 
    }

}

export default Reducer
