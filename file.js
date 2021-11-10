function myFunc2() {
    document.getElementById("demo06").innerHTML="para changed.";
}

function myFunc4() {
    let x,y,z;
    x=5;
    y=6;
    z=x+y;
    document.getElementById("demo08").innerHTML="The value of z is "+z+".";
}

function displayTime() {
    document.getElementById("demo_1").innerHTML=Date();
}

function length() {
    let txt="Alphonsolesri";
    document.getElementById("demo").innerHTML=txt.length;
}


function myfunc() {
    hobbies.push("chatting");
    document.getElementById("demo9").innerHTML=hobbies;
}

function myfunc1() {
    hobbies[hobbies.length]="chatting"
    document.getElementById("demo10").innerHTML=hobbies;
}

//array_methods.html
// const fruits4=["Banana","Orange","Apple","Mango"];
function arr_func() {
    fruits4[fruits4.length]="jackfruit";
    document.getElementById("demo10_arr").innerHTML=fruits4;
}    

function splice() {
    fruits6.splice(2,0,"Kiwi","lemon");
    document.getElementById("demo13").innerHTML=fruits6;
}

function splice1() {
    fruits7.splice(2,2,"Kiwi","Lemon");
    document.getElementById("demo14").innerHTML=fruits7;
}

function rem_spl() {
    fruits8.splice(0,1);
    document.getElementById("demo15").innerHTML=fruits8;
}

function sort_alpha() {
    points.sort();
    document.getElementById("demo5_sortarr").innerHTML=points;
}

function sort_num() {
    points.sort(function(a,b){return a-b});
    document.getElementById("demo5_sortarr").innerHTML=points;
}

function fisher_yate() {
    for(let i=points.length-1;i>0;i--) {
        let j=Math.floor(Math.random()*i)
        let k=points[i]
        points[i]=points[j]
        points[j]=k
    }
    document.getElementById("demo8_sortarr").innerHTML=points;
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function array_max(arr) {
    let len01=arr.length;
    let max01= -Infinity;
    while(len01--) {
        if(arr[len01]>max01) {
            max01=arr[len01];
        }
    }
    return max01;
}

function array_min(arr) {
    let len01=arr.length;
    let min01 = Infinity;
    while(len01--) {
        if(arr[len01] < min01) {
            min01 = arr[len01];
        }
    }
    return min01;
}

function sort_object() {
    cars.sort(function(a,b) {
        return a.year-b.year
    });
    displayCars();
}

function displayCars() {
    document.getElementById("demo20_sortarr").innerHTML=
    cars[0].type+" "+cars[0].year+"<br>"+
    cars[1].type+" "+cars[1].year+"<br>"+
    cars[2].type+" "+cars[2].year;
}

function sorting() {
    cars.sort(function(a,b) {
        let x=a.type.toLowerCase();
        let y=b.type.toLowerCase();
        if (x<y) {return -1;}
        if (x>y) {return 1;}
        return 0;
    });
    displayCars_1();
}

function displayCars_1() {
    document.getElementById("demo21_sortarr").innerHTML=
    cars[0].type+" "+cars[0].year+"<br>"+
    cars[1].type+" "+cars[1].year+"<br>"+
    cars[2].type+" "+cars[2].year;
}

//array_iter.html
function for_each(value) {
    txt += value + "<br>";
}

function Map(value) {
    return value*2;
}

function Filter(value) {
    return value>18;
}

function ReDuce(total,value) {
    return total+value;
}

