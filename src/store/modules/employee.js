import Util from './../../libs/util'
import appconst from './../../libs/appconst'
const employee = {
    namespaced:true,
    state: {
        employee: {},
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
        async get({state},payload){
            let rep= await Util.ajax.get('/api/Employee/GetEmployee?id='+payload.data);
            console.log(rep.data);
            state.employee = rep.data;
        },
        async delete({state},payload){
            await Util.ajax.delete('/api/Employee/DeleteEmployee?ids='+payload.data.join(','));
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