const Points  = require('../models/Points')
module.exports = class PointsController {
    
    static showAll(req, res) {
        return res.render('user-points/points')
    }
    static async PointsSave(req, res){
        const points = {
            code: req.body.code
        }
        await Points.create(points)
        return res.redirect('/user/points')
    }
} 