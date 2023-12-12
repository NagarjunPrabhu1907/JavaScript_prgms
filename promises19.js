const recordVideoOne = new Promise ((resolve ,reject) =>{
    resolve ('video1 recorded')
})
const recordVideoTwo = new Promise ((resolve ,reject) =>{
    resolve ('video2 recorded')
})
const recordVideoThree = new Promise ((resolve ,reject) =>{
    resolve ('video3 recorded')
})

Promise.all(
    [
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree
    ]).then((messages)=>{
        console.log(messages)
    })