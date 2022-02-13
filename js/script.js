jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  // $(document).on("click", 'a[href*="#"]', function () {
  //   let time = 400;
  //   let header = $("header").innerHeight();
  //   let target = $(this.hash);
  //   if (!target.length) return;
  //   let targetY = target.offset().top - header;
  //   $("html,body").animate({ scrollTop: targetY }, time, "swing");
  //   return false;
  // });

  //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      //上から200pxスクロールしたら
      $("#page-top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
      $("#page-top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
    } else {
      if ($("#page-top").hasClass("UpMove")) {
        //すでに#page-topにUpMoveというクラス名がついていたら
        $("#page-top").removeClass("UpMove"); //UpMoveというクラス名を除き
        $("#page-top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
      }
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // #page-topをクリックした際の設定
  $("#page-top a").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });

  setTimeout(function () {
    $(".c-start p").fadeIn(1600);
  }, 500); //0.5秒後にロゴをフェードイン!
  setTimeout(function () {
    $(".c-start").fadeOut(500);
  }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！

  $(".js-fadeUp").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("is-inview");
    } else {
      $(this).removeClass("is-inview");
    }
  });
});
