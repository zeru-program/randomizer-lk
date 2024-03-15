
// system translate babel, dont change this code
const jsxCode = ""; 
const transpiledCode = Babel.transform(jsxCode, {
    presets: ["react"]
}).code;
eval(transpiledCode); // Execute the transpiled code


// start Main.jsx

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);



function Container() {
     return (
       <>
       </>
       )
}

function Home() {
    return (
        <> 
        <Container />
        </>
    );
} 
root.render(
    <>
    <Home />
    </>
);



