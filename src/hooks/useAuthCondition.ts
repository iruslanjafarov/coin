'use client';

/**
 * Custom hook to determine the user's authentication status.
 *
 * Checks the value of `isAuth` stored in `localStorage` and returns
 * a boolean indicating whether the user is authenticated.
 *
 * @returns `true` if `localStorage.isAuth` equals `'true'`, otherwise `false`.
 */

export const useAuthCondition = () => localStorage.getItem('isAuth') === 'true';
