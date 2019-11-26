import { within, wait, waitForElement, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { setup } from './setup/ractive.js';
import modal1 from './components/modal1.js';

// tests:
test('Modal shows', async () => {
    const container = setup(modal1);
    const { getByText } = within(container);
    const button = getByText('Open first modal');
    fireEvent.click(button);
    const closeButton = await waitForElement(() => getByText('Close'));
});

test('Modal hides', async () => {
    const container = setup(modal1);
    const { getByText, queryByText } = within(container);
    const button = getByText('Open first modal');
    fireEvent.click(button);
    const closeButton = await waitForElement(() => getByText('Close'));
    fireEvent.click(closeButton);
    await wait(() => {
        expect(queryByText('First modal window')).not.toBeInTheDocument();
    });
});