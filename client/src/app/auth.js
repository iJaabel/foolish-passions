/***
 * 
 * AUTHENTICATION
 * Creates an auth provider to manage auth function throughtout 
 * the application. Also, defines a <PrivateRoute> component to
 * protect internal application routes from unauthenticated access.
 * 
 ************/

export const LoginStart = (credetials) => ({
    type: "LOGIN_START",
})
export const LoginSuccess = (user) => ({
    type: "LOGIN_START",
})
export const LoginFailure = (error) => ({
    type: "LOGIN_START",
})