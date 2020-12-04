<html>
  <head>
    <title>根据url自动生成骨架屏</title>
    <style>
      input {
        width: 200px;
        height: 40px;
      }
      button {
        width: 100px;
        text-align: center;
      }
      form {
        height: 80px;
      }
      .left {
        display: inline-block;
        width: 50%;
        vertical-align: top;
      }
      .right {
        display: inline-block;
        width: 49%;
      }
      img {
        width: 375px;
      }
    </style>
  </head>

  <body>
    <div>
      <div class="left">
        <form>
          <input id="input"  type="text" placeholder="请输入你的姓名"/>
        </form>
        <button id="btn">测试</button>
      </div>
      <div class="right" id="right"></div>
    </div>
  </body>
  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js"></script>
  <script>
    const input = document.getElementById("input") //获取输入框元素
    var btn = document.getElementById("btn");
    var right = document.getElementById("right");

    btn.onclick = function () {
      $.ajax({
        type: 'post',
        contentType: "application/json;charset=UTF-8",
        url: "http://127.0.0.1:7001/skeleton/getContentByUrl",
        data: JSON.stringify({pageUrl: input.value}),
        success: function (data) {
          if (data.code === '0') {
            const img = document.createElement('img');
            img.src = data.content.img;
            right.appendChild(img);
          } else {
            alert(data.content.message)
          }
        }
      })
    }
  </script>
</html>