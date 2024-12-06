function createCourseRoutes(app) {





app.post("/course/purchase", function(req,res){
    // expect to user pay you money
        req.json({
            message:"signup endpoint"
        })
    })
    
    app.get("/course/preview", function(req, res){
    
        res.json({
            message: "signup endpoint"
        })
    })
}   

module.exports = {

    createCourseRoutes: createCourseRoutes
}