const CallStack = () => {
    console.log("Hi Johnson!");
    johnson();
}

const johnson=()=>{
    console.log("Hi Sathish!");
    prabha();
}
const prabha =()=>{
    console.log("Hi Dharma!");
    dharma();
}
const dharma=()=>{
    console.log("Hi Ranjith!");
    ranjith();
}
const ranjith=()=>{
    console.log("Hi Nandu!");
    nandu();
}
const nandu=()=>{
    console.log("CallStack is over!!!!");
    // throw new Error("This code is not working!!!!!!")
    console.trace();
}

export default CallStack;