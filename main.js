function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num; 
}
function clean () {
    document.form.textview.value = "";
}
function erase () {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function count () {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}
