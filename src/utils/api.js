function cousrseAPI(){
    if(process.env.NODE_ENV == 'development'){
        return "/v1/course"
    }else{
        return `${process.env.NODE_ENV}`
    }
}