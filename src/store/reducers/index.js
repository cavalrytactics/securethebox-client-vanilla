import {combineReducers} from 'redux';
import mailApp from '../../main/content/apps/mail/store/reducers/index';
import navigation from './navigation.reducer';
import theme from './theme.reducer';

const rootReducer = combineReducers({
    mailApp,
    navigation,
    theme
});

export default rootReducer;