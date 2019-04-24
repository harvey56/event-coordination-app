import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR ,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
    CHECK_TOKEN_REQUEST,
    CHECK_TOKEN_SUCCESS,
    CHECK_TOKEN_FAILURE
} from '../actions/types';
import { AuthActionType, AuthState } from '../actions/authActions';

const initialState: AuthState = {
  authReducer: {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    user: {},
    error: {
      error: ''
    }
  }
}

export const authReducer = (state = initialState, action: AuthActionType) => {

  switch (action.type) {
  
    case LOGIN_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.payload
      };
  
    case LOGIN_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: true,
      };

    case LOGIN_FAILURE:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.payload
    };
   
    case LOGOUT_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: true
    };

    case LOGOUT_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: false
    };
    
    // case LOGOUT_FAILURE:
    //   return { ...state,
    //     isFetching: false,
    //     isAuthenticated: false
    // };

    case SIGNUP_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.payload
      };

    case SIGNUP_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: true,
      };

    case SIGNUP_ERROR:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
      };

    case CHECK_TOKEN_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false
      };
      
    case CHECK_TOKEN_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: true
      };

    case CHECK_TOKEN_FAILURE:
      return { ...state,
        isFetching: false,
        isAuthenticated: false
      };
 
    default:
      return state;

  }
}

export default authReducer;