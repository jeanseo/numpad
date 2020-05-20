export const multiplication = ()=>{

    const val1 = getRandomNumber();
    const val2 = getRandomNumber();

    return {
        question : `${val1} x ${val2} =`,
        answer : val1*val2
    }

};

const getRandomNumber = () => {
    return Math.floor(Math.random() * 11);
};
