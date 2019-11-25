import Ractive from 'ractive';
Ractive.DEBUG = false;

function setup(componentOptions) {
    const Component = (typeof componentOptions === 'function') ? componentOptions : Ractive.extend(componentOptions);
    const div = document.createElement('div');
    div.id = 'app';
    const r = new Ractive({
        el: div,
        template: `<Component />`,
        components: {
            Component: Component
        }
    });
    return div;
}

export { setup };