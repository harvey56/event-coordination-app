import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    SIGNUP, 
    SIGNUP_ERROR ,
    LOGOUT_SUCCESS,
    INVALID_REQUEST
} from '../actions/authActions';

const initialState = {
  loginError: '',
  registrationError: '',
  permissionsError: '',
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}

const auth = (state = initialState, action) => {

  switch (action.type) {
  
    case LOGIN_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      };
  
    case LOGIN_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: true,
        loginError: '',
        registrationError: '',
        permissionsError: ''
      };
  
    case LOGIN_FAILURE:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        loginError: action.error
      };
   
    case LOGOUT_SUCCESS:
      return { ...state,
        isFetching: true,
        isAuthenticated: false
      };
  
    case SIGNUP:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.user
      };

    case SIGNUP_ERROR:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        registrationError: action.error
      };

    case INVALID_REQUEST:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        permissionsError: action.error
      };
 
    default:
      return state;

  }
}

export default auth;