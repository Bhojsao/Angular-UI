const PROXY_CONFIG=[{
    context :[
        "/SpringBootFlyway",
        "/SpringBootEnvers"
    ],
    target : "http://localhost:9090",
    secure : false,
    changeOrigin: true,
    cookieDomainRewrite :true,
    logLevel: debug
}]

module.exports = PROXY_CONFIG;