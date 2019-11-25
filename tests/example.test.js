import { getByLabelText, getByText, getByTestId, queryByTestId, wait, getQueriesForElement, fireEvent, waitForElement} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from './setup.js';
import modal1 from './components/modal1.js';

// tests:
test('Modal shows', () => {
    (async ()=>{
        const container = render(modal1);
        const button = getByText(container, 'Open first modal');
        fireEvent.click(button);
        await wait(() => {
            expect(getByText(container, 'First modal window')).toBeInTheDocument();
        });
    })();
});

test('Modal hides', () => {
    (async ()=>{
        const container = render(modal1);
        const button = getByText(container, 'Open first modal');
        fireEvent.click(button);
        const closeButton = await waitForElement(() => getByText('Close'));
        fireEvent.click(closeButton);
        await waitForElementToBeRemoved(() => queryByText('First modal window'));
    })();
});