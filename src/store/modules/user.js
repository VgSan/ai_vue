import Util from './../../libs/util'
import appconst from './../../libs/appconst'
const user = {
    namespaced:true,
    state: {
        users:[],
        totalCount:0,
        roles:[]
    },
    mutations: {
    },
    actions:{
        async getAll({state},payload){
            let rep= await Util.ajax.get('/api/User/GetUsers');
            state.users=[];
            state.users.push(...rep.data);
            state.totalCount=rep.data.length;
        },
        async delete({state},payload){
            await Util.ajax.delete('/api/User/DeleteUser?ids='+payload.data.join(','));
        },
        async create({state},payload){
            await Util.ajax.post('/api/User/Create',payload.data);
        },
        async update({state},payload){
            await Util.ajax.put('/api/User/Update',payload.data);
        },
        async getRoles({state}){
            //let rep=await Util.ajax.get('/api/Role/GetRoles');
            state.roles=[];
            //state.roles.push(...rep.data.result.items)
        }
    }
};

export default user;
