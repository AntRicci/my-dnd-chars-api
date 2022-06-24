const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = 8000

let classes = {
    'barbarian': {
        'race': 'Stout-Hafling',
        'name': 'Arelis Devine',
        'role': 'Main Tank',
        'gimic': 'Character is a talking helf head'
    },
    'wizard': {
        'race': 'Goblin',
        'name': 'Wiz',
        'role': 'DPS',
        'gimic': 'Thinks acrobatics increase spell powers'
    },
    'cleric': {
        'race': 'Human',
        'name': 'Sogmir',
        'role': 'Off Heals',
        'gimic': 'A snobbish religous finatic for himself'
    },
    'druid': {
        'race': 'Mechanical',
        'name': 'Pu11uti0n',
        'role': 'DPS',
        'gimic': 'Does everything to destroy the environment'
    }
}


app.get('/', (req, res) => {
    req.sendFile(__dirname + '/index.html')
})

app.get('/api/classes/:classType', (req, res) => {
    const charClass = req.params.classType.toLowerCase()
    console.log(charClass)
    if (classes[charClass]){
        res.json(classes[charClass])
    }else{
        console.log('That class has not been made yet')
    }
    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})