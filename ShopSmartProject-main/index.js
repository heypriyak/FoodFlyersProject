require('dotenv').config();

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const Stripe = require ('stripe'); // Importing Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// console.log(stripe);

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://neha06012005:neha6125@cluster0.pdktpqx.mongodb.net/ECommerce");

// API creation
app.get("/", (req, res) => {
    res.send("Express App is running")
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:storage})

// Creating upload endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `https://shop-smart-fxg5.onrender.com/images/${req.file.filename}`
    })
})

// Schema for making products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for deleting product
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Creating API for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Schema creating for User model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// creating endpoint for registering the user
app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

// creating endpointfor user login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false, errors:"Wrong Email Id"})
    }
})

// Creating endpoint for newcollection data
app.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

// creating endpoint for popular in women section
app.get('/popularinwomen',async (req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
})

// creating middleware to fetch user
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }
        catch(error){
            res.status(401).send({errors:"please authenticate using a valid token"})
        }
    }
}

// creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async (req,res)=>{
    // console.log(req.body, req.user);
    console.log("Added",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cart});
    res.send("Added")
})

// creating endpoint for removing products from cartdata
app.post('/removefromcart',fetchUser,async (req,res)=>{
    // console.log(req.body, req.user);
    console.log("removed",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cart});
    res.send("Removed")
})

// creating endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})



app.post('/create-checkout-session', async (req, res) => {
    try {
        console.log(req.body); // Log incoming request data
        const products = await Product.find({ id: req.body.items[0].productId });
        console.log(products); // Log fetched products

        // Check if products are found
        if (!products || products.length === 0) {
            return res.status(404).json({ success: false, message: 'Products not found' });
        }

        const lineItems = products.map(product => ({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: product.name,
                },
                unit_amount: product.new_price * 100,
            },
            quantity: req.body.items[0].quantity,
        }));

        // Create a Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            // This is where you set the success and cancel URLs
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`, // Redirects here on successful payment
            cancel_url: `${process.env.CLIENT_SITE_URL}/checkout-cancel`,   // Redirects here if payment is canceled
            line_items: lineItems,
        });

        // Respond with the session URL for the frontend to redirect
        res.status(200).json({ success: true, url: session.url });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});