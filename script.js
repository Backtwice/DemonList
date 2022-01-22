let NameObj = document.getElementById('dn')
let IDObj = document.getElementById('di')
let VideoObj = document.getElementById('dv')
let WinnersObj = document.getElementById('dc')
let DifficultyObj = document.getElementById('dd')
let GrayDefault = document.getElementById('graydef')

function setValues(dn, di, dv, dc, dd) {
	NameObj.innerHTML = 'Название → ' + dn
	IDObj.innerHTML = 'ID в Игре → ' + di
	VideoObj.innerHTML = 'Видео → <a href="' + dv + '" target="blank">Верификация</a>'
	WinnersObj.innerHTML = 'Прохождений → ' + dc
	DifficultyObj.innerHTML = 'Сложность → ' + dd + ' Demon'

	GrayDefault.style = 'color: #52bfe1;'
}

function level(id) {
	// let OutputObject = {name: '', id: '', src: '', beat: ''}
	console.log('Sent → ' + id)
	if (id == 1) {
		setValues('Bitter Nightmares', '???', 'https://www.youtube.com/watch?v=fxWxI0is7QA', '0', 'Insane')
	}
}
