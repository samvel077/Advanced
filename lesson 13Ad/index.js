function foo() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            if (data.ok) {
                return data.json()
            }
            else {
                throw new Error('aaaa')
            }
        })
        .then(data => console.log(data))
        .catch(data => console.log(data, 'nnn'))
}


// async function foo(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let result = await data.json()
//     console.log(result)
// }
