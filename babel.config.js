// Babel config for JEST
module.exports = api => {
    const isTest = api.env('test');
    if (isTest){
        return {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        }
                    }
                ]
            ]
        };
    } else {
        return {};
    }
};