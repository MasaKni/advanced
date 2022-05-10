
import { Op } from 'sequelize';
import dbConnection from "../db/dbConnection.js";
import { QueryTypes } from 'sequelize'



class PlayerRepo {

    constructor( ) {  }


    getPlayersData(){
        let sql = `SELECT nationality,count(sofifa_id) AS players_count from players
                   GROUP BY players.nationality;`;

        return dbConnection.query(sql,
            {
            type: QueryTypes.SELECT,
            raw:true
        });

    }
    
    getPlayersClub(){
        let sql = `SELECT club,count(sofifa_id) AS players_count from players
                   GROUP BY players.club;`;

        return dbConnection.query(sql,
            {
            type: QueryTypes.SELECT,
            raw:true
        });

    }
    // getPlayerClub(){
    //     let sql = `SELECT club,count(sofifa_id) AS players_count from players
    //                GROUP BY players.club;`;

    //     return dbConnection.query(sql,
    //         {
    //         type: QueryTypes.SELECT,
    //         raw:true
    //     });

    // }

    getPlayersFoot(){
        let sql = `SELECT preferred_foot,count(sofifa_id) as player_count from players
                   GROUP BY players.preferred_foot;`;

        return dbConnection.query(sql,
            {
                type: QueryTypes.SELECT,
                raw:true
            });

    }
    // getPlayersAge(){
    //     let sql = `SELECT age,count(sofifa_id) as player_count from players
    //                GROUP BY players.age;`;

    //     return dbConnection.query(sql,
    //         {
    //             type: QueryTypes.SELECT,
    //             raw:true
    //         });

    // }


}

export default new PlayerRepo();