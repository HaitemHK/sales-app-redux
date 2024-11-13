export function addProdAction(newProd){
    return(
        {
            type:'AJOUTER_ACHAT',
            payload:newProd
        }
    )
}


export function deleteProdAction(prodId){
    return(
        {
            type:'DELETE',
            payload:prodId
        }
    )
}
