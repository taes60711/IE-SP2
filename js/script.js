    
  //// html要素を取得
  //  document.querySelector(), querySelectorAll()
  //  参考URL: https://www.sejuku.net/blog/70581
  ////


  /// loginButton　クリック時の処理
  document.querySelector('.loginButton').addEventListener('click', () => {
 

    /// ID 要素の値を取得
    const idValue = document.querySelector('input[placeholder="ID"]').value;
    /// Password 要素の値を取得
    const passwordValue = document.querySelector('input[placeholder="Password"]').value;

    /// print to console
    console.log('ID:', idValue);
    console.log('Password:', passwordValue);

    if (idValue !== '' && passwordValue !== '') {
      /// 画面遷移
      window.location.href = '/components/home.html';
    } else {
      alert('IDとPasswordを入力してください。');
    }


  });