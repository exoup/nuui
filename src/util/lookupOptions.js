const lookupOptions = (lookupObject, lookupKey, fallbackKey) => {
    return lookupObject[lookupKey] ?? lookupObject[fallbackKey];
};

export default lookupOptions;