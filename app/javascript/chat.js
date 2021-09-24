var moment = require('moment');
function memo() { //memo関数を定義
  const submit = document.getElementById("submit"); //送信ボタンのidを取得してsubmit変数に代入
  console.log(moment.months());
  submit.addEventListener("click", (e) => { //クリック時にイベント発火
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest(); //非同期通信を実装するために必要なXMLHttpRequestのオブジェクトを生成
    XHR.open("POST", "/chats", true); // ? XMLHttpRequestを初期化 /chatはパス chat.jsにXMLHttpRequestを初期化する記述
    XHR.responseType = "json"; //responseTypeはレスポンス型を定義する、列挙型の値です。
    XHR.send(formData); //このメソッドは接続をオープンし、リクエストをサーバに送信します
    XHR.onload = () => { //onloadはレスポンスなどの受信が成功した場合に呼び出されるイベントハンドラー
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
        console.log(XHR.response);
      const item = XHR.response.chat; // ?itemは、レスポンスとして返却されたメモのレコードデータを取得しています。ここのchatはコントローラーのcheckedアクションの所
      const list = document.getElementById("list");
      const formText1 = document.getElementById("name");
      const formText2 = document.getElementById("subject");
      const formText3 = document.getElementById("content");

      if (formText1.value == ""  || formText2.value == "" || formText3.value == "") {
        alert('ユーザー名、タイトル、本文を全て記入して下さい');
      } else {
      const HTML = `
        <div class="chat" data-id=${item.id}>
          <div class="chat-cohesive">
            <div class="chat-date">
              投稿日時：${moment().format("YYYY-MM-DD HH:mm")}
            </div>
            <div class="chat-number">
              id : ${item.public_uid}
            </div>
            <div class="chat-name">
              ユーザー名：${item.name}
            </div>
            <div class="chat-title">
              タイトル：${item.subject}
            </div>
            <div class="post-content">
              本文：${item.content}
            </div>
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText1.value = "";
      formText2.value = "";
      formText3.value = "";
      }
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo); //window.addEventListener("load", memo);で、window（ページ）をload（読み込み）時に実行されるように記述します。