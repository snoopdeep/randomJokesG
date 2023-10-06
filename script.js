document.querySelector(".btn").addEventListener("click",fun1);
function fun1(){
    // first create a disctonary which contain author name as key and quote as value(must be inclosed in '');
    // then we create a array of keys by passing values to them
    // then we generalte random no btw range;

    var dict={
        "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera":'"-Lori Deschene"',
        "What do a tick and the Eiffel Tower have in common? They're both Paris sites.":' "-Iain Thomas" ',
        "How do you follow Will Smith in the snow? You follow the fresh prints.": ' "-Joshua Graham"',
        "If April showers bring May flowers, what do May flowers bring? Pilgrims.":'"-Steve Wentworth"',
        "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.":'"-Unknown"',
        "How does dry skin affect you at work? You don’t have any elbow grease to put into it.":'"-Lori Deschene"',
        "Dear Math, grow up and solve your own problems":'"-Yasmin Mogahed"',
        "Have you heard about the chocolate record player? It sounds pretty sweet.":'"-Criss Jami"',
        "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels.":'"-Wesley Snipes"',
        "I only know 25 letters of the alphabet. I don't know y.":'"-Confucius"',
        " got carded at a liquor store, and my Blockbuster card accidentally fell out. The cashier said never mind.":'"-Brigitte Nicole"'
    }
    var author_array= Object.keys(dict);
    // console.log(author);
    //Note about Object.keys()
    //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
    // const object1 = {
    //     a: 'somestring',
    //     b: 42,
    //     c: false
    //   };
      
    //   console.log(Object.keys(object1));
    //   // Expected output: Array ["a", "b", "c"]


    // selecting random author from author_array creating random no(key) in range of author.lenght 

    var author_no=author_array[ Math.floor(Math.random()*author_array.length)];
    console.log(author_no);

    // now we have the the random author(key) so grab quote(value) correspond to that author

    var quote= dict[author_no];
     document.querySelector("#quote").innerHTML=author_no;
    // console.log(document.querySelector("#imgg").src);
    //  document.querySelector("#imgg").src="author_no"


    //  document.querySelector("#author").innerHTML=quote;
}