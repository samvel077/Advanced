let equal1 = document.querySelector('.equal')

function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

function clean() {
    document.form.textview.value = ''
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1)
}

function equal() {
    let exp = document.form.textview.value;
    if (exp.substring(0, 1) === '0') {
        document.form.textview.value = exp.substring(1) 
    }
    else if (exp) {
        document.form.textview.value = eval(exp)
    }

    // for (let i = 0; i < exp.length; i++) {
    //     if (exp[i] !== '0') {
    //         if (exp) {
    //             document.form.textview.value = eval(exp)
    //         }
    //         return true
    //     }
    //     else if (exp[i] === '0') {
    //         document.form.textview.value = ''
    //         return false
    //     }
    //     return true
    // }

}
