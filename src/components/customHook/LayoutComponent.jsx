import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'}</h1>
        </div>
    );
}
