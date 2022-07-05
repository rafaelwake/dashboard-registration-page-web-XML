$(document).ready(function () {
  //get list from items
  const menuList = document.querySelectorAll(".section ul li button");
  let page = 0; // counter page form

  //function to hidden and show form
  function menuForm(element_id) {
    $(".info").children().hide();
    id = "#" + element_id + "-form";
    $(id).show();
  }

  //function to get button from previous
  $(".previous ul li button").on("click", function () {
    console.log(this.id);

    if (this.id === "next" && page < menuList.length) {
      page++;
      menuForm(menuList[page].id);
      $(".section ul li button").removeClass("active");
      $(menuList[page]).addClass("active");
    }
    if (this.id === "back" && page > 0) {
      page--;
      menuForm(menuList[page].id);
      $(".section ul li button").removeClass("active");
      $(menuList[page]).addClass("active");
    }

    if (this.id === "finish" && page === menuList.length) {
      console.log("acabou");
    }
  });

  //function to get button from subjects
  $(".section ul li button").on("click", function () {
    $(".section ul li button").removeClass("active");
    $(this).addClass("active");
    menuForm(this.id);
    page = 0;
    for (i = 0; i < menuList.length; i++) {
      if (this.id === menuList[i].id) {
        break;
      }
      page++;
    }
  });
});
