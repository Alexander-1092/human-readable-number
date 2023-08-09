// module.exports = function toReadable (number) {

// }

const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const afterTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'nineteen']
const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


const upToAThousand = num => {
	if (String(num).length === 1) {
		return units[num]
	} else if (String(num).length === 2 && String(num).slice(0,1) === "1") {
		return afterTen[String(num).slice(1)]
	} 
	
	else if (String(num).length === 2 && String(num).slice(1) === "0") {
		return `${dozens[String(num).slice(0,1) - 2]}`
	}

	else if (String(num).length === 2 && String(num).slice(1) !== "0") {
		return `${dozens[String(num).slice(0,1) - 2]}-${units[String(num).slice(1)]}`
	}
}

const forHundreds = num => {
	if (String(num).slice(1) === '00') {
		return `${units[String(num).slice(0,1)]} hundred`
	} else if (String(num).slice(1,2) === '0'){
		return `${units[String(num).slice(0,1)]} hundred ${units[(String(num).slice(2))]}`
	} else {
	return `${units[String(num).slice(0,1)]} hundred ${upToAThousand(String(num).slice(1))}`
	}
}

const forAThousand = num => {
	if (String(num).slice(1,2) === '0') {
		return `${units[String(num).slice(0,1)]} thousand ${upToAThousand(String(num).slice(2))}`
	} else {
		return `${units[String(num).slice(0,1)]} thousand ${forHundreds(String(num).slice(1))}`
	}
}


const toReadable = num => {
	if (String(num).length < 3) {
		return 	upToAThousand(num)
	} else if (String(num).length === 3) {
		return forHundreds(num)
	} else if (String(num).length === 4) {
		return forAThousand(num)
	}
}

console.log(
toReadable(9999)
)
