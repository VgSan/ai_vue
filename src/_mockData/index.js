import moment from 'moment'
import uniq from 'lodash/uniq'
import orderBy from 'lodash/orderBy'

import without from 'lodash/without'
import camelCase from 'lodash/camelCase'
const Random = require('mockjs').Random

//import users from './dataSource'
const typeOf = o => Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
const purify = o => JSON.parse(JSON.stringify(o)) // purify data

/**
 * mockData - simulate Ajax request and respond
 * @param   {Object} query
 * @resolve {Object}
 */

const total = 120 // how many rows to generate
const getRandomUid = () => Random.integer(1, total)

var users = [];

var loadUsers = function LoadUsers() {
    users = Array(total).fill().map((item, idx) => {
        let name = Random.name()
        return {
            uid: idx + 1,
            name,
            age: Random.integer(1, 100),
            email: `${camelCase(name.split(' ')[0])}@oneway.mobi`,
            friends: without(
                uniq(Array(getRandomUid()).fill().map(() => getRandomUid())),
                idx // exclude `myself`
            ),
            country: Random.pick(
                ['US', 'UK', 'China', 'Russia', 'Germany', 'France', 'Japan']
            ),
            lang: Random.pick(
                ['English', 'Chinese', 'Russian', 'German', 'French', 'Japanese']
            ),
            programLang: Random.pick(
                ['C', 'C++', 'Java', 'C#', 'Python', 'Ruby', 'PHP', 'JavaScript', 'Go']
            ),
            ip: Random.ip(),
            color: Random.color(),
            createTime: +new Date(Random.datetime('yyyy/MM/dd HH:mm:ss')) // to timestamp
        }
    })
}

export default function mockData(query) {
    loadUsers();
    query = purify(query)
    const { limit = 10, offset = 0, sort = '', order = '' } = query

    let rows = users;

    // custom query conditions
    ['uid', 'name', 'email', 'country', 'lang', 'programLang'].forEach(field => {
        switch (typeOf(query[field])) {
            case 'array':
                rows = rows.filter(row => query[field].includes(row[field]))
                break
            case 'string':
                rows = rows.filter(row => row[field].toLowerCase().includes(query[field].toLowerCase()))
                break
            default:
                // nothing to do
                break
        }
    })

    if (sort) {
        rows = orderBy(rows, sort, order)
    }

    const res = {
        rows: rows.slice(offset, offset + limit),
        total: rows.length,
        summary: {
            uid: rows.length,
            age: rows.length && ~~(rows.map(({ age }) => age).reduce((sum, cur) => sum + cur) / rows.length), // average age
            country: uniq(rows.map(({ country }) => country)).length
        }
    }

    const consoleGroupName = 'Employee data - ' + moment().format('YYYY-MM-DD HH:mm:ss')
    setTimeout(() => {
        console.group(consoleGroupName)
        console.info('Receive:', query)
        console.info('Respond:', res)
        console.groupEnd(consoleGroupName)
    }, 0)
    return Promise.resolve(purify(res))
}