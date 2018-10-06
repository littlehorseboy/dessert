import 'normalize-scss/sass/normalize/_import-now.scss';
import '../../source/checkout/style.scss';

const checkoutForm__submit = document.querySelector('.checkout-form__submit');
checkoutForm__submit.addEventListener('click', () => {
  const checkoutForm = document.querySelector('.checkout-form');
  checkoutForm.innerHTML = `
<div class="mdc-layout-grid__inner">
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div class="checkout-form__title">付款</div>
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <label for="">信用卡卡號</label>
    <input placeholder="9012-3456-7890-1234">
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
    <label for="">持卡人姓名</label>
    <input placeholder="王">
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--align-bottom">
    <input placeholder="小明">
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
    <label for="">有效期限</label>
    <input placeholder="月">
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--align-bottom">
    <input placeholder="年">
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
    <label for="">背面末三碼</label>
    <input placeholder="123">
  </div>
</div>`;

  const aTwo = document.createElement('a');
  aTwo.textContent = '下一步';
  aTwo.classList.add('checkout-form__submit');
  checkoutForm.appendChild(aTwo);

  aTwo.addEventListener('click', () => {
    const tabs_string = {};
    tabs_string.electronic_invoice = `
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
  <label for="">電子郵件信箱</label>
  <input placeholder="example@email.com">
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
  <label for="">統一編號 (選填)</label>
  <input placeholder="12345678">
</div>`;
    tabs_string.mailing_invoice = `
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
  <label for="">地址</label>
  <input placeholder="高雄市">
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--align-bottom">
  <input placeholder="新興區">
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
  <input placeholder="幸福路 520 號">
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
  <label for="">統一編號（選填）</label>
  <input placeholder="12345678">
</div>`;
    checkoutForm.innerHTML = `
<div class="mdc-layout-grid__inner">
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div class="checkout-form__title">發票</div>
  </div>
  <div class="checkout-form__tab active mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet" data-target="electronic_invoice">
    電子發票
  </div>
  <div class="checkout-form__tab mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet" data-target="mailing_invoice">
    郵寄發票
  </div>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div class="checkout-form__tab-content mdc-layout-grid__inner">
      <!-- tabs_string.xxx -->
    </div>
  </div>
</div>`;

    const checkoutForm__tabContent = checkoutForm.querySelector('.checkout-form__tab-content');
    checkoutForm__tabContent.innerHTML = tabs_string.electronic_invoice;

    const tabs = checkoutForm.querySelectorAll('.checkout-form__tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (!tab.classList.contains('active')) {
          
          checkoutForm__tabContent.innerHTML = `${tabs_string[tab.getAttribute('data-target')]}`;

          tabs.forEach((tab_inner) => {
            if (tab_inner.classList.contains('active')) {
              tab_inner.classList.remove('active');
            }
          });
          tab.classList.add('active');
        }
      });
    });

    const aThree = document.createElement('a');
    aThree.textContent = '確認結帳';
    aThree.classList.add('checkout-form__submit');
    checkoutForm.appendChild(aThree);

    aThree.addEventListener('click', () => {
      location.href = 'checkout-success.html';
    });
  });
});
