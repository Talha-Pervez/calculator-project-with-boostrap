function insert(num) {
    this.form1.textview.value = this.form1.textview.value + num;
}

function equal() {
    var exp = this.form1.textview.value;
    if (exp) {
        this.form1.textview.value = eval(exp)
    }
}

function backspace() {
    var exp = this.form1.textview.value;
    this.form1.textview.value = exp.substring(0, exp.length - 1);
}