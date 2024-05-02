const express = require('express');
const router = express.Router();

const menuItems = require('./../models/Menuitems')

// to post menu items
router.post('/', async(req,res)=>{
 
    try{

        const data = req.body

        const Menuitem = new menuItems(data);

        const newMenu = await Menuitem.save();
        console.log('saved data');
        res.status(200).json(newMenu);

    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error:'internal server error'});
    }
})
// to get menu items
router.get('/', async(req,res)=>{

    try{
        const data  = await menuItems.find();
        console.log('Data fethced successfully');
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
module.exports = router;