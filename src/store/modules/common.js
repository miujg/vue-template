export const common = {
    namespaced: true,
    state:()=>{
        return {
            showBanner:true,
            activeIndex:'/',
            isIndex:true
        }
    },
    getters:{
        
    },
    mutations:{
        showBanner(state){
            state.showBanner = true;
        },
        closeBanner(state){
            state.showBanner = false;
        },
        changeIndex(state,crt){
            state.activeIndex = crt;
        },
        confirmIndex(state){
            state.isIndex = true;
        },
        cancelIndex(state){
            state.isIndex = false;
        }
    },
    actions:{
        
    }
}