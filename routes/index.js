const express = require('express')
const router = express.Router()
let user = null

const profiles = [
  {name: 'Joe', city:'Brooklyn',profession:'Doctor'},
  {name: 'Mike', city:'Brooklyn', profession: 'Software Developer'},
  {name: 'Bill', city:'Denver',profession:'Programmer'}

]


router.get('/', (req, res, next) => {

  const data = {
    name: "Getting to know you",
    date: req.timestamp,
    profiles: profiles,
    user: user
  }

res.render('index', data)
})

router.get('/login', (req, res, next) => {
res.render('login', null)
})
router.post('/login', (req, res, next) => {
const username = req.body.username
const password = req.body.password

if(password === '123'){
  user = {username: username}
  res.redirect('/')
  return
}
const data = {
  message:'Please check your password or username'
}
res.render('error', data)

})

router.post('/join', (req, res, next) => {

const body = req.body
profiles.push(body)

res.redirect('/')
})

router.get('/json', (req, res, next) => {

  const data = {name: 'David', location: 'Sydney', date:req.timestamp}
  res.json(data)
})


router.get('/html', (req, res, next) => {
  const html = '<html><h1 style="color:red">This is an HTML response</h1></html>'
  res.send(html)
})

router.get('/query', (req, res, next) => {
  const query = req.query
  res.json(query)
})

router.get('/params/:name/:location/:occupation', (req, res, next) => {
  const params = req.params
  res.json({
    params: params
  })
})

module.exports = router
