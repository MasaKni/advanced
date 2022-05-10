import { Sequelize } from 'sequelize';



class DataBaseConnector {

    constructor() {

        this._db_host = "localhost";
        this._db_port = 3306;
        this._dialect = 'mysql';
        this._password = '';
        this._username = 'root';
        this._db_name = 'advanced'

    }

    connectDB = async () => {
        const optionsObj= { benchmark: true, logging:  console.log , host: this._db_host,
            dialect: this._dialect,
            port: this._db_port}
        this.sequelize = new Sequelize(this._db_name,this._username,this._password,optionsObj);
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully..');
        }catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        try {
            await this.sequelize.sync({force: true});
            console.log('Sync to database successfully..');
        }catch (error) {
            console.error('Unable to sync to the database:', error);
        }
        return  this.sequelize;
    }

}
const dbConnection = new DataBaseConnector()

export default await dbConnection.connectDB()

