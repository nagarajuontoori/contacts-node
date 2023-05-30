const express = require("express");
const dotenv = require("dotenv").config();

const app =express()
const configureDb = require("./database");
const  mongoose  = require("mongoose");
const cors = require('cors');
const Contact = require("./app/model/contacts_model")

configureDb();
app.use(cors());
const port  = process.env.PORT || 5000
app.use(express.json())

//  app.get("/contact",(req,res) => {
//     res.send("gett all contacts")
// })

app.get("/contact" , async (req,res) =>{
    try{
     const contacts = await Contact.find({})
     res.status(200).json(contacts)
    } catch(err){
     res.status(500).json({message:err.message})
    }
 })

 app.put("/contact/:id", async (req, res) => {
    const { id } = req.params;
    const updateContact = await Contact.findByIdAndUpdate(id, req.body);
  
    if (!updateContact) {
      res.status(404).json({ message: "Contact not found" });
    }
  
    res.status(200).json(updateContact);
  });

app.delete("/contact/:id", async (req,res) => {
const {id} = req.params;
const deleteContact = await Contact.findByIdAndDelete(id)
if(!deleteContact){
    res.status(404).json({message:"not able to delete"})
}
res.status(200).json(deleteContact)
})  

app.post("/contact" , async (req,res) =>{
   try{
    const contact = await Contact.create(req.body)
    res.status(200).json(contact)
   } catch(err){
    res.status(500).json({message:err.message})
   }
})


app.listen(port,() =>{
    console.log(`server is running in ${port} `)
})