import express from "express";
import bodyParser from "body-parser";
import jQuery from "jquery";

const app = express();
const port = 3000 ;

app.use(bodyParser.urlencoded({ extended: true }));

const todayList = [];
const weekList = [];


app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/" , (req, res) => {
res.render("index",
 { todayListEJS : todayList

});
})

app.post("/", (req,res) => {
    console.log(req.body.newItem);
    todayList.push(req.body.newItem);
    console.log(todayList);
    res.render("index",
 { todayListEJS : todayList

});
});

app.get("/week", (req,res) => {
    res.render("week", {
        weekListEJS : weekList
    });
})

app.post("/week" , (req,res) => {
    weekList.push(req.body.newItem);
    console.log(weekList);
    res.render("week", {weekListEJS : weekList})
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);

})