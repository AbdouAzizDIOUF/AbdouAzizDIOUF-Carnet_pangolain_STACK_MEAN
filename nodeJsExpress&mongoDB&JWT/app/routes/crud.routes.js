const express = require('express');
const app = express();
const pangolainRoute = express.Router();

let pangolain = require('../../app/models/user.model');
const User = require("../models/user.model");
const Role = require("../models/role.model");


var bcrypt = require("bcryptjs");
// Add pangolain
pangolainRoute.route('/create').post((async(req, res, next) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age,
            famille: req.body.famille,
            race: req.body.race,
            nourriture : req.body.nourriture,
            amie: req.body.amie,
            password: bcrypt.hashSync(req.body.password, 8)
        });
    try{
        console.log(user);
        //user.amie = null;
        //console.log(user.amie);
        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (req.body.roles) {
                Role.find(
                    {
                        name: { $in: req.body.roles }
                    },
                    (err, roles) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        user.roles = roles.map(role => role._id);
                        user.save(err => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }

                            res.send({ message: "Ajout reussie !!!!!!!!!" });
                        });
                    }
                );
            } else {
                Role.findOne({ name: "admin" }, (err, role) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    user.roles = [role._id];
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({ message: "Ajout ressie reussie !!!!!!!!" });
                    });
                });
            }
        });
    }catch(e){
        console.log(e);
    }

    /*pangolain.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })*/
}));

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

// Get pangolain amie
pangolainRoute.route('/amie/:amie').get((req, res) => {
    pangolain.find({amie:req.params.amie}, (error, data) => {
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
