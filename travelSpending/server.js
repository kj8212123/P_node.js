const express = require('express');
const path = require('path');
const axios = require('axios');
// const Rolldate = require('rolldate');
// 
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
//將pug設為模板引擎
app.set('view engine', 'pug');

var travel = {
    id:1,
    countryName: 'Philippine',
    budget:    
    [
        {
            budgetSign:"¥",
            budgetName:"JPY",
            budgetTotal:100000,
            type:'cash',
            remain:98000,
            spend:2000
        },
        {
            budgetSign:"$",
            budgetName:"TWD",
            budgetTotal:10000,
            type:'cash',
            spend:1234,
            remain:8766,
        }
    ]
}

var budgetDetail = {
        budgetSign:"¥",
        budgetName:"JPY",
        budgetTotal:100000,
        type:'cash',
        budgetExchange:0.21,
        remain:98000,
        spend:2000,
        detail:[
            {
                date:'2023/5/1',
                amount:80000
            },
            {
                date:'2023/5/6',
                amount:20000
            }

        ]
}

var futureTravels = 
    [              
        {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10',spend:'TWD $ 10,000'},
        {id:2, countryName:'Japan', date:'2023/8/5 - 2023/8/9',spend:'TWD $ 45,000'}
        // {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10'}
    ] ;

var pastTravels = 
    [              
        {id:1, countryName:'South-Korea', date:'2017/9/20 - 2017/10/8',spend:'TWD $ 20,000'},
        {id:2, countryName:'United State', date:'2017/6/27 - 2017/9/18',spend:'TWD $ 20,000'}
        // {id:1, countryName:'Philippines', date:'2023/7/7 - 2023/7/10'}
    ] ;

var countries = 
    [
        {name:'South-Korea',value:'south-korea'},
        {name:'Japan',value:'japan'},
        {name:'UK',value:'united-kingdom'},
        {name:'United State',value:'united-states'},
        {name:'China',value:'china'},
        {name:'Singapore',value:'singapore'},
        {name:'Hong Kong',value:'hong-kong'},
        {name:'Thailand',value:'thailand'}
    ]
// var rd = new Rolldate({
//         el: '.end-date',
//         format: 'YYYY-MM-DD',
//         beginYear: 2000,
//         endYear: 2100,
//         minStep:1,
//         lang:{title:'自定义标题'},
//         trigger:'tap',
//         init: function() {
//           console.log('插件开始触发');
//         },
//         moveEnd: function(scroll) {
//           console.log('滚动结束');
//         },
//         confirm: function(date) {
//           console.log('确定按钮触发');
//         },
//         cancel: function() {
//           console.log('插件运行取消');
//         }
//     })
//     rd.show();
//     rd.hide();
        

app.get('/', (req, res) => {
    // console.log(futureTravels);
    res.render('home', {
        futureTravels,
        pastTravels
        
    });
  });

app.get('/add', (req,res) => {
    res.render('add', {
        countries
    });
})

app.post('/addConfirm',(req,res) => {
    console.log(req);
    res.render('profile', {
    });
})

app.get('/profile', (req,res) => {
    res.render('profile',{travel}
    );
})

app.get('/budget', (req,res) => {
    res.render('budget',{travel,budgetDetail}
    );
})

app.get('/expenses', (req,res) => {
    res.render('expenses',{travel}
    );
})

app.get('/report', (req, res) =>{
    res.render('report',{travel}
    );
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Hacker news server started on port: ${server.address().port}`);
  });