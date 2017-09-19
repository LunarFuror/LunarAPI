/**
 * Created by grayson on 9/12/17.
 */
var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');
var app = require('../app')

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        Hero.getHeroById(req.params.id).then(function(results, err){
            console.log(results);
            if(err) {
                res.json(err);
            } else {
                res.json(results);
            }
        });
    }
    else{
        Hero.getAllHeroes().then(function(results, err){
            console.log(results);
            if(err) {
                res.json(err);
            } else {
                res.json(results);
            }
        });
    }
});
router.post('/',function(req,res,next){
    Hero.addHero(req.body).then(function(results, err){
        console.log(results);
        if(err) {
            res.json(err);
        } else {
            res.json(results);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.put('/:id',function(req,res,next){
    Hero.updateHero(req.params.id,req.body).then(function(results, err){
        console.log(results);
        if(err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});
router.delete('/:id',function(req,res,next){
    Hero.deleteHero(req.params.id).then(function(results, err){
        console.log(results);
        if(err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});
module.exports=router;