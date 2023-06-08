import { deposit,withdraw,depositAmount,withdrawAmount } from "./Index";

export function accountReducer(state ={balance:1000},action){

    switch (action.type) {
        case deposit:
          return { balance: state.balance + action.payload };
        case withdraw:
          return { balance: state.balance -  action.payload  };
        case depositAmount:
            {
                
                return { balance: state.balance + action.payload };
            }
          
        case withdrawAmount:
            {
                  if(state.balance-action.payload<0)
                  {
                    alert("आपके बैंक खाते में अपर्याप्त धन है");
                  }
                  else
                    return { balance: state.balance -  action.payload  };
            }
        default:
          return state;
      }
}