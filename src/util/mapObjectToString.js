const mapObjectToString = (...objects) => {
    const classes = [];

    objects.forEach(obj => {
        if (typeof obj === 'object' && obj !== null) {
            Object.values(obj).forEach(value => {
                if (typeof value === 'string') {
                    classes.push(value);
                } else if (typeof value === 'object') {
                    classes.push(...mapObjectToString(value));
                }
            });
        } else if (typeof obj === 'string') {
            classes.push(obj);
        }
    });

    return classes;
};

export default mapObjectToString;