// function createUserRoutes(app){

// const express = require("express");

const { Router } = require("express");

const userRouter = Router();


app.post("/user/signup", function(req, res){

    res.json({
        messages: "signup endpoint"
    })
})

app.post("user/signin", function(req, res){

    res.json({

        messages: "signup endpoint"
    })
})

app.get("/user/purchases", function(req, res){
          res.json({
            message: "signup endpoint"
          })
})
}

module.exports = {
    createUserRoutes: createUserRoutes
}