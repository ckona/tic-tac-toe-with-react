/*
  https://github.com/enzymejs/enzyme/issues/1265#issuecomment-336740161
  https://github.com/enzymejs/enzyme/issues/1265#issuecomment-336872722
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
