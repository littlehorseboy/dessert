import 'normalize-scss/sass/normalize/_import-now.scss';
import '../../source/login/style.scss';
import { MDCTextField } from '@material/textfield';

document.querySelectorAll('.mdc-text-field').forEach(el => {
  new MDCTextField(el);
});
