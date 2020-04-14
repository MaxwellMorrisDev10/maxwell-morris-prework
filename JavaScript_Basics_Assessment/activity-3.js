const nameList = ['Juan', 'Sue', 'Bob'];

for (let i = 0; i < 3; i++){
    const name = prompt('Enter a name');
    nameList.push(name);
}

for (let i = 0; i < nameList.length; i++){
    const name = nameList[i];
    console.log(name)
}