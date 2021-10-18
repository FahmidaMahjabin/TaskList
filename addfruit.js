// 1.button e click korle input er value ta fruit hishebe listOfFruit e append hobe 
// 2.oi fruit ta html list e ekta id and icon shoho add korbo 
// 3.Id hobe oi fruit er index listOfFruit e

// 4.kono ekta icon e click korle oi icon er parent er Id tar fruit remove kore dibo html theke 
// 5.listOfFruit theke o oi Id tar fruit remove korbo 
// 6.remove korar por id reset korte hobe i.e html fruitList ta abar reload hobe 
    // 1.listOfFruit theke ekta kore fruit niye oi fruit er index k id hishebe niye html e fruit ta add korbe 
var listOfFruit = [];
$(document).ready(function(){
    $("#addTask").click(function(){
        var fruit = $("input").val();
        listOfFruit.push(fruit);
        console.log(listOfFruit);
        $("#showTheTasks").append(`<p id = ${listOfFruit.indexOf(fruit)}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
          <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        ${fruit}
      </p>`);
      

        // evaluation
        // $(`#${listOfFruit.indexOf(fruit)} > i` ).click(function(){
        //     console.log($(this).parent().attr('id'));
        //     var fruitId = $(this).parent().attr('id');
        //     listOfFruit.splice(fruitId, 1);
        //     $(`#${fruitId}`).remove();
        //     console.log(listOfFruit);
        //     console.log(`list of fruit after removal ${listOfFruit}`);
        //     var fruitListHtml = "";
        //     for(var index  = 0; index < listOfFruit.length; index++){
        //         console.log(index)
        //         console.log(listOfFruit[index])
        //         fruitListHtml += `<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`;
            
        //         // var newFruit = $("#fruitList").html(`<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`);
        //         // fruitListHtml += toString(newFruit) + "\n";
        //         console.log(fruitListHtml);
        //     };
            
        //     $("#fruitList").html(fruitListHtml);
            
            
        // })

    

    // function = remove fruit
    // 1.fruit remove korbo listOfFruit theke and browser theke ager Html replace korbo
    //     1.browser er jei icon e click korbo tar parent er Id ta ,listOfFruit theke oi index er item delete korbo 
    //     2.fruitList er HTML reload korbo 
    //         1.newFruitsHTML banabo listOfFruit theke ekta kore fruit er index k id niye 
    //         2.newFruitsHTML browser e show korbo 
    //         3.newFruitHTML er sathe remove function ta attach korbo 
    
        var fruitId = listOfFruit.indexOf(fruit);
        console.log(document.querySelector("p").attr);
        $(`#${listOfFruit.indexOf(fruit)} > svg`).click(removeFruit);
                   
});
// function = remove fruit from listOfFruit and browser 
// input = none 
// output = none
        // 1.remove a fruit from listOfFruit 
        //     1.jei fruit e click korbo tar id ta listOfFruit e tar index , so oi fruit ta delete korbo 
        // 2.browser e new listOfFruit show korbo 
        //     1.initialize newFruitHTML = ''
        //     2.listOfFruit theke ekta kore fruit niye tar new index k id hishebe set korbo and concate korbo 
        //     3.newFruitHTML diye browser e ager list replace korbo 
        //     4.newFruitHTML er sathe removeFruit er click function add korbo
function removeFruit(){
    var fruitId = $(this).parent().attr('id');
    console.log(fruitId)
    listOfFruit.splice(fruitId, 1);
    console.log(`listofFruit after removel ${listOfFruit}`);
    var newFruitsHTML = "";
    for(index in listOfFruit){
        newFruitsHTML += `<p>
        <svg id = ${index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
          <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        ${listOfFruit[index]}
      </p>`;

    }
    $("#showTheTasks").html(newFruitsHTML);
    $("svg").click(removeFruit)
        
    

}
// ["a","b","c"] remove "b"
// 1.var fruitId = listOfFruit.indexOf(fruit);
// 2.var fruitId = listOfFruit.indexOf('c');
// 3.var fruitId = "2";
// 4.console.log(fruitId)
// 5.console.log('2')
// 6.$(`#${listOfFruit.indexOf(fruit)} > i`).click(removeFruit)
// 7.$(`#${listOfFruit.indexOf("b")} > i`).click(removeFruit)
// 8.$(`#${1} > i`).click(removeFruit)
// 9.$("#1> i").click(removeFruit):
// 10.address1.click(removeFruit)
//     1.var fruitId = $(this).parent().attr('id');
//     2.var fruitId = $(address1).parent().attr('id');
//     3.var fruitId = $(address2).attr('id');
//     4.var fruitId = "1";
//     5.listOfFruit.splice(fruitId, 1);
//     6.listOfFruit.splice("1", 1);
//     7.listOfFruit = ["a", "c"];
//     8.console.log(`listofFruit after removel ${listOfFruit}`);
//     9.console.log(`listofFruit after removel  ["a", "c"]`);
//     10.var newFruitsHTML = "";
//     11.for(index in listOfFruit)
//     12.for(0 in ["a","c"]){
//         1. newFruitsHTML += `<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`
//         2. newFruitsHTML += `<li id = ${0}><i class="fas fa-times-circle"></i>${listOfFruit[0]}</li>`
//         3. newFruitsHTML =""+ `<li id = ${0}><i class="fas fa-times-circle"></i>"a"}</li>`
//         4.newFruitsHTML = `<li id = ${0}><i class="fas fa-times-circle"></i>"a"}</li>`
//     13.for(1 in ["a", "c"]){
//         1. newFruitsHTML += `<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`
//         2. newFruitsHTML += `<li id = ${1}><i class="fas fa-times-circle"></i>${listOfFruit[1}</li>`
//         3. newFruitsHTML =""+ `<li id = ${1}><i class="fas fa-times-circle"></i>"c"}</li>`
//         4.newFruitsHTML = `<li id = ${0}><i class="fas fa-times-circle"></i>"a"}</li>`
//         `<li id = ${1}><i class="fas fa-times-circle"></i>"c"}</li>`
//     }
//     14.$("#fruitList").html(newFruitsHTML)
//     15.address3.html(`<li id = ${0}><i class="fas fa-times-circle"></i>"a"}</li>`
//     `<li id = ${1}><i class="fas fa-times-circle"></i>"c"}</li>`)
//     }

// function removeFruit(){
//     var fruitId = $(this).parent().attr('id');
//     listOfFruit.splice(fruitId, 1);
//     console.log(`listofFruit after removel ${listOfFruit}`);
//     var newFruitsHTML = "";
//     for(index in listOfFruit){
//         newFruitsHTML += `<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`;

//     }
//     $("#fruitList").html(newFruitsHTML);
// }

    // ['a','b','c']
    // ['a','c']
    // ['c']
    // 1.$(`#${listOfFruit.indexOf(fruit)} > i` ).click(function()
    // 2.$(`#${listOfFruit.indexOf('b')} > i` ).click(function()
    // 3.$("#1"} > i` ).click(function(){
    //     1.console.log($(this).parent().attr('id'));
    //     2.console.log($(i).parent().attr('id'));
    //     3.console.log($(li).attr('id'));
    //     4.console.log('1');
    //     5.var fruitId = $(this).parent().attr('id');
    //     6.var fruitId = '1'
    //     7.listOfFruit.splice(fruitId, 1);
    //     8.listOfFruit.splice('1', 1);
    //     9.['a','b','c'].splice('1',1)
    //     10.['a', 'c']
    //     11.$(`#${fruitId}`).remove();
    //     12.$(`#1`).remove();
    //     13.<li id = 0>
    //         <li id = 2>
    //     14.var fruitListHtml = "";
    //     15.for(var index  = 0; index < listOfFruit.length; index++)
    //     16.for(var index  = 0; index < 2; 0++){
    //         1.console.log(0)
    //         2.console.log("a")
    //         3.fruitListHtml += `<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`;
    //         4.fruitListHtml =""+ `<li id = 0><i class="fas fa-times-circle"></i>a</li>`;
    //         5.fruitListHtml ="<li id = 0><i class="fas fa-times-circle"></i>a</li>";
    //     }
    //     17.$("#fruitList").html(fruitListHtml);
    //     18.$("#fruitList").html("<li id = 0><i class="fas fa-times-circle"></i>a</li>");

    // }

    // 1.for(var index  = 0; index < listOfFruit.length; index++)
    // 2.for(var index  = 0; index < 3; 0++){
    //     1.0
    //     2.'a'
    //     3.console.log($("#fruitList").html(`<li id = ${listOfFruit.indexOf(listOfFruit[index])}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`))
        // 4.console.log($("#fruitList").html(`<li id = ${listOfFruit.indexOf(listOfFruit[0])}><i class="fas fa-times-circle"></i>${listOfFruit[0]}</li>`))
        // 5.console.log($("#fruitList").html(`<li id = ${index}><i class="fas fa-times-circle"></i>${listOfFruit[0]}</li>`))
        // 6.console.log($("#fruitList").html(`<li id = ${0}><i class="fas fa-times-circle"></i>${'a'}</li>`))
        // 7.6.console.log($("#fruitList").html(`<li id = '0'><i class="fas fa-times-circle"></i>'a'</li>`))
        // 8.fruitListHtml += `$("#fruitList").html(`<li id = ${listOfFruit.indexOf(listOfFruit[index])}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`)` + "\n";
        // 9."" += $("#fruitList").html(`<li id = '0'><i class="fas fa-times-circle"></i>'a'</li>`) +"\n";
        // 10." list of string"
        
    // }
    // 1.console.log($("#fruitList").html(`<li id = ${listOfFruit.indexOf(listOfFruit[index])}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`));
    // 2.console.log($("#fruitList").html(`<li id = ${listOfFruit.indexOf(listOfFruit[0])}><i class="fas fa-times-circle"></i>${listOfFruit[0]}</li>`));
    // 3.console.log($("#fruitList").html(`<li id = ${listOfFruit.indexOf('b')}><i class="fas fa-times-circle"></i>${'b'}</li>`));
    // 4.console.log($("#fruitList").html(`<li id = 0><i class="fas fa-times-circle"></i>'b'</li>`));
    // function fruit(listofFruit){
    //     var fruitListHtml = '';
    //     for(var index  = 0; index < listOfFruit.length; index++){
    //         console.log(index)
    //         console.log(listofFruit[index])
    //         console.log(`#${fruitList}`.html(`<li id = ${listOfFruit.indexOf(listOfFruit[index])}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>`));
    //         (`#${fruitList}`).html(`${fruitListHtml} += (<li id = ${listOfFruit.indexOf(listOfFruit[index])}><i class="fas fa-times-circle"></i>${listOfFruit[index]}</li>)`);
    //         console.log(fruitListHtml)
    //     }

    // }
    // listofFruit = ['a', 'b', 'c'];    
    // fruit(listofFruit);
    
    // function  = add 'a', 'b', 'c'simultaneously 
    // var list1 = ['a','b','c']   
    // var string1 = "";
    // for(item in list1){
    //     string1 += `<p>${list1[item]}</p>`;
    //     $("p").html(string1);
    // }
    

    
})

 



