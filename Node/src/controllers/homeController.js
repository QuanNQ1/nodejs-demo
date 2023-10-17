
const getHomePage = (req, res) => {
    // process data
    // call model
    res.send('Hello world vs Quan')
}

const getABC = (req, res) => {
    res.send("This is a ABC page")
}

module.exports = {
    getHomePage,
    getABC
}