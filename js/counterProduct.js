//  Author: Vlasenko Fedor, valsenkofedor@mail.ru
(function($){
  $('.orderProduct__cart__item__calc').on('click', 'span', function () {
      var input = $('input' , this.parentNode),
          val = +input.val()||0;
      input.val(val += this.className == 'orderProduct__calc__minus' ? val > 0 ? -1: 0: 1);
  });
}(jQuery));