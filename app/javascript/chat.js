function chat() {
  const submit = document.getElementById("submit");
  console.log(submit);
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    //XHR.open("POST", "/posts", true);
    XHR.open("POST", "/chats", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      console.log(formData);
      const item = XHR.response.chat;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="chat" data-id=${item.id}>
          <div class="chat-date">
            投稿日時:${item.create_at}
          </div>
          <div class="post-content">
          ${item.content}ああああ
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
  });
}
window.addEventListener("load", chat);