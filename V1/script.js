
    const kmField = document.getElementById('km'),

    mField = document.getElementById('m'),

    ydField = document.getElementById('yd'),

    ftField = document.getElementById('ft'),

    dmField = document.getElementById('dm'),

    inField = document.getElementById('in'),

    cmField = document.getElementById('cm'),

    mmField = document.getElementById('mm');

function print() {

    mmField.value = mm;

    cmField.value =cm;

    inField.value =inc;

    ftField.value =ft;

    dmField.value =dm;

    ydField.value =yd;

    mField.value =m;

    kmField.value = km;

}

    

    mField.addEventListener("change",function () {

        m=+this.value;

        mm = m * 1000;

        cm = m * 100;

        km = m / 1000;

        dm = m * 10;

        inc=m* 39.37007874016;

        ft = m * 3.2808398951;

        yd = m * 1.09361329834;

        print()

})

mmField.addEventListener("change",function () {

        mm = +this.value;

        m = mm / 1000;

        cm = m * 100;

        km = m / 1000;

        dm = m * 10;

        inc=m* 39.37007874016;

        ft = m * 3.2808398951;

        yd = m * 1.09361329834;

        print();

})

kmField.addEventListener("change",function () {

        km=+this.value;

        m = km * 1000;

        mm = m * 1000;

        cm = m * 100;

        dm = m * 10;

        inc=m* 39.37007874016;

        ft = m * 3.2808398951;

        yd = m * 1.09361329834;

        print();

})

inField.addEventListener("change",function () {

    inc = +this.value;

    m = inc / 39.37007874016;

        cm = m * 100;

        km = m / 1000;

        mm=m*1000;

        dm = m * 10;

        ft = m * 3.2808398951;

        yd = m * 1.09361329834;

    print();

})

dmField.addEventListener("change",function () {

    dm = +this.value;

    m = dm / 10;

    inc=m* 39.37007874016;

        cm = m * 100;

        km = m / 1000;

        mm=m*1000;

        ft = m * 3.2808398951;

        yd = m * 1.09361329834;

    print();

})

ftField.addEventListener("change",function () {

    ft = +this.value;

    m = ft/ 3.2808398951;

    dm = m * 10;

    inc=m* 39.37007874016;

        cm = m * 100;

        km = m / 1000;

        mm=m*1000;

        yd = m * 1.09361329834;

    print();

})

cmField.addEventListener("change",function () {

    cm = +this.value;

    m = cm / 100;

    ft = m* 3.2808398951;

    dm = m * 10;

    inc=m* 39.37007874016;

        km = m / 1000;

        mm=m*1000;

        yd = m * 1.09361329834;

    print();

})

ydField.addEventListener("change",function () {

    yd = +this.value;

    m = yd / 1.09361329834;

    cm = m * 100;

    ft = m* 3.2808398951;

    dm = m * 10;

    inc=m* 39.37007874016;

        km = m / 1000;

        mm=m*1000;

    print();

})

setInterval(() => {

    if (mField.value==="NaN") {

    mmField.value = 0;

    cmField.value =0;

    inField.value =0;

    ftField.value =0;

    dmField.value =0;

    ydField.value =0;

    mField.value =0;

    kmField.value = 0;

}

}, 0);
