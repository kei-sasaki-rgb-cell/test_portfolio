function memo() { //memo関数を定義
  const submit = document.getElementById("submit"); //送信ボタンのidを取得してsubmit変数に代入
  console.log(submit);
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
      let formText1 = document.getElementById("name");
      let formText2 = document.getElementById("subject");
      let formText3 = document.getElementById("content");
      const HTML = `
        <div class="chat" data-id=${item.id}>
          <div class="chat-date">
            投稿日時：${item.created_at}
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
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText1.value = "";
      formText2.value = "";
      formText3.value = "";
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo); //window.addEventListener("load", memo);で、window（ページ）をload（読み込み）時に実行されるように記述します。