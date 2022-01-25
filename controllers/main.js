exports.getMainPage = (req,res,next) =>{
    if (req.url !== '/'){
        res.render('index')
    }
    res.render('index')
}

exports.getFormEmail = (req, res, next) =>{
    console.log(req.body)
    res.redirect('/')
}