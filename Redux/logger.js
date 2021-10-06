export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('prevSate:', prevState);
        console.log('Arguments:', args);

        const newState = reducer(prevState, action, args);
        console.log('newState:', newState);
        console.groupEnd();
        return newState;
    }
}