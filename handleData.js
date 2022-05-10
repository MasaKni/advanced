 let PreferredFootSample = {
    left: 0,
    Right: 0
}

let AgeSample = {
    AgeUnder20: 0,
    AgeBetween20and30: 0,
    AgeBetween30And40: 0,
    AgeAbove40: 0,
}

export const filterPlayerOnPreferredFoot = (players) => {
    const preferredFoot = players.reduce((acc, player) => {
        if (player.preferredFoot === 'Left') {
            PreferredFootSample.left++
        } else {
            PreferredFootSample.Right++
        }

        return PreferredFootSample
    }, {});
    let filteredData = [{
        name: 'Left', value: PreferredFootSample.left
    },
    {
        name: 'Right', value: PreferredFootSample.Right
    }]
    return filteredData
}


export const filterPlayerOnAge = (players) => {

    const agePlayer = players.reduce((acc, player) => {
        if (player.age < 20) {
            AgeSample.AgeUnder20++
        } else if (player.age >= 20 && player.age < 30) {
            AgeSample.AgeBetween20and30++
        } else if (player.age >= 30 && player.age < 40) {
            AgeSample.AgeBetween30And40++
        } else {
            AgeSample.AgeAbove40++
        }
        return AgeSample
    }, {});

    let filteredData = [{
        name: 'AgeUnder20', value: AgeSample.AgeUnder20
    },
    {
        name: 'AgeBetween20and30', value: AgeSample.AgeBetween20and30
    },
    {
        name: 'AgeBetween30And40', value: AgeSample.AgeBetween30And40
    }, {
        name: 'AgeAbove40', value: AgeSample.AgeAbove40
    }]
    return filteredData
}