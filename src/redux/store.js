import { legacy_createStore } from "redux";
import Reducer from "./reducers/productReducer";



const store = legacy_createStore(Reducer)


export default store