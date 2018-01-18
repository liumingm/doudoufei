var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addGoods', function(req, res, next) {
  res.render('addGoods', { title: '添加商品' });
});
router.get('/listGoods', function(req, res, next) {
  res.render('listGoods', { title: '商品列表' });
});





router.get('/login', function(req, res, next) {
  res.render('login', { title: '管理中心' });
});
router.all('/loginAjax', function(req, res, next) {
  var userName=req.body.userName;
  var psw=req.body.psw
  var result={
    code:1,
    message:'登陆成功'
   }
   if(userName=="admin"&&psw=="f5f5f5f5"){
      req.session.userName=userName;
      res.json(result);
   }else{
    result.code=404;
    result.message="用户名或者密码错误"
    res.json(result)
   }
  // UserModel.find({userName:admin,psw:f5f5f5f5},(err,dosc)=>{
  //       if(dosc.length>0){
  //       req.session.userName=userName;
  //         res.json(result);
  //         return;
  //       }
  //       result.code=404;
  //       result.message="用户名或者密码错误"
  //       res.json(result)
  // });
})
router.get('/list', function(req, res, next) {
  if(req.session==null||req.session.userName==null){
    console.log("kong")
      res.redirect('/login')
      return;
  }
    res.render('list',{title:"列表页面"})
});

module.exports = router;
