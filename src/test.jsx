function Test () {

    // do a loop where you create a block red all the 2 seconds
    
    function setRed(){
        let div = document.createElement('div')
        div.style.width = '100px'
        div.style.height = '100px'
        div.style.backgroundColor = 'red'
        document.body.appendChild(div)
    }

    setInterval(setRed, 2000)

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
    


};

export default Test;