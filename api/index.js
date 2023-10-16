const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
    const {username, password} = req.body;
    res.json({requestData:{username,password}});
});

app.listen(5000);
// mongodb+srv://blog:<password>@cluster0.uexyten.mongodb.net/?retryWrites=true&w=majority
// pass blog123