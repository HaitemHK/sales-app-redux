import { useState } from "react"
import { useEffect } from "react"
import { initialState } from "./redux/reducers/productReducer"
import { useDispatch } from "react-redux"
import { addProdAction } from "./redux/actions/productAction"
export function Achat(){

    const[sales,setSales] = useState({
        num : "",
        codeProd: "",
        quantite : 0    
    })

    const dispatcher = useDispatch()

    const handleAdd = ()=>{
        dispatcher(addProdAction(sales))
        console.log(sales)
    }


    return(
        <>
        <div className="h-70 text-white bg-stone-500 w-1/2 flex flex-col gap-2 p-5 mt-32 mx-60 mb-10">
            <label htmlFor="" >Numero</label>
            <input  onChange={(e)=>{setSales({...setSales,num:e.target.value})}} type="text" className="text-black border-2 border-blue-400 rounded-md px-2 outline-none"/>
            <label htmlFor="">Intitulé</label>
            <select  name="" id="" onChange={(e)=>{setSales({...setSales,codeProd:e.target.value})}} className="border-2 border-blue-400 rounded-md px-2 outline-none text-black">
                {
                    initialState.products.map((element)=>{
                        return(
                            <option value={element.codeProd} >{element.intitule}</option>
                    )
                    }) 
                }   
            </select>
            <label htmlFor="">Quantité</label>
            <input onChange={(e)=>{setSales({...setSales,quantite:e.target.value})}} type="number" min={1}  className="text-black border-2 border-blue-400 rounded-md px-2 outline-none"/>
            <button onClick={handleAdd} className="bg-green-500 text-white w-1/3 rounded-md self-center font-sans font-semibold">Ajouter</button>
        </div>
        <table className=" mt-2 table w-full border-collapse">
            <thead>
                <th className="px-4 py-2 border-2 border-gray-200">Numero</th>
                <th className="px-4 py-2 border-2 border-gray-200">Intitulé</th>
                <th className="px-4 py-2 border-2 border-gray-200">Quantité</th>
                <th className="px-4 py-2 border-2 border-gray-200">Actions</th>
            </thead>
            <tbody>
                
                {
                    initialState.achats.map((item)=>{
                        return(
                            <>
                                <tr key={item.numero} className="text-center font-semibold">
                                    <td>{item.numero}</td>
                                    <td>{item.codeProd}</td>
                                    <td>{item.qte}</td>
                                    <td><button className="bg-red-600 text-white px-2 rounded-lg mt-1">Delete</button></td>
                                </tr>
                            </>
                        )
                    })
                }
                
            </tbody>
        </table>
        </>
    )
}