
import { StatusCodes } from 'http-status-codes';

import playerRepo from '../repositories/playerRepo.js'

export default class PlayerCtrl {

    constructor( ) { }
    getPlayersData = async (req,res,next) => {


            const availableStadiums = await playerRepo.getPlayersData();
            const result = [];
            for (let i =0;i < availableStadiums.length;i++){

                    result.push(
                        availableStadiums[i]
                        )
            }

            res.status(StatusCodes.OK).json({
                'result':result
            })
    }


    getFoot = async (req,res,next) => {

        const availableStadiums = await playerRepo.getPlayersFoot();
        const result = [];
        for (let i =0;i < availableStadiums.length;i++){

            result.push(
                availableStadiums[i]
            )
        }
        res.status(StatusCodes.OK).json({
            'result':result
        })
    }

    getPlayersClub= async (req,res,next) => {


        const availableStadiums = await playerRepo.getPlayersClub();
        const result = [];
        for (let i =0;i < availableStadiums.length;i++){

                result.push(
                    availableStadiums[i]
                    )
        }

        res.status(StatusCodes.OK).json({
            'result':result
        })
}
    // getAge = async (req,res,next) => {

    //     const availableStadiums = await playerRepo.getPlayersAge();
    //     const result = [];
    //     for (let i =0;i < availableStadiums.length;i++){

    //         result.push(
    //             availableStadiums[i]
    //         )
    //     }
    //     res.status(StatusCodes.OK).json({
    //         'result':result
    //     })
    // }


    // getClub = async (req,res,next) => {

    //     const availableStadiums = await playerRepo.getPlayerClub();
    //     const result = [];
    //     for (let i =0;i < availableStadiums.length;i++){

    //         result.push(
    //             availableStadiums[i]
    //         )
    //     }
    //     res.status(StatusCodes.OK).json({
    //         'result':result
    //     })
    // }



}
