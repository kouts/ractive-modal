import { getByLabelText, getByText, getByTestId, queryByTestId, wait, getQueriesForElement, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Ractive from 'ractive';
Ractive.DEBUG = false;

Ractive.components.counter = Ractive.extend({
	template: `
		<div>
			<button on-click="@this.add('count')">
				{{count}}
			</button>
		</div>
	`,
	data: function(){
		return {
			count: 0
		}
	}
});

function render() {
	const div = document.createElement('div');
	div.id = 'app';
	const r = new Ractive({
		target: div,
		template: `
			<div>
				<counter />
			</div>
		`
	});
	return div;
}

// tests:
test('counter increments', () => {
	const div = render();
	const { getByText } = getQueriesForElement(div);
	const counter = getByText('0');
	fireEvent.click(counter);
	expect(counter).toHaveTextContent('1');
	fireEvent.click(counter)
	expect(counter).toHaveTextContent('2');
});