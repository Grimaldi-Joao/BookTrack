const { Pool } = require('pg');

class Conexao{

    static getConexao(user, host, database, password, port) {
        if (!Conexao.instancia) {
            Conexao.instancia = new Conexao(user, host, database, password, port)
        }
        return Conexao.instancia;
    }

    constructor(user, host, database, password, port) {
        this.user = user;
        this.host = host;
        this.database = database;
        this.password = password;
        this.port = port;
    }
    
    async conectar(){
        this.pool = new Pool({
            user: 'root',
            host: 'localhost',
            database: 'BookTrack',
            password: 'root',
            port: 5432,
        });

        this.client = await this.pool.connect();
    }

    executar(query){
        return this.client.query(query);
    }


}
module.exports = Conexao;