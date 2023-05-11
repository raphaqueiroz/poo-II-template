import { knex } from "knex"

/* export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/poo-II.db",
    },
    useNullAsDefault: true,
    pool: { 
        min: 0,
        max: 1,
        afterCreate: (conn: any, cb: any) => {
            conn.run("PRAGMA foreign_keys = ON", cb)
        }
    }
})
 */
// Será usada a classe no lugar da variável com a configutração do knex;

export abstract class BaseDatabase {
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo-II.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
}