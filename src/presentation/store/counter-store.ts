import { create } from "zustand";

export interface CounterState{
    counter:number;
    incrementBy:(value:number)=>void;
}

export const useCounterStore = create<CounterState>()((set,get)=>({
    counter:0,
    incrementBy:(value:number)=>{
        // set(state =>({counter:state.counter+value}))
        set({counter:get().counter+value})
    }
}))