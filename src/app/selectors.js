export const getUserToken = state => state?.authentication.token;
export const isUserLogged = state => state?.authentication.isLogged;
export const getFirstName = state => state?.userProfile.firstName;
export const getLastName  = state => state?.userProfile.lastName;
export const getEmail = state => state?.userProfile.email;
