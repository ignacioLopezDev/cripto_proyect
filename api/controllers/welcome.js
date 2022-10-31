

const welcome = (req, res, next) => {
    res.status(404).send("Pagina Principal")
}

module.exports = {welcome}