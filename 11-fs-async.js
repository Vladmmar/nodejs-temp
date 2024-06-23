const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return null
    }
    const first = result;
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return null
        }
        const second = result;
        console.log(second)
        writeFile('./content/result-async.txt',
            `Here is the result: ${first + " " + second}`,  
            {flag: "a"},
            (err, result) => {
                if(err){
                    console.log(err)
                    return null
                }
                console.log('done')
            })
    })
})

console.log('starting next')