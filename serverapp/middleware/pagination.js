function paginatedResults(model){
    return (req,res,next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page-1)*limit;
        const endIndex = page * limit;

        const results = {}

        if (startIndex > 0){
            results.prev = {
                page: page-1,
                limit: limit,
            }
        }

        if(endIndex < 10000){
            results.next = {
                page: page+1,
                limit: limit,
            }
        }

        results.data = model.find({}).limit(limit).skip(startIndex).exec()
        res.paginatedResults = results;

        next()
    }
}

module.exports =paginatedResults