import { ADD_COUNT } from "./actions"; 
import { SUB_COUNT } from "./actions";
import { ADD_TODO } from "./actions";
import { SUB_TODO } from "./actions"; 
export const reducer = (store , {type , payload} )=>{
     console.log("store" , store)
    switch(type){
        case ADD_COUNT :
             return {...store , count : store.count + payload} ; 

        case SUB_COUNT :
            return {...store , count : store.count - payload} ;  

        case ADD_TODO : 
            return {...store , todo : [...store.todo, payload ]}

        case SUB_TODO :
            return {...store , todo : [...store.todo, payload ]}  /// ...store preserve previous store data , ...store.todo means preserve previous todos data , payload means only add new todo
        
      default : 
         return store ; 
     }
     
}