export const user = {
    namespaced: true,
    state:()=>{
        return {
            role: 'student',//有4种角色，student-学生，teacher-教师，major-专家，mixin-教师和专家
            loginFlag: 1,
            baseInfo: {
                name: '',
                age: 0
            }
        }
    },
    getters:{
        getBaseinfo: state => state.baseInfo
    },
    mutations:{
        setBaseinfo: (state, data) => state.baseInfo = data
    },
    actions:{
        getUser: ({commit}) => {
            let baseInfo = {
                name: 'jgmiu',
                age: 26
            }
            commit('setBaseinfo', baseInfo)
        }
    }
}