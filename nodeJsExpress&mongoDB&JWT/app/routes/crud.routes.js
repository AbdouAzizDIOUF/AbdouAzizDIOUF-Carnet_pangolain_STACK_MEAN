const express = require('express');
const app = express();
const pangolainRoute = express.Router();

let pangolain = require('../../app/models/user.model');

// Add pangolain
pangolainRoute.route('/create').post((req, res, next) => {
    pangolain.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All pangolain
pangolainRoute.route('/').get((req, res) => {
    pangolain.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single pangolain
pangolainRoute.route('/read/:id').get((req, res) => {
    pangolain.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update pangolain
pangolainRoute.route('/update/:id').put((req, res, next) => {
    pangolain.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },(error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data) //console.log('Data updated successfully')
        }
    })
})

// Delete pangolain
pangolainRoute.route('/delete/:id').delete((req, res, next) => {
    pangolain.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = pangolainRoute;
