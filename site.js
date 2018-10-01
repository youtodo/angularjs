var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var moment = require('moment');
moment().format();
moment.locale('ru');

var app = express();

//указываем директории со статичными файлами (чтобы можно было обращаться к ним, не казывая путь, а просто по имени)
app.use(express.static(path.join(__dirname, 'docs')));


app.use(bodyParser.json());                         // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//стартуем сервер
app.listen(3000, function () {
    console.log('Что-то слушает порт 3000!');
});

//главная страница
app.use(function (req, res, next) {
    if (req.url == '/') {
        res.sendFile(__dirname + '/docs/index.html');
    } else {
        next();
    }
});

//заглушка, теперь все левые запросы будут переадресовываться на гравную страницу
app.use(function (req, res) {
    res.sendFile(__dirname + '/docs/index.html');
});





// function removeAllData(model) {
//     model.find({}).remove().exec();
// }

// function printAllData(model) {
//     model.find(function (err, data) {
//         if (err) return console.error(err);
//         for (var i in data) {
//             data[i].print();
//         }
//     });
// }

// function fillModel(model,data) {
//     removeAllData(model);
//     for (var i in data) {
//         new model(data[i]).save(
//             function(err) {
//                 if (err) return console.error(err);
//             }
//         )
//     }
// }


// app.get('/get_all_pdk', function (req, res) {
//     Pdk.find({},function(err,docs) {
//         res.send(docs);
//     })
// });

// app.post('/add_pdk', function (req, res) {
//     new Pdk(req.body).save(
//         function(err) {
//             if (err) return console.error(err);
//         }
//     );
//     res.sendStatus(200);
// });

// app.put('/edit_pdk', function (req, res) {
//     Pdk.findOne({_id:req.body._id},function(err,doc) {
//         doc.gas = req.body.gas;
//         doc.hazardClass = req.body.hazardClass;
//         doc.pdkMaxSingle = req.body.pdkMaxSingle;
//         doc.pdkAvDaily = req.body.pdkAvDaily;
//         doc.save(
//             function(err) {
//                 if (err) return console.error(err);
//                 res.sendStatus(200);
//             }
//         )
//     });
// });


// app.post('/del_pdk', function (req, res) {
//     Pdk.find({_id:req.body._id}).remove(() => {
//         res.sendStatus(200);
//     })
// });

// app.get('/get_all_metering', function (req, res) {
//     Metering.find({}).sort('date').sort('time').exec(function (err, docs) {
//         res.send(docs);
//     })
// });

// app.get('/get_meter/:id', function (req, res) {
//     Metering.findOne({_id:req.params.id},function(err,doc) {
//         updateMeter(doc, function (doc) {
//             res.send(doc);
//         })
//     })
// });

// app.post('/add_metering', function (req, res) {
//     var initGasValues = [];
//     Pdk.find({},function(err,pdks) {
//         for (var i in pdks) {
//             initGasValues.push({
//                 gas:pdks[i].gas,
//                 val:0
//             });
//         }
//         new Metering({
//             date        : req.body.date,
//             time        : new Date(new moment()),
//             employee    : req.body.employee,
//             values      : initGasValues
//         }).save(
//             function(err,item) {
//                 if (err) return console.error(err);
//                 item.print();
//                 res.sendStatus(200);
//             }
//         );
//     });

//     // new Metering({
//     //     date        : new Date(new moment(req.body.date,'DD.MM.YYYY')),
//     //     employee    : req.body.employee
//     // }).save(
//     //     function(err,item) {
//     //         if (err) return console.error(err);
//     //         item.print();
//     //     }
//     // );
//     // res.sendStatus(200);
// });

// app.post('/add_metering_item', function (req, res) {
//     Metering.findOne({_id:req.body.id},function(err,doc) {
//         doc.values.push({
//             gas:req.body.gas,
//             val:req.body.val
//         });
//         doc.save(
//             function(err) {
//                 if (err) return console.error(err);
//                 res.sendStatus(200);
//             }
//         )
//     })
// });

// app.put('/edit_metering_item_value', function (req, res) {
//     Metering.findOne({_id:req.body.id},function(err,doc) {
//         doc.values.set(req.body.index,{
//             gas     : req.body.item.gas,
//             val     : req.body.item.val,
//             changed : true
//         });
//         doc.save(
//             function(err) {
//                 if (err) {
//                     res.sendStatus(400);
//                     return console.error(err);
//                 }
//                 doc.print();
//                 res.sendStatus(200);
//             }
//         )
//     })
// });

// app.post('/delete_metering_item_value', function (req, res) {
//     Metering.findOne({_id:req.body.id},function(err,doc) {
//         doc.values.splice(req.body.index,1);
//         doc.save(
//             function(err) {
//                 if (err) {
//                     res.sendStatus(400);
//                     return console.error(err);
//                 }
//                 doc.print();
//                 res.sendStatus(200);
//             }
//         )
//     })
// });

// //если поступает запрос на запрещенный для юзера адрес
// app.use(function (req, res, next) {
//     if (req.url == '/forbidden') {
//         res.sendStatus(401); // извини, досвидания
//     } else {
//         next();
//     }
// });



// // Перечисление зависимостей:
// var path = require('path');
// var express = require('express');
// var app = express();

// // Описание настроек:
// var siteOptions = {
//    port: 3000
// };

// // Запуск сайта:
// console.log("Запущен тут: http://localhost:"+siteOptions.port);

// app.use(function(req, res) {
// 	res.send('./www/index.html');
// })

// app.use(express.static(
//    path.join(__dirname, 'www'),
//    siteOptions
// )).listen(siteOptions.port);
