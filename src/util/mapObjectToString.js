const mapObjectToString = (obj) => {
    const classes = [];

    const processValue = (value) => {
        if (typeof value === 'string') {
            classes.push(value);
        } else if (typeof value === 'object') {
            classes.push(...mapObjectToString(value));
        }
    };

    if (typeof obj === 'object' && obj !== null) {
        Object.values(obj).forEach(processValue);
    } else if (typeof obj === 'string') {
        classes.push(obj);
    }

    return classes;
};

export default mapObjectToString;