import NextTopLoader from 'nextjs-toploader';

/**
 * TopLoader
 *
 * A global top-loading bar component using `nextjs-toploader`.
 * 
 * It renders a visual loading indicator at the top of the page during route changes.
 * Styled with a custom yellow color and easing animation. Spinner is disabled for cleaner look.
 *
 * @returns JSX element representing the top-loading progress bar.
 */

const TopLoader = () => (
	<NextTopLoader color='#e6c200' easing='ease' showSpinner={false} />
);

export default TopLoader;
