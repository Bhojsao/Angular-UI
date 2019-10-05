const PROXY_CONFIG=[{
    context :[
        "/SpringBootFlyway"
    ],
    target : "http://localhost:9090",
    secure : false
}]

module.exports = PROXY_CONFIG;