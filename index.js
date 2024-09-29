const express  =  require('express')
const app =  express();
const PORT =  3000

app.get('/' , (req, res) => {
    res.send({"message" : "Jenkins Pipeline demo."});
})

app.listen(PORT , () => {
    console.log(`App is running on port http://localhost:${PORT}`);
})