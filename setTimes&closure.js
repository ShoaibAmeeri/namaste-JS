function d(){

    for (var i = 0; i <=5; i++) {
        setTimeout( function() {
            console.log(i)
        },i*1000);
        

    }

    console.log("namaste JS")
}
d()
// output
// 6
// 6
// 6
// 6
// 6
// 6

function e(){

    for (var i = 0; i <=5; i++) {
     
        function x(i) {
            setTimeout( function() {
                console.log(i)
            },i*1000);
            
        }
        x(i)

    }

    console.log("namaste JS")
}
e()

// output
// 0
// 1
// 2
// 3
// 4
// 5

function f(){

    for (let i = 0; i <=5; i++) {
        setTimeout( function() {
            console.log(i)
        },i*1000);
        

    }

    console.log("namaste JS")
}
f()
// output
// 0
// 1
// 2
// 3
// 4
// 5
