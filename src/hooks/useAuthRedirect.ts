'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

/**
 * useAuthRedirect
 *
 * Custom hook that protects routes from unauthorized access.
 *
 * It checks for an 'isAuth' flag in localStorage. If the user is not authenticated,
 * the hook automatically redirects them to the '/login' page using Next.js navigation.
 *
 * Intended for use in protected pages to enforce simple client-side authentication.
 *
 */

export const useAuthRedirect = () => {
	const router = useRouter();

	useEffect(() => {
		const isAuth = localStorage.getItem('isAuth');
		if (isAuth !== 'true') {
			router.replace('/login');
		}
	}, [router]);
};
