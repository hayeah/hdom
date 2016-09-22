const foo = 20;

/* 实现组件的构建函数 */
function h() {
	// 你的代码
}

/* 先不用实现 diff，单纯构建真实 DOM 就行 */
function render() {
	// 你的代码
}

function Title() {
	return <h1>JS Gym 06</h1>
}

const App = (
	<div>
		<Title/>

		<p>Implement Your Own Virtual DOM</p>

	</div>
);

/*
var App = (
	h( 'div', null,
		h( 'h1', null, "JS Gym 06" ),
		h( 'p', null, "Implement Your Own Virtual DOM" )
	)
);
*/

naiveRender(<App/>, document.querySelector("#root"));
