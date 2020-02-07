


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    console.log("Hello, I am Ahmad");
   // alert("Welcome To M&W_labs.");

    
    let ps = document.getElementsByTagName("p");
    for(elt of ps){
        elt.style["background-color"]="red";

//   let cont =  document.createElement("div");
//   let clck =new Date() ;
//   cont.innetHTML='<div id="overlay_clock_extension" title="8/26/2019" style="border-radius: 6px; display: block; padding: 6px; position: fixed; z-index: 10000099; color: rgb(176, 176, 176); background-color: rgb(0, 0, 0); opacity: 0.8; font-family: &quot;Anonymous Pro Minus&quot;, monospace; font-size: 14px; right: 3px; top: 2px;">16:00</div>'  ;
//   document.body.appendChild(cont);               // Append <button> to <body>

    
    }
}