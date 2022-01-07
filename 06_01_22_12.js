function run(){
    let a = parseInt(document.getElementById("x").value);
    let b = parseInt(document.getElementById("y").value);
    let c = parseInt(document.getElementById("z").value);
    let f

    for(f=1; f<=b; f++){
        a = a + (a*c/100);
    }

    document.getElementById("result").innerText="Số tiền nhận được sau " + b + " tháng là " + a;
}