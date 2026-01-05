const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const Users = require('./Models/UsersInfo');
const reminders = require('./Models/reminders');
const album = require('./Models/memoryAlbum');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_NAME)
    .then(res => console.log('Connected Successfully!'))
    .catch(err => console.error(err))


app.post('/signUp', async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        const existsUser = await Users.findOne({ email });

        if (existsUser)
            return res.status(409).json({ message: 'Email Already Registered!' })


        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = await Users.create({ fullname, email, password: hashedPassword, role });

        if (!newUser)
            return res.status(401).json({ message: 'User Not Registered, try again!' });
        return res.status(201).json({ message: 'User registered successfully!' });

    }

    catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
)

app.post('/signIn', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password, role } = req.body;

        const foundUser = await Users.findOne({ email, role });
        const isMatch = await bcrypt.compare(password, foundUser.password);

        if (!isMatch)
            res.status(400).json({ message: 'Invalid Credentials!' });

        const token = jwt.sign({ userId: foundUser._id }, process.env.JWT_SECRETE, { expiresIn: '1h' });

        res.cookie('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 3600000
        })
        res.status(200).json({ token, message: 'User Login Successfull!' });
    }
    catch (e) {
        console.error(e);
    }


})


app.post('/setReminder', async (req, res) => {
    const { time, reminder } = req.body;
    try {
        const newReminder = await reminders.create({ time, reminder });

        if (newReminder)
            return res.status(201).json({ message: 'Reminder Set Successfully!' });

        res.status(400).json({ message: 'Reminder Not Set Successfully!' });
    }
    catch (e) {

        console.error(e);
    }





});


const uploads = path.join(__dirname, 'uploads');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

app.post('/setAlbum', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const description = req.body.description;
        const imageName = req.file.filename;
        console.log(imageName);
        const newAlbum = await album.create({imageName, description });
        res.status(201).json({ message: 'album set successfully!' });
    }
    catch (e) {
        console.error(e);
    }


});



app.get('/viewReminders', async (req, res) => {
    const foundReminders = await reminders.find();

    res.status(200).json(foundReminders);


});

app.delete('/deleteReminder/:id', async (req, res) => {
    const reminderId = req.params.id;
    const deleteReminder = await reminders.findByIdAndDelete(reminderId);

    if (!deleteReminder)
        return res.status(400).json({ message: 'Delete Unsuccessful!' });
    res.status(200);

})
try{
app.use('/viewAlbum', express.static(path.join(__dirname, 'public')));
app.get('/viewAlbum', async (req, res) => {
    const foundDescription = await album.find();

    if (!foundDescription || foundDescription.length == 0)
        return res.status(404).json({ message: 'No Photo Found!' });



    res.status(200).json(foundDescription );


});}
catch(e){
    console.error(e)
}

app.delete('/deleteAlbum/:id', async (req,res)=>{
    const deleteAlbum = await album.findByIdAndDelete(req.params.id);
    res.status(200); 
})

app.get('/weather', async (req,res)=>{
    const city = req.query.city;

    const response = await axios.get('http://open')

})

app.listen(process.env.PORT, () => {
    console.log('server running on port 3000...');
});