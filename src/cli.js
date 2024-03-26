import readlineSync from "readline-sync"


const nameRequest = () => {
	return readlineSync.question('May I have your name? ');
}

export default nameRequest;
