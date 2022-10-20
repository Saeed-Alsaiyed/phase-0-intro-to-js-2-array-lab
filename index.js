// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) =>{
    cats.push(name);
    return cats
}

const destructivelyPrependCat = (name) =>{
    cats.unshift(name);
    return cats
}

const destructivelyRemoveLastCat = (name) =>{
    cats.pop(name);
    return cats
}

const destructivelyRemoveFirstCat = (name) =>{
    cats.shift(name);
    return cats
}

const appendCat = (name) =>{
    const newcat = [...cats, name]
    return newcat
}

const prependCat = (name) =>{
    const newcat = [name, ...cats]
    return newcat
}

const removeLastCat = () =>{
    const newcat = cats.slice(0, cats.length - 1);
    return newcat
}

const removeFirstCat = () =>{
    const newcat = cats.slice(1);
    return newcat
}




