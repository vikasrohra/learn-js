console.log("================useState Polyfill=====================");

// A true polyfill for useState like in React isn’t really possible in the browser the way you polyfill Array.prototype.map or Promise. That’s because useState depends on React’s internal rendering engine (Fiber), component lifecycle, and reconciliation.

// But you can build a simplified custom implementation to understand how it works internally. Think of it as a learning polyfill.

// 🔧 Minimal useState Polyfill (Conceptual)

let states = [];
let index = 0;

function useState(initialState) {
    const currentIndex = index;

    // Initialize state if first time
    states[currentIndex] = states[currentIndex] ?? initialState;

    function setState(newValue) {
        states[currentIndex] = newValue;
        render(); // re-render the component
    }

    index++;
    return [states[currentIndex], setState];
}

// 🔁 Simulating a Component + Render
function render() {
    index = 0; // reset before each render

    const App = () => {
        const [count, setCount] = useState(0);

        console.log("Count: ", count);

        return {
            click: () => setCount(count + 1)
        }
    }

    return App();
}

const app = render();
console.log(app.click());


// ⚠️ Limitations of This Polyfill

// This is very simplified compared to real React:

// No batching of updates
// No async scheduling (like concurrent mode)
// No component tree diffing
// No multiple components isolation
// No closures preservation across renders like React Fiber


// 🧩 Real Insight

// In actual React:

// Each component has its own fiber node
// Hooks are stored as a linked list, not a simple array
// Updates are queued and scheduled, not immediately applied


// 🔧 Improved Polyfill Supporting Multiple useState

let states1 = [];
let index1 = 0;

function useState1() {
    const currentIndex = index1;
    states1[currentIndex] = states1[currentIndex] ?? initialState;

    function setState(newValue) {
        if(typeof newValue === "function") {
            states[currentIndex] = newValue(states[currentIndex]);
        }
        else {
            states1[currentIndex] = newValue;
        }
        render1();
    }

    index1++;
    return [states1[currentIndex], setState];
}

function render1() {
    index1 = 0;

    const App1 = () => {
        const [count, setCount] = useState1(0);
        const [name, setName] = useState1("Vikas");

        console.log("Count: " + count + " | Name: " + name);

        return {
            increment: () => setCount(c => c + 1),
            changeName: (newName) => setName(newName)
        }
    }

    return App1;
}

let app1 = render1();
console.log(app1.increment());
console.log(app1.changeName("Maahi"));


// 🚀 Slightly Better Version (Component Isolation)
// Right now, all state is global. Let’s isolate per component:

function createComponent(Component) {
  let states = [];
  let index = 0;

  function useState(initialValue) {
    const currentIndex = index;

    if (states[currentIndex] === undefined) {
      states[currentIndex] = initialValue;
    }

    function setState(newValue) {
      states[currentIndex] =
        typeof newValue === "function"
          ? newValue(states[currentIndex])
          : newValue;

      render1();
    }

    index++;
    return [states[currentIndex], setState];
  }

  function render1() {
    index = 0;
    return Component(useState);
  }

  return render1;
}

// ✅ Usage
const App2 = (useState) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vikas");

  console.log(count, name);

  return {
    inc: () => setCount(c => c + 1),
    setName
  };
};

const renderApp = createComponent(App2);
let app2 = renderApp();

console.log(app2.inc());
console.log(app2.setName("Amit"));