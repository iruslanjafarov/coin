'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

/**
 * useGuestRedirect
 *
 * A custom hook that redirects authenticated users away from guest-only routes.
 *
 * This is useful for protecting pages like login or registration, where an already-authenticated
 * user should not be allowed to stay (e.g., redirect them to the home/dashboard page).
 *
 * It checks for the `isAuth` flag in localStorage and navigates to `'/'` if the user is authenticated.
 */

export const useGuestRedirect = () => {
	const router = useRouter();

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('isAuth') === 'true'
		) {
			router.push('/');
		}
	}, [router]);
};
