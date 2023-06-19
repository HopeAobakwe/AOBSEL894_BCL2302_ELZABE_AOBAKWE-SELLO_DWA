let value= 3;

const increase = () => {
    value += 1;
};

const decrease = () => {
  value=-1
};

increase()
decrease()
increase()

console.log (value)
 
// combine your data + behaviour into a single encapsulated unit

const counter = {
    value: 1,
    increase (){
        counter.value += 1
    },


   decrease(){
        counter.value -= 1
    },

    display(){
        counter.value += 1
    },
}

counter.increase();
counter.decrease(); 
counter.value=10;// not fully encapsulated
counter.display();

// instead of the above code we use this one
//closures and scopes

const createCounter = () =>{
    let value =1;

    const increase = (amount) => {value += amount || 1}
    const decrease = (amount) => {value -= amount || 1}
    const display = () => console.log( value)
    
}