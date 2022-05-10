import React, { useState } from 'react'
import AgeChart from './AgeChart';
import PreferredFoot from './PreferredFoot';
import Nationality from './Nationality';
import Club from './Club';
import './Style.css'
import axios from 'axios';
import NavigationBar from '../NavigationBar';
//you can replace player id with player name
const dummyData = [
    { id: 1, goals: 12, preferredFoot: "Left", age: 20 },
    { id: 2, goals: 23, preferredFoot: "Left", age: 22 },
    { id: 3, goals: 34, preferredFoot: "Left", age: 32 },
    { id: 4, goals: 4, preferredFoot: "Left", age: 39 },
    { id: 5, goals: 1, preferredFoot: "Right", age: 40 },
    { id: 6, goals: 15, preferredFoot: "Right", age: 50 },
    { id: 7, goals: 6, preferredFoot: "Right", age: 18 },
    { id: 8, goals: 30, preferredFoot: "Right", age: 30 },
    { id: 9, goals: 44, preferredFoot: "Right", age: 16 }
];
let realData = [{preferred_foot:'test'}]



 function MainPage() {
    const [players, setPlayers] = useState({});
    const [nation, setNationality] = useState({});
    //const [age, setAge] = useState({});
    //const [club, setClub] = useState({});

    React.useEffect ( () => {
        getNationality()
     },[])
    React.useEffect ( () => {
       getPalyerData()
    },[])
    // React.useEffect ( () => {
    //     getAge()
    //  },[])
    //  React.useEffect ( () => {
    //     getClub()
    //  },[])

    // await axios.get('http://localhost:4000/getFoot').then(
    //     (res)=>{setPlayers(res)})



    const getPalyerData = async() => {
    //call api to get data from backend
    await axios.get('http://localhost:4000/getFoot').then(
        (res)=>{
            console.log(res.data.result.filter(foot=> (foot.preferred_foot =='Right'|| foot.preferred_foot =='Left')))
            const bsmella = (res.data.result.filter(foot=> (foot.preferred_foot =='Right'|| foot.preferred_foot =='Left')))
            //const data = {
            ///    left: bsmella[0].player_count, 
          //      right: bsmella[1].player_count
          //  }
           // console.log('data:'+data)
            setPlayers(bsmella)
        }
    )
    //setPlayers(dataReturnedFromBackend)
}

const getNationality =async() => {
    //call api to get data from backend
    await axios.get('http://localhost:4000/players').then(
        (res)=>{
          //  console.log(res.data.result.filter(x=> (x.nationality =='Australia'|| x.nationality =='Iran')))
            const bsmella = (res.data.result.filter(x=> (x.nationality =='Australia'|| x.nationality =='Iran'||x.nationality =='Egypt'||x.nationality =='Georgia'
            ||x.nationality =='Kazakhstan'|| x.nationality =='Italy'|| x.nationality =='Mali')))
            //const data = {
            ///    left: bsmella[0].player_count, 
          //      right: bsmella[1].player_count
          //  }
           // console.log('data:'+data)
            setNationality(bsmella)
        }
    )
    //setPlayers(dataReturnedFromBackend)
}
// const getAge =async() => {
//     //call api to get data from backend
//     await axios.get('http://localhost:4000/getAge').then(
//         (res)=>{
//           //  console.log(res.data.result.filter(x=> (x.nationality =='Australia'|| x.nationality =='Iran')))
//             const bsmella = (res.data.result.filter(x=> (x.age ==6|| x.age ==55||x.age ==16||x.age ==17
//             ||x.age ==5|| x.age ==30|| x.age ==34)))
//             //const data = {
//             //left: bsmella[0].player_count, 
//           //      right: bsmella[1].player_count
//           //  }
//            // console.log('data:'+data)
//             setAge(bsmella)
//         }
//     )

//     //setPlayers(dataReturnedFromBackend)
// }
// const getClub =async() => {
//     //call api to get data from backend
//     await axios.get('http://localhost:4000/getClub').then(
//         (res)=>{
//           //  console.log(res.data.result.filter(x=> (x.nationality =='Australia'|| x.nationality =='Iran')))
//             const bsmella = (res.data.result.filter(x=> (x.club ==""|| x.club ==""||x.club ==""||x.club ==""
//             ||x.club ==""|| x.club ==""|| x.club =="")))
//             //const data = {
//             ///    left: bsmella[0].player_count, 
//           //      right: bsmella[1].player_count
//           //  }
//            // console.log('data:'+data)
//             setClub(bsmella)
//         }
//     )}
    return (
       <div>
           <NavigationBar/>
           <div className='mainDiv'>
            
            <PreferredFoot data={players} />
         
            <Nationality data={nation} />
           
         </div>

       </div>
      
        
       
    )
}


export default MainPage