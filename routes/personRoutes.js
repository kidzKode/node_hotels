const express = require('express');
const router = express.Router();

const Person = require('./../models/person')

//post method ----------------------------------------------------------------------------------------
router.post('/', async(req,res)=>{
    try{
        const data = req.body

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})      
    }
})

router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched successfully')
        res.status(200).json(data);

    }catch(err){
          console.log(err);
          res.status(500).json({error:'Internal server Error'});
    }
})

//get method ----------------------------------------------------------------------------------------
router.get('/:workType', async(req,res)=>{

    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType =='manager' || workType=='waiter')
        {
          const response = await Person.find({work:workType});
          console.log('response fetched')
          res.status(200).json(response);
        }
    }
        catch(err)
        { console.log(err)
        res.status(500).json({error:'internal server error'});
            }
        
})

//update method------------------------------------------------------------------------------------------
router.put('/:id', async (req,res)=>{

    try{
        const personId = req.params.id;
        const updatedPerson = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPerson,{
            new: true, //return updated documents
            runValidators: true // run and check the manoose validation which developer gave
        })
        console.log("data updated");
       res.status(200).json(response) 

        if(!response)
        {
            return res.status(404).json({error:'Person not found'})
        }

    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:'Internal server problem'})
    }
}) 

//delete method -----------------==-=---------------------=========--------------------------------------------
router.delete('/:id', async (req,res)=>{

    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if(!response)
        {
            return res.status(404).json({error:'Person not found'})
        }

        console.log('document has been deleted successfully')
        res.status(200).json({message: 'document has been deleted successfully'})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server problem'})
    }
})
module.exports = router; 