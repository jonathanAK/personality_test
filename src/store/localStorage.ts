export const loadState = () => {
    try {
        const storedState = localStorage.getItem('state');
        if (storedState === null) {
            return undefined;
        }
        return JSON.parse(storedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state:any) => {
    try {
        const stateToStore = JSON.stringify(state);
        localStorage.setItem('state', stateToStore);
    } catch {
        console.log('unable to save to local storage.');
    }
};