import React from 'react';

const TryHOC = (wrapComponent) => ({ Component, ...props }) => {
    const [load, setLoaded] = useState(false);
    const setLoadedFunc = () => {
        setLoaded(pre => !pre)
    }
    console.log('props', props)
    if (!loaded) {
        return <div>loading...</div>
    }
    return (
        <Component {...props} setLoaded={setLoadedFunc} />
    );
}

export default TryHOC;