function printtime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    document.write(hours + ":" + minutes + ":" + seconds + ":" + milliseconds)
}

setInterval("printtime", 1000);
