import 'normalize-scss/sass/normalize/_import-now.scss';
import '../../source/checkout-success/style.scss';
import { MDCTextField } from '@material/textfield';

new MDCTextField(document.querySelector('.mdc-text-field'));

const gotoProduct = document.querySelector('.checkout-success__content__gotoproduct');

gotoProduct.addEventListener('click', () => {
  location.href = 'product.html';
});
