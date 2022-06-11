import {createStore} from "redux" ; 

import { reducer  } from "./reducer";

//const init = {count : 0}

export const store = createStore(reducer,{count : 0 , todo : []}) ; 

//store.dispatch(Add_Count(1));


//  why we use redux instead of context api // 

// 1) performance 
// 2) single source of Truth  // every thing is store in one place 
// 3) context api is not state management .. but it is  gobal 
// 4) Immuatable behaviour of redux means redux store are not change means i am inteiarly create new store again and again 
// 5)  