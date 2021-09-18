// function check() {
//   const chats = document.querySelectorAll(".chat"); //querySelectorAllメソッドで、chatをクラス名にもつ要素を取得できる
//   chats.forEach(function (chat) { //forEachを記述して、それぞれの要素への処理を記述する場所を用意
//     chat.addEventListener("click", () => { //addEventListenerメソッドを使用し、引数にclickの指定をします。
//       // ここにクリックした時に行う「何らかの処理」を記述していく
//       const chatId = chat.getAttribute("data-id"); //getAttributeで属性値を取得
//       const XHR = new XMLHttpRequest(); //エンドポイントを呼び出すために、XMLHttpRequestを使用してHTTPリクエストを行います。
//       XHR.open("GET", `/chats/${chatId}`, true); //XMLHttpRequestで定義されているメソッドで、リクエストを初期化できます。
//       XHR.responseType = "json"; // responseTypeとは、XMLHttpRequestで定義されているメソッドで、レスポンスの形式を指定するメソッドのことです。リクエストを送る際にあらかじめ、レスポンスとして欲しい情報の形式を指定する必要があります。
//       XHR.send(); //XMLHttpRequestで定義されているメソッドで、リクエストを送信できます。
//       XHR.onload = () => { //onloadとは、XMLHttpRequestで定義されているプロパティで、レスポンスなどの受信が成功した場合に呼び出されるイベントハンドラーのこと
//         const item = XHR.response.chat;
//         if (item.checked === true) {
//           chat.setAttribute("data-check", "true");
//         } else if (item.checked === false) {
//           chat.removeAttribute("data-check");
//         }
//       };
//     }); 
//   }); 
// }
// window.addEventListener("load", check);