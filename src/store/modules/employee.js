import Util from './../../libs/util'
import appconst from './../../libs/appconst'
const employee = {
    namespaced:true,
    state: {
        employees:[],
        totalCount:0
    },
    mutations: {
    },
    actions:{
        async getAll({state},payload){
            let rep= await Util.ajax.get('/api/Employee/GetEmployees');
            state.employees=[];
            state.employees.push(...rep.data);
            state.totalCount=rep.data.length;
        },
        async delete({state},payload){
            await Util.ajax.delete('/api/Employee/DeleteEmployee?Id='+payload.data.id);
        },
        async create({state},payload){
            await Util.ajax.post('/api/Employee/CreateEmployee',payload.data);
        },
        async update({state},payload){
            await Util.ajax.put('/api/Employee/UpdateEmployee',payload.data);
        }
    }
};

export default employee;