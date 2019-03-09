import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR ,
    LOGOUT_SUCCESS,
} from '../actions/types';
import { AuthActionType, AuthState } from '../actions/authActions';

const initialState: AuthState = {
  //loginError: '',
  // registrationError: '',
  // permissionsError: '',
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  user: {error: '', user: ''}
}

export const authReducer = (state = initialState, action: AuthActionType): AuthState => {

  switch (action.type) {
  
    case LOGIN_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.payload.user
      };
  
    case LOGIN_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: true,
        // loginError: '',
        // registrationError: '',
        // permissionsError: ''
      };
  
    case LOGIN_FAILURE:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
      };
   
    case LOGOUT_SUCCESS:
      return { ...state,
        isFetching: true,
        isAuthenticated: false
      };
  
    case SIGNUP_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.payload.user
      };

    case SIGNUP_SUCCESS:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.payload.user
      };

    case SIGNUP_ERROR:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        user: action.payload.user
      };
 
    default:
      return state;

  }
}

export default authReducer;