// Возвращает строку, где первая буква в верхнем регистре, а все остальные в нижнем

function capitalize(str) {
	str = str.toLowerCase();
	var a = str.split('');
	a[0] = a[0].toUpperCase();
	var i = 0;
	var s = '';
	while (i < a.length) {
		s = s + a[i]
		i++;
	};
	return s;
}

//==========================================================================================//
// Возвращете текст в котором все слова с заглавной буквы

const textUppercace = (text) => {
	let res = text[0].toUpperCase()
	for (let i = 1; i < text.length; i++) {
		if (text[i - 1] == " ") {
			res += text[i].toUpperCase()
		} else {
			res += text[i]
		}
	}
	return res
}
//==========================================================================================//

//Сортрирует массив arr из чисел в порядке возрастания 

arr.sort((a, b) => a - b)

//==========================================================================================//