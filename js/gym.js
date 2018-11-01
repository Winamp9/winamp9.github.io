window.onload = function() {

document.body.oncontextmenu = function (e) {
    return false;
};
// Объект игры
var game = {
	mainWindow: document.getElementById('game-start-window'),
	// Кнопки
	btnStart: document.getElementById('sw-start'),
	btnExit: document.getElementById('sw-exit'),
	btnContinue: document.getElementById('sw-continue'),
	btnReset: document.getElementById('sw-reset'),
	// Главное окно
	mainWindowDumb: document.getElementById('game-dumbbells'),
	mainWindowBike: document.getElementById('game-bikes'),
	// Окно загрузки
	loadWindow: document.getElementById('game-load-window'),
	// Область клика
	clickAreaDumb: document.getElementById('dumbbells-area'),
	clickAreaBike: document.getElementById('bike-area'),
	// Кнопка перехода на локацию
	btn_trnsDumb: document.getElementById('transition'),
	btn_trnsBike: document.getElementById('transition_1_'),
	// Элементы чара dumb-loc **********************************************************************************************************
	dumbElem: {
		// Левые ноги 0 - 24
		left_leg: [document.getElementById('left-leg1_2_'),document.getElementById('left-leg2'),document.getElementById('left-leg3'),document.getElementById('left-leg4'),document.getElementById('left-leg5'),document.getElementById('left-leg6'),document.getElementById('left-leg7'),document.getElementById('left-leg8'),document.getElementById('left-leg9'),document.getElementById('left-leg10'),document.getElementById('left-leg11'),document.getElementById('left-leg12'),document.getElementById('left-leg13'),document.getElementById('left-leg14'),document.getElementById('left-leg15'),document.getElementById('left-leg16'),document.getElementById('left-leg17'),document.getElementById('left-leg18'),document.getElementById('left-leg19'),document.getElementById('left-leg20'),document.getElementById('left-leg21'),document.getElementById('left-leg22'),document.getElementById('left-leg23'),document.getElementById('left-leg24'),document.getElementById('left-leg25')],
		// Правые ноги 0 - 24
		right_leg: [document.getElementById('right-leg1_2_'),document.getElementById('right-leg2'),document.getElementById('right-leg3'),document.getElementById('right-leg4'),document.getElementById('right-leg5'),document.getElementById('right-leg6'),document.getElementById('right-leg7'),document.getElementById('right-leg8'),document.getElementById('right-leg9'),document.getElementById('right-leg10'),document.getElementById('right-leg11'),document.getElementById('right-leg12'),document.getElementById('right-leg13'),document.getElementById('right-leg14'),document.getElementById('right-leg15'),document.getElementById('right-leg16'),document.getElementById('right-leg17'),document.getElementById('right-leg18'),document.getElementById('right-leg19'),document.getElementById('right-leg20'),document.getElementById('right-leg21'),document.getElementById('right-leg22'),document.getElementById('right-leg23'),document.getElementById('right-leg24'),document.getElementById('right-leg25')],
		// Тела 0 - 23 
		bodys: [document.getElementById('body1_1_'),document.getElementById('body3_1_'),document.getElementById('body4_1_'),document.getElementById('body5_1_'),document.getElementById('body6_1_'),document.getElementById('body7_1_'),document.getElementById('body8_1_'),document.getElementById('body9_1_'),document.getElementById('body10_1_'),document.getElementById('body11_1_'),document.getElementById('body12_1_'),document.getElementById('body13_1_'),document.getElementById('body14_1_'),document.getElementById('body15_1_'),document.getElementById('body16_1_'),document.getElementById('body17_1_'),document.getElementById('body18_1_'),document.getElementById('body19_1_'),document.getElementById('body20_1_'),document.getElementById('body21_1_'),document.getElementById('body22_1_'),document.getElementById('body23_1_'),document.getElementById('body24_1_'),document.getElementById('body25_1_')],
		// Труселя 0 - 21
		underpant: [document.getElementById('underpants1'),document.getElementById('underpants3'),document.getElementById('underpants4'),document.getElementById('underpants5'),document.getElementById('underpants6'),document.getElementById('underpants7'),document.getElementById('underpants9'),document.getElementById('underpants11'),document.getElementById('underpants12'),document.getElementById('underpants13'),document.getElementById('underpants14'),document.getElementById('underpants15'),document.getElementById('underpants16'),document.getElementById('underpants17'),document.getElementById('underpants18'),document.getElementById('underpants19'),document.getElementById('underpants20'),document.getElementById('underpants21'),document.getElementById('underpants22'),document.getElementById('underpants23_1_'),document.getElementById('underpants24'),document.getElementById('underpants25')],
		// Веки 
		rightUpperEyelid: document.getElementById('rigth-upper-eyelid_1_'),
		rightLowerEyelid: document.getElementById('right-lower-eyelid_1_'),
		leftUpperEyelid: document.getElementById('left-upper-eyelid_1_'),
		leftLowerEyelid: document.getElementById('left-lower-eyelid_1_'),
		// Лица 0 - 6
		faces: [document.getElementById('face1_1_'),document.getElementById('face18_1_'),document.getElementById('face19_1_'),document.getElementById('face20_1_'),document.getElementById('face21_1_'),document.getElementById('face22_1_'),document.getElementById('face25_1_')],
		// Рты 
		mouth1: document.getElementById('mouth1_1_'),
		mouth2: document.getElementById('mouth2_1_'),
		// Левые руки 0 - 24 ****************************************************************************************************************
		second_left_arms: [document.getElementById('second-left-arm1_1_'),document.getElementById('second-left-arm2_1_'),document.getElementById('second-left-arm3_1_'),document.getElementById('second-left-arm4_1_'),document.getElementById('second-left-arm5_1_'),document.getElementById('second-left-arm6_1_'),document.getElementById('second-left-arm7_1_'),document.getElementById('second-left-arm8_1_'),document.getElementById('second-left-arm9_1_'),document.getElementById('second-left-arm10_1_'),document.getElementById('second-left-arm11_1_'),document.getElementById('second-left-arm12_1_'),document.getElementById('second-left-arm13_1_'),document.getElementById('second-left-arm14_1_'),document.getElementById('second-left-arm15_1_'),document.getElementById('second-left-arm16_1_'),document.getElementById('second-left-arm17_1_'),document.getElementById('second-left-arm18_1_'),document.getElementById('second-left-arm19_1_'),document.getElementById('second-left-arm20_1_'),document.getElementById('second-left-arm21_1_'),document.getElementById('second-left-arm22_1_'),document.getElementById('second-left-arm23_1_'),document.getElementById('second-left-arm24_1_'),document.getElementById('second-left-arm25_1_')],
		// Левые предплечья 0 - 24
		first_left_arms: [document.getElementById('first-left-arm1'),document.getElementById('first-left-arm2'),document.getElementById('first-left-arm3'),document.getElementById('first-left-arm4'),document.getElementById('first-left-arm5'),document.getElementById('first-left-arm6'),document.getElementById('first-left-arm7_1_'),document.getElementById('first-left-arm8_1_'),document.getElementById('first-left-arm9_1_'),document.getElementById('first-left-arm10_1_'),document.getElementById('first-left-arm11_1_'),document.getElementById('first-left-arm12_1_'),document.getElementById('first-left-arm13_1_'),document.getElementById('first-left-arm14_1_'),document.getElementById('first-left-arm15_1_'),document.getElementById('first-left-arm16_1_'),document.getElementById('first-left-arm17_1_'),document.getElementById('first-left-arm18_1_'),document.getElementById('first-left-arm19_1_'),document.getElementById('first-left-arm20_1_'),document.getElementById('first-left-arm21_1_'),document.getElementById('first-left-arm22_1_'),document.getElementById('first-left-arm23_1_'),document.getElementById('first-left-arm24_1_'),document.getElementById('first-left-arm25_1_')], 
		// Левые гантели 0 - 8
		left_dumbbells: [document.getElementById('left-dumbbell1_1_'),document.getElementById('left-dumbbell2'),document.getElementById('left-dumbbell3'),document.getElementById('left-dumbbell4'),document.getElementById('left-dumbbell5'),document.getElementById('left-dumbbell6'),document.getElementById('left-dumbbell7'),document.getElementById('left-dumbbell8'),document.getElementById('left-dumbbell9'),document.getElementById('left-dumbbell10')],
		// Левые пальцы
		left_fingers: document.getElementById('left-fingers_1_'),
		// Все левые руки, предплечья и гантели
		all_left_dumbbells: document.getElementById('left-dumbbells'),
		first_left_arm: document.getElementById('first-left-arms'),
		left_arm: document.getElementById('left-arms'),
		// Правые руки 0 - 24 ****************************************************************************************************************
		second_right_arms: [document.getElementById('second-right-arm1_1_'),document.getElementById('second-right-arm2_1_'),document.getElementById('second-right-arm3_1_'),document.getElementById('second-right-arm4_1_'),document.getElementById('second-right-arm5_1_'),document.getElementById('second-right-arm6_1_'),document.getElementById('second-right-arm7_1_'),document.getElementById('second-right-arm8_1_'),document.getElementById('second-right-arm9_1_'),document.getElementById('second-right-arm10_1_'),document.getElementById('second-right-arm11_1_'),document.getElementById('second-right-arm12_1_'),document.getElementById('second-right-arm13_1_'),document.getElementById('second-right-arm14_1_'),document.getElementById('second-right-arm15_1_'),document.getElementById('second-right-arm16_1_'),document.getElementById('second-right-arm17_1_'),document.getElementById('second-right-arm18_1_'),document.getElementById('second-right-arm19_1_'),document.getElementById('second-right-arm20_1_'),document.getElementById('second-right-arm21_1_'),document.getElementById('second-right-arm22_1_'),document.getElementById('second-right-arm23_1_'),document.getElementById('second-right-arm24_1_'),document.getElementById('second-right-arm25_1_')],
		// Правые предплечья 0 - 24
		first_right_arms: [document.getElementById('first-right-arm1'),document.getElementById('first-right-arm2'),document.getElementById('first-right-arm3'),document.getElementById('first-right-arm4'),document.getElementById('first-right-arm5'),document.getElementById('first-right-arm6'),document.getElementById('first-right-arm7_1_'),document.getElementById('first-right-arm8_1_'),document.getElementById('first-right-arm9_1_'),document.getElementById('first-right-arm10_1_'),document.getElementById('first-right-arm11_1_'),document.getElementById('first-right-arm12_1_'),document.getElementById('first-right-arm13_1_'),document.getElementById('first-right-arm14_1_'),document.getElementById('first-right-arm15_1_'),document.getElementById('first-right-arm16_1_'),document.getElementById('first-right-arm17_1_'),document.getElementById('first-right-arm18_1_'),document.getElementById('first-right-arm19_1_'),document.getElementById('first-right-arm20_1_'),document.getElementById('first-right-arm21_1_'),document.getElementById('first-right-arm22_1_'),document.getElementById('first-right-arm23_1_'),document.getElementById('first-right-arm24_1_'),document.getElementById('first-right-arm25_1_')],
		// Правые гантели 0 - 8
		right_dumbbells: [document.getElementById('right-dumbbell1_1_'),document.getElementById('right-dumbbell2_2_'),document.getElementById('right-dumbbell3_2_'),document.getElementById('right-dumbbell4_2_'),document.getElementById('right-dumbbell5_2_'),document.getElementById('right-dumbbell6_2_'),document.getElementById('right-dumbbell7_1_'),document.getElementById('right-dumbbell8_1_'),document.getElementById('right-dumbbell9_1_'),document.getElementById('right-dumbbell10_1_')],
		// Правые пальцы
		right_fingers: document.getElementById('right-fingers1_2_'),
		// Все правые руки, предплечья и гантели
		all_right_dumbbells: document.getElementById('right-dumbbells'),
		first_right_arm: document.getElementById('first-right-arms'),
		right_arm: document.getElementById('right-arms')
	},	
	// Элементы чара bike-loc  WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	bikeElem: {
		// Левые голени 0 - 24
		first_left_leg: [document.getElementById('first-left-leg1_2_'),document.getElementById('first-left-leg2_1_'),document.getElementById('first-left-leg3_1_'),document.getElementById('first-left-leg4_1_'),document.getElementById('first-left-leg5_1_'),document.getElementById('first-left-leg6_1_'),document.getElementById('first-left-leg7_1_'),document.getElementById('first-left-leg8_1_'),document.getElementById('first-left-leg9_1_'),document.getElementById('first-left-leg10_1_'),document.getElementById('first-left-leg11_1_'),document.getElementById('first-left-leg12_1_'),document.getElementById('first-left-leg13_1_'),document.getElementById('first-left-leg14_1_'),document.getElementById('first-left-leg15_1_'),document.getElementById('first-left-leg16_1_'),document.getElementById('first-left-leg17_1_'),document.getElementById('first-left-leg18_1_'),document.getElementById('first-left-leg19_1_'),document.getElementById('first-left-leg20_1_'),document.getElementById('first-left-leg21_1_'),document.getElementById('first-left-leg22_1_'),document.getElementById('first-left-leg23_1_'),document.getElementById('first-left-leg24_1_'),document.getElementById('first-left-leg25_1_')],
		// Левые ляхи 0 - 24
		second_left_leg: [document.getElementById('second-left-leg1_2_'),document.getElementById('second-left-leg2_1_'),document.getElementById('second-left-leg3_1_'),document.getElementById('second-left-leg4_1_'),document.getElementById('second-left-leg5_1_'),document.getElementById('second-left-leg6_1_'),document.getElementById('second-left-leg7_1_'),document.getElementById('second-left-leg8_1_'),document.getElementById('second-left-leg9_1_'),document.getElementById('second-left-leg10_1_'),document.getElementById('second-left-leg11_1_'),document.getElementById('second-left-leg12_1_'),document.getElementById('second-left-leg13_1_'),document.getElementById('second-left-leg14_1_'),document.getElementById('second-left-leg15_1_'),document.getElementById('second-left-leg16_1_'),document.getElementById('second-left-leg17_1_'),document.getElementById('second-left-leg18_1_'),document.getElementById('second-left-leg19_1_'),document.getElementById('second-left-leg20_1_'),document.getElementById('second-left-leg21_1_'),document.getElementById('second-left-leg22_1_'),document.getElementById('second-left-leg23_1_'),document.getElementById('second-left-leg24_1_'),document.getElementById('second-left-leg25_1_')],
		// Все левые ноги, голени и педаль
		first_left_legs: document.getElementById('first-left-legs'),
		left_legs: document.getElementById('left-legs_1_'),
		// Правые голени 0 - 24
		first_right_leg: [document.getElementById('first-right-leg1'),document.getElementById('first-right-leg2_1_'),document.getElementById('first-right-leg3_1_'),document.getElementById('first-right-leg4_1_'),document.getElementById('first-right-leg5_1_'),document.getElementById('first-right-leg6_1_'),document.getElementById('first-right-leg7_1_'),document.getElementById('first-right-leg8_1_'),document.getElementById('first-right-leg9_1_'),document.getElementById('first-right-leg10_1_'),document.getElementById('first-right-leg11_1_'),document.getElementById('first-right-leg12_1_'),document.getElementById('first-right-leg13_1_'),document.getElementById('first-right-leg14_1_'),document.getElementById('first-right-leg15_1_'),document.getElementById('first-right-leg16_1_'),document.getElementById('first-right-leg17_1_'),document.getElementById('first-right-leg18_1_'),document.getElementById('first-right-leg19_1_'),document.getElementById('first-right-leg20_1_'),document.getElementById('first-right-leg21_1_'),document.getElementById('first-right-leg22_1_'),document.getElementById('first-right-leg23_1_'),document.getElementById('first-right-leg24_1_'),document.getElementById('first-right-leg25_1_')],
		// Правые ляхи 0 - 24
		second_right_leg: [document.getElementById('second-right-leg1'),document.getElementById('second-right-leg2_1_'),document.getElementById('second-right-leg3_1_'),document.getElementById('second-right-leg4_1_'),document.getElementById('second-right-leg5_1_'),document.getElementById('second-right-leg6_1_'),document.getElementById('second-right-leg7_1_'),document.getElementById('second-right-leg8_1_'),document.getElementById('second-right-leg9_1_'),document.getElementById('second-right-leg10_1_'),document.getElementById('second-right-leg11_1_'),document.getElementById('second-right-leg12_1_'),document.getElementById('second-right-leg13_1_'),document.getElementById('second-right-leg14_1_'),document.getElementById('second-right-leg15_1_'),document.getElementById('second-right-leg16_1_'),document.getElementById('second-right-leg17_1_'),document.getElementById('second-right-leg18_1_'),document.getElementById('second-right-leg19_1_'),document.getElementById('second-right-leg20_1_'),document.getElementById('second-right-leg21_1_'),document.getElementById('second-right-leg22_1_'),document.getElementById('second-right-leg23_1_'),document.getElementById('second-right-leg24_1_'),document.getElementById('second-right-leg25_1_')],
		// Все левые ноги, голени
		first_right_legs: document.getElementById('first-right-legs'),
		right_legs: document.getElementById('right-legs_1_'),
		// Велотренажеры ******************************************************************************************************************
		front_bike: [document.getElementById('front-bike1'),document.getElementById('front-bike2_1_'),document.getElementById('front-bike3_1_')], 
		back_bike: [document.getElementById('back-bike1'),document.getElementById('back-bike2_1_'),document.getElementById('back-bike3_1_')],
		// Педали
		left_pedals: document.getElementById('left-pedals'), // Группа левых педалей
		left_pedal: [document.getElementById('left-pedal1'),document.getElementById('left-pedal2'),document.getElementById('left-pedal3'),], 
		right_pedals: document.getElementById('right-pedals'), // Группа правых педалей
		right_pedal: [document.getElementById('right-pedal1'),document.getElementById('right-pedal2'),document.getElementById('right-pedal3')], 
		// Скорости велосипедов
		bike_speeds: document.getElementById('bike-speeds'),
		down_speed: document.getElementById('down-speed'),
		up_speed: document.getElementById('up-speed'),
		number_speed: document.getElementById('number-speed'),
		// Тела 0 - 23 *********************************************************************************************************************
		bodys: [document.getElementById('body1_3_'),document.getElementById('body3_2_'),document.getElementById('body4_2_'),document.getElementById('body5_2_'),document.getElementById('body6_2_'),document.getElementById('body7_2_'),document.getElementById('body8_2_'),document.getElementById('body9_2_'),document.getElementById('body10_2_'),document.getElementById('body11_2_'),document.getElementById('body12_2_'),document.getElementById('body13_2_'),document.getElementById('body14_2_'),document.getElementById('body15_2_'),document.getElementById('body16_2_'),document.getElementById('body17_2_'),document.getElementById('body18_2_'),document.getElementById('body19_2_'),document.getElementById('body20_2_'),document.getElementById('body21_2_'),document.getElementById('body22_2_'),document.getElementById('body23_2_'),document.getElementById('body24_2_'),document.getElementById('body25_2_')],
		// Труселя 0 - 21
		underpant: [document.getElementById('underpants1_2_'),document.getElementById('underpants3_1_'),document.getElementById('underpants4_1_'),document.getElementById('underpants5_1_'),document.getElementById('underpants6_1_'),document.getElementById('underpants7_1_'),document.getElementById('underpants9_1_'),document.getElementById('underpants11_1_'),document.getElementById('underpants12_1_'),document.getElementById('underpants13_1_'),document.getElementById('underpants14_1_'),document.getElementById('underpants15_1_'),document.getElementById('underpants16_1_'),document.getElementById('underpants17_1_'),document.getElementById('underpants18_1_'),document.getElementById('underpants19_1_'),document.getElementById('underpants20_1_'),document.getElementById('underpants21_1_'),document.getElementById('underpants22_1_'),document.getElementById('underpants23_2_'),document.getElementById('underpants24_1_'),document.getElementById('underpants25_1_')],
		// Веки 
		rightUpperEyelid: document.getElementById('rigth-upper-eyelid_3_'),
		rightLowerEyelid: document.getElementById('right-lower-eyelid_3_'),
		leftUpperEyelid: document.getElementById('left-upper-eyelid_3_'),
		leftLowerEyelid: document.getElementById('left-lower-eyelid_3_'),
		// Лица 0 - 6
		faces: [document.getElementById('face1_3_'),document.getElementById('face18_2_'),document.getElementById('face19_2_'),document.getElementById('face20_2_'),document.getElementById('face21_2_'),document.getElementById('face22_2_'),document.getElementById('face25_2_')],
		// Рты 
		mouth1: document.getElementById('mouth1_3_'),
		mouth2: document.getElementById('mouth2_3_'),
		// Левые руки 0 - 24 ****************************************************************************************************************
		second_left_arms: [document.getElementById('second-left-arm1_3_'),document.getElementById('second-left-arm2_2_'),document.getElementById('second-left-arm3_2_'),document.getElementById('second-left-arm4_2_'),document.getElementById('second-left-arm5_2_'),document.getElementById('second-left-arm6_2_'),document.getElementById('second-left-arm7_2_'),document.getElementById('second-left-arm8_2_'),document.getElementById('second-left-arm9_2_'),document.getElementById('second-left-arm10_2_'),document.getElementById('second-left-arm11_2_'),document.getElementById('second-left-arm12_2_'),document.getElementById('second-left-arm13_2_'),document.getElementById('second-left-arm14_2_'),document.getElementById('second-left-arm15_2_'),document.getElementById('second-left-arm16_2_'),document.getElementById('second-left-arm17_2_'),document.getElementById('second-left-arm18_2_'),document.getElementById('second-left-arm19_2_'),document.getElementById('second-left-arm20_2_'),document.getElementById('second-left-arm21_2_'),document.getElementById('second-left-arm22_2_'),document.getElementById('second-left-arm23_2_'),document.getElementById('second-left-arm24_2_'),document.getElementById('second-left-arm25_2_')],
		// Левые предплечья 0 - 24
		first_left_arms: [document.getElementById('first-left-arm1_2_'),document.getElementById('first-left-arm2_1_'),document.getElementById('first-left-arm3_1_'),document.getElementById('first-left-arm4_1_'),document.getElementById('first-left-arm5_1_'),document.getElementById('first-left-arm6_1_'),document.getElementById('first-left-arm7_2_'),document.getElementById('first-left-arm8_2_'),document.getElementById('first-left-arm9_2_'),document.getElementById('first-left-arm10_2_'),document.getElementById('first-left-arm11_2_'),document.getElementById('first-left-arm12_2_'),document.getElementById('first-left-arm13_2_'),document.getElementById('first-left-arm14_2_'),document.getElementById('first-left-arm15_2_'),document.getElementById('first-left-arm16_2_'),document.getElementById('first-left-arm17_2_'),document.getElementById('first-left-arm18_2_'),document.getElementById('first-left-arm19_2_'),document.getElementById('first-left-arm20_2_'),document.getElementById('first-left-arm21_2_'),document.getElementById('first-left-arm22_2_'),document.getElementById('first-left-arm23_2_'),document.getElementById('first-left-arm24_2_'),document.getElementById('first-left-arm25_2_')], 
		// Все левые руки, предплечья
		first_left_arm: document.getElementById('first-left-arms_1_'),
		left_arm: document.getElementById('left-arms_1_'),
		// Правые руки 0 - 24 ****************************************************************************************************************
		second_right_arms: [document.getElementById('second-right-arm1_3_'),document.getElementById('second-right-arm2_2_'),document.getElementById('second-right-arm3_2_'),document.getElementById('second-right-arm4_2_'),document.getElementById('second-right-arm5_2_'),document.getElementById('second-right-arm6_2_'),document.getElementById('second-right-arm7_2_'),document.getElementById('second-right-arm8_2_'),document.getElementById('second-right-arm9_2_'),document.getElementById('second-right-arm10_2_'),document.getElementById('second-right-arm11_2_'),document.getElementById('second-right-arm12_2_'),document.getElementById('second-right-arm13_2_'),document.getElementById('second-right-arm14_2_'),document.getElementById('second-right-arm15_2_'),document.getElementById('second-right-arm16_2_'),document.getElementById('second-right-arm17_2_'),document.getElementById('second-right-arm18_2_'),document.getElementById('second-right-arm19_2_'),document.getElementById('second-right-arm20_2_'),document.getElementById('second-right-arm21_2_'),document.getElementById('second-right-arm22_2_'),document.getElementById('second-right-arm23_2_'),document.getElementById('second-right-arm24_2_'),document.getElementById('second-right-arm25_2_')],
		// Правые предплечья 0 - 24
		first_right_arms: [document.getElementById('first-right-arm1_2_'),document.getElementById('first-right-arm2_1_'),document.getElementById('first-right-arm3_1_'),document.getElementById('first-right-arm4_1_'),document.getElementById('first-right-arm5_1_'),document.getElementById('first-right-arm6_1_'),document.getElementById('first-right-arm7_2_'),document.getElementById('first-right-arm8_2_'),document.getElementById('first-right-arm9_2_'),document.getElementById('first-right-arm10_2_'),document.getElementById('first-right-arm11_2_'),document.getElementById('first-right-arm12_2_'),document.getElementById('first-right-arm13_2_'),document.getElementById('first-right-arm14_2_'),document.getElementById('first-right-arm15_2_'),document.getElementById('first-right-arm16_2_'),document.getElementById('first-right-arm17_2_'),document.getElementById('first-right-arm18_2_'),document.getElementById('first-right-arm19_2_'),document.getElementById('first-right-arm20_2_'),document.getElementById('first-right-arm21_2_'),document.getElementById('first-right-arm22_2_'),document.getElementById('first-right-arm23_2_'),document.getElementById('first-right-arm24_2_'),document.getElementById('first-right-arm25_2_')],
		// Все правые руки, предплечья и гантели
		first_right_arm: document.getElementById('first-right-arms_1_'),
		right_arm: document.getElementById('right-arms_1_')
	},	
	// Элементы в главном окне  WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	moneyMain: document.getElementById('money-number_1_'),
	mainBodyLvl: document.getElementById('body-lvl'),
	mainBodyLvlNumber: document.getElementById('bodylvl-number'),
	mainLegsLvl: document.getElementById('legs-lvl'),
	mainLegsLvlNumber: document.getElementById('legslvl-number'),
	expProgressDumb: document.querySelector('.progress-exp-dumb'),
	expProgressBike: document.querySelector('.progress-exp-bike'),
	staminaProgress: document.querySelector('.progress-stamina'),
	staminaProgressRed: document.querySelector('.progress-stamina-red'),
	energyMain: document.getElementById('energy-main_1_'),
	energyTimer: document.getElementById('energy-timer_1_'),
	proteinMain: document.getElementById('protein-main_1_'),
	proteinTimer: document.getElementById('protein-timer_1_'),
	// Кнопки менюх
	btns_menu: document.getElementById('game-btns'), 
	fonBtnMenu: document.getElementById('fon-btn-menu'), 
	fonBtnInvent: document.getElementById('fon-btn-inventory'), 
	fonBtnShop: document.getElementById('fon-btn-shop'), 
	fonBtnOptions: document.getElementById('fon-btn-optoins'), 
	// Меню чара  **********************************************************************************************************************
	btnCharMenu: document.getElementById('btn_x5F_menu_1_'), // Кнопка меню чара
	charMenu: document.getElementById('game-menu'), // Меню чара
	// Уровень тела
	bodyLvl: document.getElementById('body-lvl-number_1_'),
	bodyExp: document.getElementById('body-exp-number_1_'),
	bodyMaxExp: document.getElementById('body-maxexp-number_1_'),
	// Уровень ног
	legsLvl: document.getElementById('legs-lvl-number_1_'),
	legsExp: document.getElementById('legs-exp-number_1_'),
	legsMaxExp: document.getElementById('legs-maxexp-number_1_'),
	// Прокачка тела
	bodyForce: document.getElementById('body-force-number_1_'),
	bodyNeedPoints: document.getElementById('body-force-need-number_1_'),
	bodyInfo: document.getElementById('body-force-info'),
	bodyForceBtnUp: document.getElementById('up-body-force_1_'),
	// Прокачка ног
	legsForce: document.getElementById('legs-force-number_1_'),
	legsNeedPoints: document.getElementById('legs-force-need-number_1_'),
	legsInfo: document.getElementById('legs-force-info'),
	legsForceBtnUp: document.getElementById('up-legs-force_1_'),
	// Прокачка выносливости
	stamina: document.getElementById('stamina-number_3_'),
	staminaNeedPoints: document.getElementById('stamina-need-number_3_'),
	staminaInfo: document.getElementById('stamina-info'),
	staminaBtnUp: document.getElementById('up-stamina_3_'),
	// Прокачка востановления выносливости
	recStam: document.getElementById('recoverystamina-number'),
	recStamNeedPoints: document.getElementById('recoverystamina-need-number'),
	recStamInfo: document.getElementById('recoverystamina-info'),
	recStamBtnUp: document.getElementById('up-recoverustamina'),
	// Очки статусов
	statusPoints: document.getElementById('sp-number_1_'),
	// Меню инвентаря dumb  ******************************************************************************************************
	btnInventoryDumb: document.getElementById('btn_x5F_inventory_1_'),
	charInventoryDumb: document.getElementById('game-inventory-dumb'),
	items_inventoryDumb: [document.getElementById('dumbbell1-inventary'),document.getElementById('dumbbell2-inventary'),document.getElementById('dumbbell3-inventary'),document.getElementById('dumbbell4-inventary'),document.getElementById('dumbbell5-inventary'),document.getElementById('dumbbell6-inventary'),document.getElementById('dumbbell7-inventary'),document.getElementById('dumbbell8-inventary'),document.getElementById('dumbbell9-inventary'),document.getElementById('dumbbell10-inventary'),document.getElementById('energy-inventary'),document.getElementById('protein-inventary'),document.getElementById('steroids-inventary')],
	stimQuantInventDumb: [document.getElementById('quantity-energetic-invent'),document.getElementById('quantity-protein-invent'),document.getElementById('quantity-steroids-invent')],
	// Меню инвентаря bike **************************************************************************************************************
	btnInventoryBike: document.getElementById('btn_x5F_inventory_1_'),
	charInventoryBike: document.getElementById('game-inventory-bike'),
	items_inventoryBike: [document.getElementById('bike1-inventory'), document.getElementById('bike2-inventory'), document.getElementById('bike3-inventory'),document.getElementById('energy-inventary2'),document.getElementById('protein-inventary2'),document.getElementById('steroids-inventary2')],
	stimQuantInventBike: [document.getElementById('quantity-energetic-invent2'),document.getElementById('quantity-protein-invent2'),document.getElementById('quantity-steroids-invent2')],
	// Меню магазина  ***************************************************************************************************************
	btnShop: document.getElementById('btn_x5F_shop_1_'),
	charShop: document.getElementById('game-shop'),
	itemsShop: document.getElementById('items-shop'),
	shopAreaCkick: document.getElementById('shop-area'),
	moneyShop: document.getElementById('game-money-shop'),
	moneyNumberShop: document.getElementById('money-number-shop'),
	dumbbellsShop: [document.getElementById('dumbbell1-shop'),document.getElementById('dumbbell2-shop'),document.getElementById('dumbbell3-shop'),document.getElementById('dumbbell4-shop'),document.getElementById('dumbbell5-shop'),document.getElementById('dumbbell6-shop'),document.getElementById('dumbbell7-shop'),document.getElementById('dumbbell8-shop'),document.getElementById('dumbbell9-shop'),document.getElementById('dumbbell10-shop')],
	bikesShop: [document.getElementById('bike1-shop'),document.getElementById('bike2-shop'),document.getElementById('bike2-shop')],
	stimulantsShop: [document.getElementById('energy-shop'),document.getElementById('energy-shop'),document.getElementById('steroids-shop')],
	// Окошки информации о предметах в магазине
	infoShop: document.getElementById('game-info-shop'), 
	infoInvent: [document.getElementById('info-dumb1'),document.getElementById('info-dumb2'),document.getElementById('info-dumb3'),document.getElementById('info-dumb4'),document.getElementById('info-dumb5'),document.getElementById('info-dumb6'),document.getElementById('info-dumb7'),document.getElementById('info-dumb8'),document.getElementById('info-dumb9'),document.getElementById('info-dumb10'),document.getElementById('info-bike1'),document.getElementById('info-bike2'),document.getElementById('info-bike3'),document.getElementById('havent-money'),document.getElementById('info-energetic'),document.getElementById('info-protein'),document.getElementById('info-steroids')],
	// Кнопки увеличения и уменьшения количество покупаемых стимуляторов и стоимость
	stimPlus: [document.getElementById('energetic-plus'),document.getElementById('protein-plus'),document.getElementById('steroids-plus')],
	stimMinus: [document.getElementById('energetic-minus'),document.getElementById('protein-minus'),document.getElementById('steroids-minus')],
	quantityStim: [document.getElementById('quantity-energetic-shop'),document.getElementById('quantity-protein-shop'),document.getElementById('quantity-steroids-shop')],
	priceStim: [document.getElementById('price-energetic'),document.getElementById('price-protein'),document.getElementById('price-steroids')],
	// Кнопки покупки предметов в магазине
	btnsBuy: [document.getElementById('buy-dumb2'),document.getElementById('buy-dumb3'),document.getElementById('buy-dumb4'),document.getElementById('buy-dumb5'),document.getElementById('buy-dumb6'),document.getElementById('buy-dumb7'),document.getElementById('buy-dumb8'),document.getElementById('buy-dumb9'),document.getElementById('buy-dumb10'),document.getElementById('buy-bike2'),document.getElementById('buy-bike3')],
	// Меню опций ****************************************************************************************************************
	btnOptions: document.getElementById('btn_x5F_options_1_'),
	charOptions: document.getElementById('game-options'),
	quantityVolume: document.getElementById('quantity-volume'),
	// Звуки ************************************************************************************************************************
	buttonSound: document.getElementById('button-sound'), 
	moneySound: document.getElementById('money-sound'), 
	eatingSound: document.getElementById('eating-sound'), 
	moanSound: document.getElementById('moan-sound'), 
	// Несохраняемые данные   *******************************************************************************************************
	// Получение экспы и денег единожды до полного опуска рук 
	exp2FlagDumb: false,
	exp3FlagDumb: false,
	// Получение экспы и денег 
	expMoneyFlag: false,
	// Поворот ног
	rotateFirstLeftLeg: 0,
	rotateFirstRightLeg: 0,
	rotateLeg: 0,
	sumRotate: null, // Сумма повотора ног для снятия данных
	// Поворот и позиции рук и ног
	rotateFirstArm: 0,
	rotateArm: 0,
	positionUp1: true, 
	positionUp2: false, 
	positionUp3: false,
	transLeftPedals: 0,
	transRightPedals: 0,
	clickFlagDumb: false, // флаг единственного клика
	clickFlagBike: false, // флаг единственного клика
	clickBackFlag: false, // Настройка скорости опуска рук
	startBackArmFlag: false, // Флаг запуска при клике функции опуска рук
	intervalRecStam: null, // Интервал востановления стамины
	startRecStamFlag: false, // Флаг запуска функции востановления стамины
	minusStamFlag: false, // Флаг отнимания стамины
	rotateNumberHalfDumb: false, // Флаг разделения на 2 rotateNumber
	rotateNumberHalfBike: false, // Флаг разделения на 2 rotateNumber
	plusMinusNumberFlag: 'plus', // Флаг значения rotateNumber плюс или минус
	autoInterval: null, // Интервал автоматического кручения педалей
	downRotateFlag: false, // Флаг единственного уменьшения вращения
	notOpenMenusFlag: false, // Флаг предотвращения открывания менюх
	stopAutoRotateCount: 0, // Счетчик остановки автовращения педалей
	// Интервал таймера стимуляторов
	intervalEnergyTimer: null, 
	intervalProteinTimer: null, 
	// Опуск рук
	backRotateNumber: null,
	backInterval: null,
	// Флаги входа в меню
	menuFlag: false,
	inventoryFlag: false,
	shopFlag: false,
	optionsFlag: false,
	// Поворот рук и ног
	rotateNumberDumb: null, 
	rotateNumberBike: null,
	// Флаги магаза
	shopMoveFlag: false,
	// Переменные стимуляторов
	stimulateNumber: 1,
	energeticPrice: 1000,
	proteinPrice: 2000,
	steroidsPrice: 15000,
	// Обьект для записи в локал сторэдж
	serialDumbData: null,
	serialBikeData: null,
	serialCharData: null,
	serialInventData: null,
	serialVolumeData: null,
	serialTimerData: null,
	serialStartWindows: null,
	serialAdData: null,
	// Методы **************************************************************************************************************************
	//Методы изменения лица при физ нагрузке
	changeMouth: function() {
		this.dumbElem.mouth2.style.display = 'block';
		this.dumbElem.rightUpperEyelid.style.transform = 'translateY(3px)';
		this.dumbElem.rightLowerEyelid.style.transform = 'translateY(-3px)';
		this.dumbElem.leftUpperEyelid.style.transform = 'translateY(3px)';
		this.dumbElem.leftLowerEyelid.style.transform = 'translateY(-3px)';
		this.dumbElem.rightUpperEyelid.style.WebkitTransform = 'translateY(3px)';
		this.dumbElem.rightLowerEyelid.style.WebkitTransform = 'translateY(-3px)';
		this.dumbElem.leftUpperEyelid.style.WebkitTransform = 'translateY(3px)';
		this.dumbElem.leftLowerEyelid.style.WebkitTransform = 'translateY(-3px)';
		this.bikeElem.mouth2.style.display = 'block';
		this.bikeElem.rightUpperEyelid.style.transform = 'translateY(3px)';
		this.bikeElem.rightLowerEyelid.style.transform = 'translateY(-3px)';
		this.bikeElem.leftUpperEyelid.style.transform = 'translateY(3px)';
		this.bikeElem.leftLowerEyelid.style.transform = 'translateY(-3px)';
		this.bikeElem.rightUpperEyelid.style.WebkitTransform = 'translateY(3px)';
		this.bikeElem.rightLowerEyelid.style.WebkitTransform = 'translateY(-3px)';
		this.bikeElem.leftUpperEyelid.style.WebkitTransform = 'translateY(3px)';
		this.bikeElem.leftLowerEyelid.style.WebkitTransform = 'translateY(-3px)';
	},
	backMouth: function() {
		this.dumbElem.mouth2.style.display = 'none';
		this.dumbElem.rightUpperEyelid.style.transform = 'translateY(0px)';
		this.dumbElem.rightLowerEyelid.style.transform = 'translateY(0px)';
		this.dumbElem.leftUpperEyelid.style.transform = 'translateY(0px)';
		this.dumbElem.leftLowerEyelid.style.transform = 'translateY(0px)';
		this.dumbElem.rightUpperEyelid.style.WebkitTransform = 'translateY(0px)';
		this.dumbElem.rightLowerEyelid.style.WebkitTransform = 'translateY(0px)';
		this.dumbElem.leftUpperEyelid.style.WebkitTransform = 'translateY(0px)';
		this.dumbElem.leftLowerEyelid.style.WebkitTransform = 'translateY(0px)';
		this.bikeElem.mouth2.style.display = 'none';
		this.bikeElem.rightUpperEyelid.style.transform = 'translateY(0px)';
		this.bikeElem.rightLowerEyelid.style.transform = 'translateY(0px)';
		this.bikeElem.leftUpperEyelid.style.transform = 'translateY(0px)';
		this.bikeElem.leftLowerEyelid.style.transform = 'translateY(0px)';
		this.bikeElem.rightUpperEyelid.style.WebkitTransform = 'translateY(0px)';
		this.bikeElem.rightLowerEyelid.style.WebkitTransform = 'translateY(0px)';
		this.bikeElem.leftUpperEyelid.style.WebkitTransform = 'translateY(0px)';
		this.bikeElem.leftLowerEyelid.style.WebkitTransform = 'translateY(0px)';
	},
	// Методы увеличения уровня тела  *************************************************************************************************
	upLvlBodyCase: function() {
		// lvl
		this.dumbData.bodyLvlNumber += 1;
		this.mainBodyLvlNumber.innerHTML = this.dumbData.bodyLvlNumber;
		this.bodyLvl.innerHTML = this.dumbData.bodyLvlNumber;
		// exp
		this.dumbData.bodyExpNumber = this.dumbData.bodyExpNumber - this.dumbData.bodyMaxExpNumber;
		this.expProgressDumb.value = this.dumbData.bodyExpNumber;
		this.bodyExp.innerHTML = this.dumbData.bodyExpNumber.toFixed(1);
		this.dumbData.bodyMaxExpNumber = arguments[0];
		this.expProgressDumb.max = this.dumbData.bodyMaxExpNumber;
		this.bodyMaxExp.innerHTML = this.dumbData.bodyMaxExpNumber;
		// status points
		this.charData.statusPointsNumber += arguments[1];
		this.statusPoints.innerHTML = this.charData.statusPointsNumber;
		// arm power
		this.dumbData.armPowerCount += 1;
		if (this.dumbData.armPowerCount < 15) {
			this.dumbData.armPower *= 1.05;
		} else if (this.dumbData.armPowerCount > 14 && this.dumbData.armPowerCount < 29) {
			this.dumbData.armPower *= 1.045;
		} else if (this.dumbData.armPowerCount > 28 && this.dumbData.armPowerCount < 43) {
			this.dumbData.armPower *= 1.04;
		} else if (this.dumbData.armPowerCount > 42 && this.dumbData.armPowerCount < 57) {
			this.dumbData.armPower *= 1.035;
		} else if (this.dumbData.armPowerCount > 56 && this.dumbData.armPowerCount < 71) {
			this.dumbData.armPower *= 1.03;
		}
		if (this.positionUp2) {
			this.rotateNumberDumb = (this.dumbData.armPower - this.dumbData.dumbWeight) * 0.8;
		} else if (this.positionUp3) {
			this.rotateNumberDumb = (this.dumbData.armPower - this.dumbData.dumbWeight) * 0.64;
		}
		if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
			this.rotateNumberDumb *= 0.5;
		}
		this.dumbData.armPowerInfo *= 1.05;
		this.bodyInfo.innerHTML = this.dumbData.armPowerInfo.toFixed(1);
		// stamina
		this.charData.staminaMaxProgressNumber += 10;
		this.staminaProgress.max = this.charData.staminaMaxProgressNumber;
		this.charData.staminaProgressNumber = this.charData.staminaMaxProgressNumber;
		this.staminaProgress.value = this.charData.staminaProgressNumber;
		this.staminaInfo.innerHTML = this.charData.staminaMaxProgressNumber.toFixed(1);
		// recovery stamina
		this.charData.recStamInterval *= 0.96;
		this.charData.recStamInfoNumber /= 0.96;
		this.recStamInfo.innerHTML = this.charData.recStamInfoNumber.toFixed(1);
		// исчезающие и появляющиеся элементы
		arguments[2].style.display = 'none';
		arguments[3].style.display = 'none';
		arguments[4].style.display = 'none';
		arguments[5].style.display = 'none';
		arguments[6].style.display = 'none';
		arguments[7].style.display = 'none';
		arguments[8].style.display = 'block';
		arguments[9].style.display = 'block';
		arguments[10].style.display = 'block';
		arguments[11].style.display = 'block';
		arguments[12].style.display = 'block';
		arguments[13].style.display = 'block';
		arguments[14].style.display = 'none';
		arguments[15].style.display = 'none';
		arguments[16].style.display = 'none';
		arguments[17].style.display = 'none';
		arguments[18].style.display = 'none';
		arguments[19].style.display = 'none';
		arguments[20].style.display = 'block';
		arguments[21].style.display = 'block';
		arguments[22].style.display = 'block';
		arguments[23].style.display = 'block';
		arguments[24].style.display = 'block';
		arguments[25].style.display = 'block';
		// смещение точек transform-origin
		this.dumbData.toLeftArmX -= arguments[26];
		this.dumbData.toFirstLeftArmX -= arguments[26];
		this.dumbData.toRightArmX += arguments[26];
		this.dumbData.toFirstRightArmX += arguments[26];
		this.dumbElem.left_arm.style.transformOrigin = this.dumbData.toLeftArmX + 'px 631.3px';
		this.dumbElem.first_left_arm.style.transformOrigin = this.dumbData.toFirstLeftArmX + 'px 716.1px';
		this.dumbElem.right_arm.style.transformOrigin = this.dumbData.toRightArmX + 'px 631.3px';
		this.dumbElem.first_right_arm.style.transformOrigin = this.dumbData.toFirstRightArmX + 'px 716.1px';
		this.dumbElem.left_arm.style.WebkitTransformOrigin = this.dumbData.toLeftArmX + 'px 631.3px';
		this.dumbElem.first_left_arm.style.WebkitTransformOrigin = this.dumbData.toFirstLeftArmX + 'px 716.1px';
		this.dumbElem.right_arm.style.WebkitTransformOrigin = this.dumbData.toRightArmX + 'px 631.3px';
		this.dumbElem.first_right_arm.style.WebkitTransformOrigin = this.dumbData.toFirstRightArmX + 'px 716.1px';
		// смещение пальцев и гантелей
		this.dumbData.transLeft -= arguments[26];
		this.dumbData.transRight += arguments[26];
		this.dumbElem.left_fingers.style.transform = 'translate(' + this.dumbData.transLeft + 'px)';
		this.dumbElem.right_fingers.style.transform = 'translate(' + this.dumbData.transRight + 'px)';
		this.dumbElem.all_left_dumbbells.style.transform = 'translate(' + this.dumbData.transLeft + 'px)';
		this.dumbElem.all_right_dumbbells.style.transform = 'translate(' + this.dumbData.transRight + 'px)';
		this.dumbElem.left_fingers.style.WebkitTransform = 'translate(' + this.dumbData.transLeft + 'px)';
		this.dumbElem.right_fingers.style.WebkitTransform = 'translate(' + this.dumbData.transRight + 'px)';
		this.dumbElem.all_left_dumbbells.style.WebkitTransform = 'translate(' + this.dumbData.transLeft + 'px)';
		this.dumbElem.all_right_dumbbells.style.WebkitTransform = 'translate(' + this.dumbData.transRight + 'px)';
	},
	upBodyLvl: function() {
		switch (this.dumbData.bodyLvlNumber) {
			case 1:
				this.upLvlBodyCase(40, 1, this.dumbElem.second_left_arms[0], this.dumbElem.first_left_arms[0], this.dumbElem.second_right_arms[0], this.dumbElem.first_right_arms[0], this.dumbElem.bodys[0], this.dumbElem.faces[0], this.dumbElem.second_left_arms[1], this.dumbElem.first_left_arms[1], this.dumbElem.second_right_arms[1], this.dumbElem.first_right_arms[1], this.dumbElem.bodys[0], this.dumbElem.faces[0],this.bikeElem.second_left_arms[0], this.bikeElem.first_left_arms[0], this.bikeElem.second_right_arms[0], this.bikeElem.first_right_arms[0], this.bikeElem.bodys[0], this.bikeElem.faces[0], this.bikeElem.second_left_arms[1], this.bikeElem.first_left_arms[1], this.bikeElem.second_right_arms[1], this.bikeElem.first_right_arms[1], this.bikeElem.bodys[0], this.bikeElem.faces[0], 0);
			break;
			case 2:
				this.upLvlBodyCase(80, 2, this.dumbElem.second_left_arms[1], this.dumbElem.first_left_arms[1], this.dumbElem.second_right_arms[1], this.dumbElem.first_right_arms[1], this.dumbElem.bodys[0], this.dumbElem.faces[0], this.dumbElem.second_left_arms[2], this.dumbElem.first_left_arms[2], this.dumbElem.second_right_arms[2], this.dumbElem.first_right_arms[2], this.dumbElem.bodys[1], this.dumbElem.faces[0], this.bikeElem.second_left_arms[1], this.bikeElem.first_left_arms[1], this.bikeElem.second_right_arms[1], this.bikeElem.first_right_arms[1], this.bikeElem.bodys[0], this.bikeElem.faces[0], this.bikeElem.second_left_arms[2], this.bikeElem.first_left_arms[2], this.bikeElem.second_right_arms[2], this.bikeElem.first_right_arms[2], this.bikeElem.bodys[1], this.bikeElem.faces[0], 0);
			break;
			case 3:
				this.upLvlBodyCase(155, 3, this.dumbElem.second_left_arms[2], this.dumbElem.first_left_arms[2], this.dumbElem.second_right_arms[2], this.dumbElem.first_right_arms[2], this.dumbElem.bodys[1], this.dumbElem.faces[0], this.dumbElem.second_left_arms[3], this.dumbElem.first_left_arms[3], this.dumbElem.second_right_arms[3], this.dumbElem.first_right_arms[3], this.dumbElem.bodys[2], this.dumbElem.faces[0], this.bikeElem.second_left_arms[2], this.bikeElem.first_left_arms[2], this.bikeElem.second_right_arms[2], this.bikeElem.first_right_arms[2], this.bikeElem.bodys[1], this.bikeElem.faces[0], this.bikeElem.second_left_arms[3], this.bikeElem.first_left_arms[3], this.bikeElem.second_right_arms[3], this.bikeElem.first_right_arms[3], this.bikeElem.bodys[2], this.bikeElem.faces[0], 0);
			break;
			case 4:
				this.upLvlBodyCase(295, 4, this.dumbElem.second_left_arms[3], this.dumbElem.first_left_arms[3], this.dumbElem.second_right_arms[3], this.dumbElem.first_right_arms[3], this.dumbElem.bodys[2], this.dumbElem.faces[0], this.dumbElem.second_left_arms[4], this.dumbElem.first_left_arms[4], this.dumbElem.second_right_arms[4], this.dumbElem.first_right_arms[4], this.dumbElem.bodys[3], this.dumbElem.faces[0], this.bikeElem.second_left_arms[3], this.bikeElem.first_left_arms[3], this.bikeElem.second_right_arms[3], this.bikeElem.first_right_arms[3], this.bikeElem.bodys[2], this.bikeElem.faces[0], this.bikeElem.second_left_arms[4], this.bikeElem.first_left_arms[4], this.bikeElem.second_right_arms[4], this.bikeElem.first_right_arms[4], this.bikeElem.bodys[3], this.bikeElem.faces[0], 0);
			break;
			case 5:
				this.upLvlBodyCase(560, 4, this.dumbElem.second_left_arms[4], this.dumbElem.first_left_arms[4], this.dumbElem.second_right_arms[4], this.dumbElem.first_right_arms[4], this.dumbElem.bodys[3], this.dumbElem.faces[0], this.dumbElem.second_left_arms[5], this.dumbElem.first_left_arms[5], this.dumbElem.second_right_arms[5], this.dumbElem.first_right_arms[5], this.dumbElem.bodys[4], this.dumbElem.faces[0], this.bikeElem.second_left_arms[4], this.bikeElem.first_left_arms[4], this.bikeElem.second_right_arms[4], this.bikeElem.first_right_arms[4], this.bikeElem.bodys[3], this.bikeElem.faces[0], this.bikeElem.second_left_arms[5], this.bikeElem.first_left_arms[5], this.bikeElem.second_right_arms[5], this.bikeElem.first_right_arms[5], this.bikeElem.bodys[4], this.bikeElem.faces[0], 1.5);
			break;
			case 6:
				this.upLvlBodyCase(1040, 5, this.dumbElem.second_left_arms[5], this.dumbElem.first_left_arms[5], this.dumbElem.second_right_arms[5], this.dumbElem.first_right_arms[5], this.dumbElem.bodys[4], this.dumbElem.faces[0], this.dumbElem.second_left_arms[6], this.dumbElem.first_left_arms[6], this.dumbElem.second_right_arms[6], this.dumbElem.first_right_arms[6], this.dumbElem.bodys[5], this.dumbElem.faces[0], this.bikeElem.second_left_arms[5], this.bikeElem.first_left_arms[5], this.bikeElem.second_right_arms[5], this.bikeElem.first_right_arms[5], this.bikeElem.bodys[4], this.bikeElem.faces[0], this.bikeElem.second_left_arms[6], this.bikeElem.first_left_arms[6], this.bikeElem.second_right_arms[6], this.bikeElem.first_right_arms[6], this.bikeElem.bodys[5], this.bikeElem.faces[0], 1.5);
			break;
			case 7:
				this.upLvlBodyCase(1910, 6, this.dumbElem.second_left_arms[6], this.dumbElem.first_left_arms[6], this.dumbElem.second_right_arms[6], this.dumbElem.first_right_arms[6], this.dumbElem.bodys[5], this.dumbElem.faces[0], this.dumbElem.second_left_arms[7], this.dumbElem.first_left_arms[7], this.dumbElem.second_right_arms[7], this.dumbElem.first_right_arms[7], this.dumbElem.bodys[6], this.dumbElem.faces[0], this.bikeElem.second_left_arms[6], this.bikeElem.first_left_arms[6], this.bikeElem.second_right_arms[6], this.bikeElem.first_right_arms[6], this.bikeElem.bodys[5], this.bikeElem.faces[0], this.bikeElem.second_left_arms[7], this.bikeElem.first_left_arms[7], this.bikeElem.second_right_arms[7], this.bikeElem.first_right_arms[7], this.bikeElem.bodys[6], this.bikeElem.faces[0], 2);
			break;
			case 8:
				this.upLvlBodyCase(3460, 7, this.dumbElem.second_left_arms[7], this.dumbElem.first_left_arms[7], this.dumbElem.second_right_arms[7], this.dumbElem.first_right_arms[7], this.dumbElem.bodys[6], this.dumbElem.faces[0], this.dumbElem.second_left_arms[8], this.dumbElem.first_left_arms[8], this.dumbElem.second_right_arms[8], this.dumbElem.first_right_arms[8], this.dumbElem.bodys[7], this.dumbElem.faces[0], this.bikeElem.second_left_arms[7], this.bikeElem.first_left_arms[7], this.bikeElem.second_right_arms[7], this.bikeElem.first_right_arms[7], this.bikeElem.bodys[6], this.bikeElem.faces[0], this.bikeElem.second_left_arms[8], this.bikeElem.first_left_arms[8], this.bikeElem.second_right_arms[8], this.bikeElem.first_right_arms[8], this.bikeElem.bodys[7], this.bikeElem.faces[0], 2.5);
			break;
			case 9:
				this.upLvlBodyCase(6175, 7, this.dumbElem.second_left_arms[8], this.dumbElem.first_left_arms[8], this.dumbElem.second_right_arms[8], this.dumbElem.first_right_arms[8], this.dumbElem.bodys[7], this.dumbElem.faces[0], this.dumbElem.second_left_arms[9], this.dumbElem.first_left_arms[9], this.dumbElem.second_right_arms[9], this.dumbElem.first_right_arms[9], this.dumbElem.bodys[8], this.dumbElem.faces[0], this.bikeElem.second_left_arms[8], this.bikeElem.first_left_arms[8], this.bikeElem.second_right_arms[8], this.bikeElem.first_right_arms[8], this.bikeElem.bodys[7], this.bikeElem.faces[0], this.bikeElem.second_left_arms[9], this.bikeElem.first_left_arms[9], this.bikeElem.second_right_arms[9], this.bikeElem.first_right_arms[9], this.bikeElem.bodys[8], this.bikeElem.faces[0], 2);
			break;
			case 10:
				this.upLvlBodyCase(10850, 8, this.dumbElem.second_left_arms[9], this.dumbElem.first_left_arms[9], this.dumbElem.second_right_arms[9], this.dumbElem.first_right_arms[9], this.dumbElem.bodys[8], this.dumbElem.faces[0], this.dumbElem.second_left_arms[10], this.dumbElem.first_left_arms[10], this.dumbElem.second_right_arms[10], this.dumbElem.first_right_arms[10], this.dumbElem.bodys[9], this.dumbElem.faces[0], this.bikeElem.second_left_arms[9], this.bikeElem.first_left_arms[9], this.bikeElem.second_right_arms[9], this.bikeElem.first_right_arms[9], this.bikeElem.bodys[8], this.bikeElem.faces[0], this.bikeElem.second_left_arms[10], this.bikeElem.first_left_arms[10], this.bikeElem.second_right_arms[10], this.bikeElem.first_right_arms[10], this.bikeElem.bodys[9], this.bikeElem.faces[0], 2.5);
			break;
			case 11:
				this.upLvlBodyCase(18770, 9, this.dumbElem.second_left_arms[10], this.dumbElem.first_left_arms[10], this.dumbElem.second_right_arms[10], this.dumbElem.first_right_arms[10], this.dumbElem.bodys[9], this.dumbElem.faces[0], this.dumbElem.second_left_arms[11], this.dumbElem.first_left_arms[11], this.dumbElem.second_right_arms[11], this.dumbElem.first_right_arms[11], this.dumbElem.bodys[10], this.dumbElem.faces[0], this.bikeElem.second_left_arms[10], this.bikeElem.first_left_arms[10], this.bikeElem.second_right_arms[10], this.bikeElem.first_right_arms[10], this.bikeElem.bodys[9], this.bikeElem.faces[0], this.bikeElem.second_left_arms[11], this.bikeElem.first_left_arms[11], this.bikeElem.second_right_arms[11], this.bikeElem.first_right_arms[11], this.bikeElem.bodys[10], this.bikeElem.faces[0], 2);
			break;
			case 12:
				this.upLvlBodyCase(31965, 10, this.dumbElem.second_left_arms[11], this.dumbElem.first_left_arms[11], this.dumbElem.second_right_arms[11], this.dumbElem.first_right_arms[11], this.dumbElem.bodys[10], this.dumbElem.faces[0], this.dumbElem.second_left_arms[12], this.dumbElem.first_left_arms[12], this.dumbElem.second_right_arms[12], this.dumbElem.first_right_arms[12], this.dumbElem.bodys[11], this.dumbElem.faces[0], this.bikeElem.second_left_arms[11], this.bikeElem.first_left_arms[11], this.bikeElem.second_right_arms[11], this.bikeElem.first_right_arms[11], this.bikeElem.bodys[10], this.bikeElem.faces[0], this.bikeElem.second_left_arms[12], this.bikeElem.first_left_arms[12], this.bikeElem.second_right_arms[12], this.bikeElem.first_right_arms[12], this.bikeElem.bodys[11], this.bikeElem.faces[0], 3);
			break;
			case 13:
				this.upLvlBodyCase(53575, 10, this.dumbElem.second_left_arms[12], this.dumbElem.first_left_arms[12], this.dumbElem.second_right_arms[12], this.dumbElem.first_right_arms[12], this.dumbElem.bodys[11], this.dumbElem.faces[0], this.dumbElem.second_left_arms[13], this.dumbElem.first_left_arms[13], this.dumbElem.second_right_arms[13], this.dumbElem.first_right_arms[13], this.dumbElem.bodys[12], this.dumbElem.faces[0], this.bikeElem.second_left_arms[12], this.bikeElem.first_left_arms[12], this.bikeElem.second_right_arms[12], this.bikeElem.first_right_arms[12], this.bikeElem.bodys[11], this.bikeElem.faces[0], this.bikeElem.second_left_arms[13], this.bikeElem.first_left_arms[13], this.bikeElem.second_right_arms[13], this.bikeElem.first_right_arms[13], this.bikeElem.bodys[12], this.bikeElem.faces[0], 3);
			break;
			case 14:
				this.upLvlBodyCase(88345, 11, this.dumbElem.second_left_arms[13], this.dumbElem.first_left_arms[13], this.dumbElem.second_right_arms[13], this.dumbElem.first_right_arms[13], this.dumbElem.bodys[12], this.dumbElem.faces[0], this.dumbElem.second_left_arms[14], this.dumbElem.first_left_arms[14], this.dumbElem.second_right_arms[14], this.dumbElem.first_right_arms[14], this.dumbElem.bodys[13], this.dumbElem.faces[0], this.bikeElem.second_left_arms[13], this.bikeElem.first_left_arms[13], this.bikeElem.second_right_arms[13], this.bikeElem.first_right_arms[13], this.bikeElem.bodys[12], this.bikeElem.faces[0], this.bikeElem.second_left_arms[14], this.bikeElem.first_left_arms[14], this.bikeElem.second_right_arms[14], this.bikeElem.first_right_arms[14], this.bikeElem.bodys[13], this.bikeElem.faces[0], 3.5);
			break;
			case 15:
				this.upLvlBodyCase(143300, 12, this.dumbElem.second_left_arms[14], this.dumbElem.first_left_arms[14], this.dumbElem.second_right_arms[14], this.dumbElem.first_right_arms[14], this.dumbElem.bodys[13], this.dumbElem.faces[0], this.dumbElem.second_left_arms[15], this.dumbElem.first_left_arms[15], this.dumbElem.second_right_arms[15], this.dumbElem.first_right_arms[15], this.dumbElem.bodys[14], this.dumbElem.faces[0], this.bikeElem.second_left_arms[14], this.bikeElem.first_left_arms[14], this.bikeElem.second_right_arms[14], this.bikeElem.first_right_arms[14], this.bikeElem.bodys[13], this.bikeElem.faces[0], this.bikeElem.second_left_arms[15], this.bikeElem.first_left_arms[15], this.bikeElem.second_right_arms[15], this.bikeElem.first_right_arms[15], this.bikeElem.bodys[14], this.bikeElem.faces[0], 3.5);
			break;
			case 16:
				this.upLvlBodyCase(228560, 13, this.dumbElem.second_left_arms[15], this.dumbElem.first_left_arms[15], this.dumbElem.second_right_arms[15], this.dumbElem.first_right_arms[15], this.dumbElem.bodys[14], this.dumbElem.faces[0], this.dumbElem.second_left_arms[16], this.dumbElem.first_left_arms[16], this.dumbElem.second_right_arms[16], this.dumbElem.first_right_arms[16], this.dumbElem.bodys[15], this.dumbElem.faces[0], this.bikeElem.second_left_arms[15], this.bikeElem.first_left_arms[15], this.bikeElem.second_right_arms[15], this.bikeElem.first_right_arms[15], this.bikeElem.bodys[14], this.bikeElem.faces[0], this.bikeElem.second_left_arms[16], this.bikeElem.first_left_arms[16], this.bikeElem.second_right_arms[16], this.bikeElem.first_right_arms[16], this.bikeElem.bodys[15], this.bikeElem.faces[0], 4);
			break;
			case 17:
				this.upLvlBodyCase(358385, 13, this.dumbElem.second_left_arms[16], this.dumbElem.first_left_arms[16], this.dumbElem.second_right_arms[16], this.dumbElem.first_right_arms[16], this.dumbElem.bodys[15], this.dumbElem.faces[0], this.dumbElem.second_left_arms[17], this.dumbElem.first_left_arms[17], this.dumbElem.second_right_arms[17], this.dumbElem.first_right_arms[17], this.dumbElem.bodys[16], this.dumbElem.faces[1], this.bikeElem.second_left_arms[16], this.bikeElem.first_left_arms[16], this.bikeElem.second_right_arms[16], this.bikeElem.first_right_arms[16], this.bikeElem.bodys[15], this.bikeElem.faces[0], this.bikeElem.second_left_arms[17], this.bikeElem.first_left_arms[17], this.bikeElem.second_right_arms[17], this.bikeElem.first_right_arms[17], this.bikeElem.bodys[16], this.bikeElem.faces[1], 3.5);
			break;
			case 18:
				this.upLvlBodyCase(552270, 14, this.dumbElem.second_left_arms[17], this.dumbElem.first_left_arms[17], this.dumbElem.second_right_arms[17], this.dumbElem.first_right_arms[17], this.dumbElem.bodys[16], this.dumbElem.faces[1], this.dumbElem.second_left_arms[18], this.dumbElem.first_left_arms[18], this.dumbElem.second_right_arms[18], this.dumbElem.first_right_arms[18], this.dumbElem.bodys[17], this.dumbElem.faces[2], this.bikeElem.second_left_arms[17], this.bikeElem.first_left_arms[17], this.bikeElem.second_right_arms[17], this.bikeElem.first_right_arms[17], this.bikeElem.bodys[16], this.bikeElem.faces[1], this.bikeElem.second_left_arms[18], this.bikeElem.first_left_arms[18], this.bikeElem.second_right_arms[18], this.bikeElem.first_right_arms[18], this.bikeElem.bodys[17], this.bikeElem.faces[2], 3);
			break;
			case 19:
				this.upLvlBodyCase(836135, 15, this.dumbElem.second_left_arms[18], this.dumbElem.first_left_arms[18], this.dumbElem.second_right_arms[18], this.dumbElem.first_right_arms[18], this.dumbElem.bodys[17], this.dumbElem.faces[2], this.dumbElem.second_left_arms[19], this.dumbElem.first_left_arms[19], this.dumbElem.second_right_arms[19], this.dumbElem.first_right_arms[19], this.dumbElem.bodys[18], this.dumbElem.faces[3], this.bikeElem.second_left_arms[18], this.bikeElem.first_left_arms[18], this.bikeElem.second_right_arms[18], this.bikeElem.first_right_arms[18], this.bikeElem.bodys[17], this.bikeElem.faces[2], this.bikeElem.second_left_arms[19], this.bikeElem.first_left_arms[19], this.bikeElem.second_right_arms[19], this.bikeElem.first_right_arms[19], this.bikeElem.bodys[18], this.bikeElem.faces[3], 3);
			break;
			case 20:
				this.upLvlBodyCase(1243335, 16, this.dumbElem.second_left_arms[19], this.dumbElem.first_left_arms[19], this.dumbElem.second_right_arms[19], this.dumbElem.first_right_arms[19], this.dumbElem.bodys[18], this.dumbElem.faces[3], this.dumbElem.second_left_arms[20], this.dumbElem.first_left_arms[20], this.dumbElem.second_right_arms[20], this.dumbElem.first_right_arms[20], this.dumbElem.bodys[19], this.dumbElem.faces[4], this.bikeElem.second_left_arms[19], this.bikeElem.first_left_arms[19], this.bikeElem.second_right_arms[19], this.bikeElem.first_right_arms[19], this.bikeElem.bodys[18], this.bikeElem.faces[3], this.bikeElem.second_left_arms[20], this.bikeElem.first_left_arms[20], this.bikeElem.second_right_arms[20], this.bikeElem.first_right_arms[20], this.bikeElem.bodys[19], this.bikeElem.faces[4], 2.5);
			break;
			case 21:
				this.upLvlBodyCase(1815270, 16, this.dumbElem.second_left_arms[20], this.dumbElem.first_left_arms[20], this.dumbElem.second_right_arms[20], this.dumbElem.first_right_arms[20], this.dumbElem.bodys[19], this.dumbElem.faces[4], this.dumbElem.second_left_arms[21], this.dumbElem.first_left_arms[21], this.dumbElem.second_right_arms[21], this.dumbElem.first_right_arms[21], this.dumbElem.bodys[20], this.dumbElem.faces[5], this.bikeElem.second_left_arms[20], this.bikeElem.first_left_arms[20], this.bikeElem.second_right_arms[20], this.bikeElem.first_right_arms[20], this.bikeElem.bodys[19], this.bikeElem.faces[4], this.bikeElem.second_left_arms[21], this.bikeElem.first_left_arms[21], this.bikeElem.second_right_arms[21], this.bikeElem.first_right_arms[21], this.bikeElem.bodys[20], this.bikeElem.faces[5], 2);
			break;
			case 22:
				this.upLvlBodyCase(2601280, 17, this.dumbElem.second_left_arms[21], this.dumbElem.first_left_arms[21], this.dumbElem.second_right_arms[21], this.dumbElem.first_right_arms[21], this.dumbElem.bodys[20], this.dumbElem.faces[5], this.dumbElem.second_left_arms[22], this.dumbElem.first_left_arms[22], this.dumbElem.second_right_arms[22], this.dumbElem.first_right_arms[22], this.dumbElem.bodys[21], this.dumbElem.faces[5], this.bikeElem.second_left_arms[21], this.bikeElem.first_left_arms[21], this.bikeElem.second_right_arms[21], this.bikeElem.first_right_arms[21], this.bikeElem.bodys[20], this.bikeElem.faces[5], this.bikeElem.second_left_arms[22], this.bikeElem.first_left_arms[22], this.bikeElem.second_right_arms[22], this.bikeElem.first_right_arms[22], this.bikeElem.bodys[21], this.bikeElem.faces[5], 1.5);
			break;
			case 23:
				this.upLvlBodyCase(3657400, 18, this.dumbElem.second_left_arms[22], this.dumbElem.first_left_arms[22], this.dumbElem.second_right_arms[22], this.dumbElem.first_right_arms[22], this.dumbElem.bodys[21], this.dumbElem.faces[5], this.dumbElem.second_left_arms[23], this.dumbElem.first_left_arms[23], this.dumbElem.second_right_arms[23], this.dumbElem.first_right_arms[23], this.dumbElem.bodys[22], this.dumbElem.faces[5], this.bikeElem.second_left_arms[22], this.bikeElem.first_left_arms[22], this.bikeElem.second_right_arms[22], this.bikeElem.first_right_arms[22], this.bikeElem.bodys[21], this.bikeElem.faces[5], this.bikeElem.second_left_arms[23], this.bikeElem.first_left_arms[23], this.bikeElem.second_right_arms[23], this.bikeElem.first_right_arms[23], this.bikeElem.bodys[22], this.bikeElem.faces[5], 1.5);
			break;
			case 24:
				this.upLvlBodyCase(5043550, 19, this.dumbElem.second_left_arms[23], this.dumbElem.first_left_arms[23], this.dumbElem.second_right_arms[23], this.dumbElem.first_right_arms[23], this.dumbElem.bodys[22], this.dumbElem.faces[5], this.dumbElem.second_left_arms[24], this.dumbElem.first_left_arms[24], this.dumbElem.second_right_arms[24], this.dumbElem.first_right_arms[24], this.dumbElem.bodys[23], this.dumbElem.faces[6], this.bikeElem.second_left_arms[23], this.bikeElem.first_left_arms[23], this.bikeElem.second_right_arms[23], this.bikeElem.first_right_arms[23], this.bikeElem.bodys[22], this.bikeElem.faces[5], this.bikeElem.second_left_arms[24], this.bikeElem.first_left_arms[24], this.bikeElem.second_right_arms[24], this.bikeElem.first_right_arms[24], this.bikeElem.bodys[23], this.bikeElem.faces[6], 1);
			break;
		}
		this.serialDumbData = JSON.stringify(this.dumbData); //сериализуем его в строчку
		localStorage.setItem("dumbDataKey", this.serialDumbData); //запишем его в хранилище по ключу "dumbDataKey"
		this.serialCharData = JSON.stringify(this.charData); //сериализуем его в строчку
		localStorage.setItem("charDataKey", this.serialCharData); //запишем его в хранилище по ключу "dumbDataKey"
	},
	//***************************************************************************************************************************
	// Методы увеличения уровня ног
	upLvlLegsCase: function() {
		// lvl
		this.bikeData.legsLvlNumber += 1;
		this.mainLegsLvlNumber.innerHTML = this.bikeData.legsLvlNumber;
		this.legsLvl.innerHTML = this.bikeData.legsLvlNumber;
		// exp
		this.bikeData.legsExpNumber = this.bikeData.legsExpNumber - this.bikeData.legsMaxExpNumber;
		this.expProgressBike.value = this.bikeData.legsExpNumber;
		this.legsExp.innerHTML = this.bikeData.legsExpNumber.toFixed(1);
		this.bikeData.legsMaxExpNumber = arguments[0];
		this.expProgressBike.max = this.bikeData.legsMaxExpNumber;
		this.legsMaxExp.innerHTML = this.bikeData.legsMaxExpNumber;
		// status points
		this.charData.statusPointsNumber += arguments[1];
		this.statusPoints.innerHTML = this.charData.statusPointsNumber;
		// legs power
		this.bikeData.legPowerCount += 1;
		if (this.bikeData.legPowerCount < 15) {
			this.bikeData.legPower *= 1.02;
		} else if (this.bikeData.legPowerCount > 14 && this.bikeData.legPowerCount < 29) {
			this.bikeData.legPower *= 1.019;
		} else if (this.bikeData.legPowerCount > 28 && this.bikeData.legPowerCount < 43) {
			this.bikeData.legPower *= 1.018;
		} else if (this.bikeData.legPowerCount > 42 && this.bikeData.legPowerCount < 57) {
			this.bikeData.legPower *= 1.017;
		} else if (this.bikeData.legPowerCount > 56 && this.bikeData.legPowerCount < 71) {
			this.bikeData.legPower *= 1.016;
		}
		if (this.plusMinusNumberFlag == 'plus') {
			this.rotateNumberBike = this.bikeData.legPower - this.bikeData.bikeSpeed;
			if (this.rotateNumberBike > 50) {
				this.rotateNumberBike = 50;
			}
		} else if (this.plusMinusNumberFlag == 'minus') {
			this.rotateNumberBike = -(this.bikeData.legPower - this.bikeData.bikeSpeed);
			if (this.rotateNumberBike < -50) {
				this.rotateNumberBike = -50;
			}
		} 
		if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
			this.rotateNumberBike *= 0.5;
		}
		this.bikeData.legPowerInfo *= 1.05;
		this.legsInfo.innerHTML = this.bikeData.legPowerInfo.toFixed(1);
		// stamina
		this.charData.staminaMaxProgressNumber += 10;
		this.staminaProgress.max = this.charData.staminaMaxProgressNumber;
		this.charData.staminaProgressNumber = this.charData.staminaMaxProgressNumber;
		this.staminaProgress.value = this.charData.staminaProgressNumber;
		this.staminaInfo.innerHTML = this.charData.staminaMaxProgressNumber.toFixed(1);
		// recovery stamina
		this.charData.recStamInterval *= 0.96;
		this.charData.recStamInfoNumber /= 0.96;
		this.recStamInfo.innerHTML = this.charData.recStamInfoNumber.toFixed(1);
		// исчезающие и появляющиеся элементы
		arguments[2].style.display = 'none';
		arguments[3].style.display = 'none';
		arguments[4].style.display = 'none';
		arguments[5].style.display = 'none';
		arguments[6].style.display = 'none';
		arguments[7].style.display = 'block';
		arguments[8].style.display = 'block';
		arguments[9].style.display = 'block';
		arguments[10].style.display = 'block';
		arguments[11].style.display = 'block';
		arguments[12].style.display = 'none';
		arguments[13].style.display = 'none';
		arguments[14].style.display = 'none';
		arguments[15].style.display = 'block';
		arguments[16].style.display = 'block';
		arguments[17].style.display = 'block';
	},
	upLegsLvl: function() {
		switch (this.bikeData.legsLvlNumber) {
			case 1:
				this.upLvlLegsCase(40, 1, this.bikeElem.second_left_leg[0], this.bikeElem.first_left_leg[0], this.bikeElem.second_right_leg[0], this.bikeElem.first_right_leg[0], this.bikeElem.underpant[0], this.bikeElem.second_left_leg[1], this.bikeElem.first_left_leg[1], this.bikeElem.second_right_leg[1], this.bikeElem.first_right_leg[1], this.bikeElem.underpant[0], this.dumbElem.left_leg[0], this.dumbElem.right_leg[0], this.dumbElem.underpant[0], this.dumbElem.left_leg[1],  this.dumbElem.right_leg[1],  this.dumbElem.underpant[0]);
			break;
			case 2:
				this.upLvlLegsCase(80, 2, this.bikeElem.second_left_leg[1], this.bikeElem.first_left_leg[1], this.bikeElem.second_right_leg[1], this.bikeElem.first_right_leg[1], this.bikeElem.underpant[0], this.bikeElem.second_left_leg[2], this.bikeElem.first_left_leg[2], this.bikeElem.second_right_leg[2], this.bikeElem.first_right_leg[2], this.bikeElem.underpant[1], this.dumbElem.left_leg[1], this.dumbElem.right_leg[1], this.dumbElem.underpant[0], this.dumbElem.left_leg[2], this.dumbElem.right_leg[2], this.dumbElem.underpant[1]);
			break;
			case 3:
				this.upLvlLegsCase(155, 3, this.bikeElem.second_left_leg[2], this.bikeElem.first_left_leg[2], this.bikeElem.second_right_leg[2], this.bikeElem.first_right_leg[2], this.bikeElem.underpant[1], this.bikeElem.second_left_leg[3], this.bikeElem.first_left_leg[3], this.bikeElem.second_right_leg[3], this.bikeElem.first_right_leg[3], this.bikeElem.underpant[2], this.dumbElem.left_leg[2], this.dumbElem.right_leg[2], this.dumbElem.underpant[1], this.dumbElem.left_leg[3], this.dumbElem.right_leg[3], this.dumbElem.underpant[2]);
			break;
			case 4:
				this.upLvlLegsCase(295, 4, this.bikeElem.second_left_leg[3], this.bikeElem.first_left_leg[3], this.bikeElem.second_right_leg[3], this.bikeElem.first_right_leg[3], this.bikeElem.underpant[2], this.bikeElem.second_left_leg[4], this.bikeElem.first_left_leg[4], this.bikeElem.second_right_leg[4], this.bikeElem.first_right_leg[4], this.bikeElem.underpant[3], this.dumbElem.left_leg[3], this.dumbElem.right_leg[3], this.dumbElem.underpant[2], this.dumbElem.left_leg[4], this.dumbElem.right_leg[4], this.dumbElem.underpant[3]);
			break;
			case 5:
				this.upLvlLegsCase(560, 4, this.bikeElem.second_left_leg[4], this.bikeElem.first_left_leg[4], this.bikeElem.second_right_leg[4], this.bikeElem.first_right_leg[4], this.bikeElem.underpant[3], this.bikeElem.second_left_leg[5], this.bikeElem.first_left_leg[5], this.bikeElem.second_right_leg[5], this.bikeElem.first_right_leg[5], this.bikeElem.underpant[4], this.dumbElem.left_leg[4], this.dumbElem.right_leg[4], this.dumbElem.underpant[3], this.dumbElem.left_leg[5], this.dumbElem.right_leg[5], this.dumbElem.underpant[4]);
			break;
			case 6:
				this.upLvlLegsCase(1040, 5, this.bikeElem.second_left_leg[5], this.bikeElem.first_left_leg[5], this.bikeElem.second_right_leg[5], this.bikeElem.first_right_leg[5], this.bikeElem.underpant[4], this.bikeElem.second_left_leg[6], this.bikeElem.first_left_leg[6], this.bikeElem.second_right_leg[6], this.bikeElem.first_right_leg[6], this.bikeElem.underpant[5], this.dumbElem.left_leg[5], this.dumbElem.right_leg[5], this.dumbElem.underpant[4], this.dumbElem.left_leg[6], this.dumbElem.right_leg[6], this.dumbElem.underpant[5]);
			break;
			case 7:
				this.upLvlLegsCase(1910, 6, this.bikeElem.second_left_leg[6], this.bikeElem.first_left_leg[6], this.bikeElem.second_right_leg[6], this.bikeElem.first_right_leg[6], this.bikeElem.underpant[5], this.bikeElem.second_left_leg[7], this.bikeElem.first_left_leg[7], this.bikeElem.second_right_leg[7], this.bikeElem.first_right_leg[7], this.bikeElem.underpant[5], this.dumbElem.left_leg[6], this.dumbElem.right_leg[6], this.dumbElem.underpant[5], this.dumbElem.left_leg[7], this.dumbElem.right_leg[7], this.dumbElem.underpant[5]);
			break;
			case 8:
				this.upLvlLegsCase(3460, 7, this.bikeElem.second_left_leg[7], this.bikeElem.first_left_leg[7], this.bikeElem.second_right_leg[7], this.bikeElem.first_right_leg[7], this.bikeElem.underpant[5], this.bikeElem.second_left_leg[8], this.bikeElem.first_left_leg[8], this.bikeElem.second_right_leg[8], this.bikeElem.first_right_leg[8], this.bikeElem.underpant[6], this.dumbElem.left_leg[7], this.dumbElem.right_leg[7], this.dumbElem.underpant[5], this.dumbElem.left_leg[8], this.dumbElem.right_leg[8], this.dumbElem.underpant[6]);
			break;
			case 9:
				this.upLvlLegsCase(6175, 7, this.bikeElem.second_left_leg[8], this.bikeElem.first_left_leg[8], this.bikeElem.second_right_leg[8], this.bikeElem.first_right_leg[8], this.bikeElem.underpant[6], this.bikeElem.second_left_leg[9], this.bikeElem.first_left_leg[9], this.bikeElem.second_right_leg[9], this.bikeElem.first_right_leg[9], this.bikeElem.underpant[6], this.dumbElem.left_leg[8], this.dumbElem.right_leg[8], this.dumbElem.underpant[6], this.dumbElem.left_leg[9], this.dumbElem.right_leg[9], this.dumbElem.underpant[6]);
			break;
			case 10:
				this.upLvlLegsCase(10850, 8, this.bikeElem.second_left_leg[9], this.bikeElem.first_left_leg[9], this.bikeElem.second_right_leg[9], this.bikeElem.first_right_leg[9], this.bikeElem.underpant[6], this.bikeElem.second_left_leg[10], this.bikeElem.first_left_leg[10], this.bikeElem.second_right_leg[10], this.bikeElem.first_right_leg[10], this.bikeElem.underpant[7], this.dumbElem.left_leg[9], this.dumbElem.right_leg[9], this.dumbElem.underpant[6], this.dumbElem.left_leg[10], this.dumbElem.right_leg[10], this.dumbElem.underpant[7]);
			break;
			case 11:
				this.upLvlLegsCase(18770, 9, this.bikeElem.second_left_leg[10], this.bikeElem.first_left_leg[10], this.bikeElem.second_right_leg[10], this.bikeElem.first_right_leg[10], this.bikeElem.underpant[7], this.bikeElem.second_left_leg[11], this.bikeElem.first_left_leg[11], this.bikeElem.second_right_leg[11], this.bikeElem.first_right_leg[11], this.bikeElem.underpant[8], this.dumbElem.left_leg[10], this.dumbElem.right_leg[10], this.dumbElem.underpant[7], this.dumbElem.left_leg[11], this.dumbElem.right_leg[11], this.dumbElem.underpant[8]);
			break;
			case 12:
				this.upLvlLegsCase(31965, 10, this.bikeElem.second_left_leg[11], this.bikeElem.first_left_leg[11], this.bikeElem.second_right_leg[11], this.bikeElem.first_right_leg[11], this.bikeElem.underpant[8], this.bikeElem.second_left_leg[12], this.bikeElem.first_left_leg[12], this.bikeElem.second_right_leg[12], this.bikeElem.first_right_leg[12], this.bikeElem.underpant[9], this.dumbElem.left_leg[11], this.dumbElem.right_leg[11], this.dumbElem.underpant[8], this.dumbElem.left_leg[12], this.dumbElem.right_leg[12], this.dumbElem.underpant[9]);
			break;
			case 13:
				this.upLvlLegsCase(53575, 10, this.bikeElem.second_left_leg[12], this.bikeElem.first_left_leg[12], this.bikeElem.second_right_leg[12], this.bikeElem.first_right_leg[12], this.bikeElem.underpant[9], this.bikeElem.second_left_leg[13], this.bikeElem.first_left_leg[13], this.bikeElem.second_right_leg[13], this.bikeElem.first_right_leg[13], this.bikeElem.underpant[10], this.dumbElem.left_leg[12], this.dumbElem.right_leg[12], this.dumbElem.underpant[9], this.dumbElem.left_leg[13], this.dumbElem.right_leg[13], this.dumbElem.underpant[10]);
			break;
			case 14:
				this.upLvlLegsCase(88345, 11, this.bikeElem.second_left_leg[13], this.bikeElem.first_left_leg[13], this.bikeElem.second_right_leg[13], this.bikeElem.first_right_leg[13], this.bikeElem.underpant[10], this.bikeElem.second_left_leg[14], this.bikeElem.first_left_leg[14], this.bikeElem.second_right_leg[14], this.bikeElem.first_right_leg[14], this.bikeElem.underpant[11], this.dumbElem.left_leg[13], this.dumbElem.right_leg[13], this.dumbElem.underpant[10], this.dumbElem.left_leg[14], this.dumbElem.right_leg[14], this.dumbElem.underpant[11]);
			break;
			case 15:
				this.upLvlLegsCase(143300, 12, this.bikeElem.second_left_leg[14], this.bikeElem.first_left_leg[14], this.bikeElem.second_right_leg[14], this.bikeElem.first_right_leg[14], this.bikeElem.underpant[11], this.bikeElem.second_left_leg[15], this.bikeElem.first_left_leg[15], this.bikeElem.second_right_leg[15], this.bikeElem.first_right_leg[15], this.bikeElem.underpant[12], this.dumbElem.left_leg[14], this.dumbElem.right_leg[14], this.dumbElem.underpant[11], this.dumbElem.left_leg[15], this.dumbElem.right_leg[15], this.dumbElem.underpant[12]);
			break;
			case 16:
				this.upLvlLegsCase(228560, 13, this.bikeElem.second_left_leg[15], this.bikeElem.first_left_leg[15], this.bikeElem.second_right_leg[15], this.bikeElem.first_right_leg[15], this.bikeElem.underpant[12], this.bikeElem.second_left_leg[16], this.bikeElem.first_left_leg[16], this.bikeElem.second_right_leg[16], this.bikeElem.first_right_leg[16], this.bikeElem.underpant[13], this.dumbElem.left_leg[15], this.dumbElem.right_leg[15], this.dumbElem.underpant[12], this.dumbElem.left_leg[16], this.dumbElem.right_leg[16], this.dumbElem.underpant[13]);
			break;
			case 17:
				this.upLvlLegsCase(358385, 13, this.bikeElem.second_left_leg[16], this.bikeElem.first_left_leg[16], this.bikeElem.second_right_leg[16], this.bikeElem.first_right_leg[16], this.bikeElem.underpant[13], this.bikeElem.second_left_leg[17], this.bikeElem.first_left_leg[17], this.bikeElem.second_right_leg[17], this.bikeElem.first_right_leg[17], this.bikeElem.underpant[14], this.dumbElem.left_leg[16], this.dumbElem.right_leg[16], this.dumbElem.underpant[13], this.dumbElem.left_leg[17], this.dumbElem.right_leg[17], this.dumbElem.underpant[14]);
			break;
			case 18:
				this.upLvlLegsCase(552270, 14, this.bikeElem.second_left_leg[17], this.bikeElem.first_left_leg[17], this.bikeElem.second_right_leg[17], this.bikeElem.first_right_leg[17], this.bikeElem.underpant[14], this.bikeElem.second_left_leg[18], this.bikeElem.first_left_leg[18], this.bikeElem.second_right_leg[18], this.bikeElem.first_right_leg[18], this.bikeElem.underpant[15], this.dumbElem.left_leg[17], this.dumbElem.right_leg[17], this.dumbElem.underpant[14], this.dumbElem.left_leg[18], this.dumbElem.right_leg[18], this.dumbElem.underpant[15]);
			break;
			case 19:
				this.upLvlLegsCase(836135, 15, this.bikeElem.second_left_leg[18], this.bikeElem.first_left_leg[18], this.bikeElem.second_right_leg[18], this.bikeElem.first_right_leg[18], this.bikeElem.underpant[15], this.bikeElem.second_left_leg[19], this.bikeElem.first_left_leg[19], this.bikeElem.second_right_leg[19], this.bikeElem.first_right_leg[19], this.bikeElem.underpant[16], this.dumbElem.left_leg[18], this.dumbElem.right_leg[18], this.dumbElem.underpant[15], this.dumbElem.left_leg[19], this.dumbElem.right_leg[19], this.dumbElem.underpant[16]);
			break;
			case 20:
				this.upLvlLegsCase(1243335, 16, this.bikeElem.second_left_leg[19], this.bikeElem.first_left_leg[19], this.bikeElem.second_right_leg[19], this.bikeElem.first_right_leg[19], this.bikeElem.underpant[16], this.bikeElem.second_left_leg[20], this.bikeElem.first_left_leg[20], this.bikeElem.second_right_leg[20], this.bikeElem.first_right_leg[20], this.bikeElem.underpant[17], this.dumbElem.left_leg[19], this.dumbElem.right_leg[19], this.dumbElem.underpant[16], this.dumbElem.left_leg[20], this.dumbElem.right_leg[20], this.dumbElem.underpant[17]);
			break;
			case 21:
				this.upLvlLegsCase(1815270, 16, this.bikeElem.second_left_leg[20], this.bikeElem.first_left_leg[20], this.bikeElem.second_right_leg[20], this.bikeElem.first_right_leg[20], this.bikeElem.underpant[17], this.bikeElem.second_left_leg[21], this.bikeElem.first_left_leg[21], this.bikeElem.second_right_leg[21], this.bikeElem.first_right_leg[21], this.bikeElem.underpant[18], this.dumbElem.left_leg[20], this.dumbElem.right_leg[20], this.dumbElem.underpant[17], this.dumbElem.left_leg[21], this.dumbElem.right_leg[21], this.dumbElem.underpant[18]);
			break;
			case 22:
				this.upLvlLegsCase(2601280, 17, this.bikeElem.second_left_leg[21], this.bikeElem.first_left_leg[21], this.bikeElem.second_right_leg[21], this.bikeElem.first_right_leg[21], this.bikeElem.underpant[18], this.bikeElem.second_left_leg[22], this.bikeElem.first_left_leg[22], this.bikeElem.second_right_leg[22], this.bikeElem.first_right_leg[22], this.bikeElem.underpant[19], this.dumbElem.left_leg[21], this.dumbElem.right_leg[21], this.dumbElem.underpant[18], this.dumbElem.left_leg[22], this.dumbElem.right_leg[22], this.dumbElem.underpant[19]);
			break;
			case 23:
				this.upLvlLegsCase(3657400, 18, this.bikeElem.second_left_leg[22], this.bikeElem.first_left_leg[22], this.bikeElem.second_right_leg[22], this.bikeElem.first_right_leg[22], this.bikeElem.underpant[19], this.bikeElem.second_left_leg[23], this.bikeElem.first_left_leg[23], this.bikeElem.second_right_leg[23], this.bikeElem.first_right_leg[23], this.bikeElem.underpant[20], this.dumbElem.left_leg[22], this.dumbElem.right_leg[22], this.dumbElem.underpant[19], this.dumbElem.left_leg[23], this.dumbElem.right_leg[23], this.dumbElem.underpant[20]);
			break;
			case 24:
				this.upLvlLegsCase(5043550, 19, this.bikeElem.second_left_leg[23], this.bikeElem.first_left_leg[23], this.bikeElem.second_right_leg[23], this.bikeElem.first_right_leg[23], this.bikeElem.underpant[20], this.bikeElem.second_left_leg[24], this.bikeElem.first_left_leg[24], this.bikeElem.second_right_leg[24], this.bikeElem.first_right_leg[24], this.bikeElem.underpant[21], this.dumbElem.left_leg[23], this.dumbElem.right_leg[23], this.dumbElem.underpant[20], this.dumbElem.left_leg[24], this.dumbElem.right_leg[24], this.dumbElem.underpant[21]);
			break;
		}
		this.serialBikeData = JSON.stringify(this.bikeData); //сериализуем его в строчку
		localStorage.setItem("bikeDataKey", this.serialBikeData); //запишем его в хранилище по ключу "bikeDataKey"
		this.serialCharData = JSON.stringify(this.charData); //сериализуем его в строчку
		localStorage.setItem("charDataKey", this.serialCharData); //запишем его в хранилище по ключу "dumbDataKey"
	},
	//******************************************************************************************
	// Метод увеличения силы тела
	upBodyCase: function() {
		this.dumbData.armPowerCount += 1;
		if (this.charData.bodyForceNumber < 45) {
			this.charData.bodyForceNumber += 1;
			this.charData.bodyNeedPointsNumber = arguments[0];
			this.charData.statusPointsNumber -= arguments[1];
			if (this.dumbData.armPowerCount < 15) {
				this.dumbData.armPower *= 1.05;
			} else if (this.dumbData.armPowerCount > 14 && this.dumbData.armPowerCount < 29) {
				this.dumbData.armPower *= 1.045;
			} else if (this.dumbData.armPowerCount > 28 && this.dumbData.armPowerCount < 43) {
				this.dumbData.armPower *= 1.04;
			} else if (this.dumbData.armPowerCount > 42 && this.dumbData.armPowerCount < 57) {
				this.dumbData.armPower *= 1.035;
			} else if (this.dumbData.armPowerCount > 56 && this.dumbData.armPowerCount < 71) {
				this.dumbData.armPower *= 1.03;
			}
			this.rotateNumberDumb = this.dumbData.armPower - this.dumbData.dumbWeight;
			if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
				this.rotateNumberDumb *= 0.5;
			}
			this.dumbData.armPowerInfo *= 1.05;
			if (this.charData.bodyForceNumber >= 45) {
				this.charData.endUpBodyFlag = true;
				this.bodyNeedPoints.style.display = 'none';
			}
		}	
	},
	// Метод увеличения силы ног
	upLegsCase: function() {
		this.bikeData.legPowerCount += 1;
		if (this.charData.legsForceNumber < 45) {
			this.charData.legsForceNumber += 1;
			this.charData.legsNeedPointsNumber = arguments[0];
			this.charData.statusPointsNumber -= arguments[1];
			// legs power
			if (this.bikeData.legPowerCount < 15) {
				this.bikeData.legPower *= 1.02;
			} else if (this.bikeData.legPowerCount > 14 && this.bikeData.legPowerCount < 29) {
				this.bikeData.legPower *= 1.019;
			} else if (this.bikeData.legPowerCount > 28 && this.bikeData.legPowerCount < 43) {
				this.bikeData.legPower *= 1.018;
			} else if (this.bikeData.legPowerCount > 42 && this.bikeData.legPowerCount < 57) {
				this.bikeData.legPower *= 1.017;
			} else if (this.bikeData.legPowerCount > 56 && this.bikeData.legPowerCount < 71) {
				this.bikeData.legPower *= 1.016;
			}
			if (this.plusMinusNumberFlag == 'plus') {
				this.rotateNumberBike = this.bikeData.legPower - this.bikeData.bikeSpeed;
				if (this.rotateNumberBike > 50) {
					this.rotateNumberBike = 50;
				}
			} else if (this.plusMinusNumberFlag == 'minus') {
				this.rotateNumberBike = -(this.bikeData.legPower - this.bikeData.bikeSpeed);
				if (this.rotateNumberBike < -50) {
					this.rotateNumberBike = -50;
				}
			} 
			if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
				this.rotateNumberBike *= 0.5;
			}
			this.bikeData.legPowerInfo *= 1.05;
			if (this.charData.legsForceNumber >= 45) {
				this.charData.endUpLegsFlag = true;
				this.legsNeedPoints.style.display = 'none';
			}
		}
	},
	// Метод увеличения стамины
	upStaminaCase: function() {
		if (this.charData.staminaNumber < 45) {
			this.charData.staminaNumber += 1;
			this.charData.staminaNeedPointsNumber = arguments[0];
			this.charData.staminaMaxProgressNumber += 10;
			this.charData.statusPointsNumber -= arguments[1];
			if (this.charData.staminaNumber >= 45) {
				this.charData.endUpStaminaFlag = true;
				this.staminaNeedPoints.style.display = 'none';
			}
		}
	},
	// Метод увеличения регенерации стамины
	upRecStamCase: function() {
		if (this.charData.recStamNumber < 45) {
			this.charData.recStamNumber += 1;
			this.charData.recStamNeedPointsNumber = arguments[0];
			this.charData.recStamInterval *= 0.96;
			this.charData.recStamInfoNumber /= 0.96;
			this.charData.statusPointsNumber -= arguments[1];
			if (this.charData.recStamNumber >= 45) {
				this.charData.endUpRecStamFlag = true;
				this.recStamNeedPoints.style.display = 'none';
			}
		}
	},
	//*******************************************************************************************
	// Метод выбора гантели в инвентаре
	dumbChoiceCase: function() {
		this.dumbElem.left_dumbbells.forEach(function(item) {
			item.style.display = 'none';
		});
		this.dumbElem.right_dumbbells.forEach(function(item) {
			item.style.display = 'none';
		});
		arguments[0].style.display = 'block';
		arguments[1].style.display = 'block';
		this.dumbData.dumbExp = arguments[2];
		this.dumbData.dumbMoney = arguments[3];
		this.dumbData.dumbWeight = arguments[4];
		this.dumbData.staminaMinus = arguments[5];
		this.rotateNumberDumb = this.dumbData.armPower - this.dumbData.dumbWeight;
		if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
			this.rotateNumberDumb *= 0.5;
		}
		if (this.rotateNumberDumb <= 1) {
			this.rotateNumberDumb = 1;
		}
		this.dumbData.dumbFlag = arguments[6];
		this.charInventoryDumb.style.display = 'none';
		this.buttonSound.play();
		this.inventoryFlag = false;
		this.fonBtnInvent.classList.remove('green');
	},
	//*********************************************************************************************
	// Метод выбора велотренажера в инвентаре
	bikeChoiceCase: function() {
		this.bikeElem.front_bike.forEach(function(item) {
			item.style.display = 'none';
		});
		this.bikeElem.back_bike.forEach(function(item) {
			item.style.display = 'none';
		});
		this.bikeElem.left_pedal.forEach(function(item) {
			item.style.display = 'none';
		});
		this.bikeElem.right_pedal.forEach(function(item) {
			item.style.display = 'none';
		});
		arguments[0].style.display = 'block';
		arguments[1].style.display = 'block';
		arguments[2].style.display = 'block';
		arguments[3].style.display = 'block';
		this.bikeData.speedNumber = 1;
		this.bikeElem.number_speed.innerHTML = game.bikeData.speedNumber;
		this.bikeData.bikeExp = 1;
		this.bikeData.bikeMoney = 1;
		this.bikeData.bikeSpeed = 70;
		this.bikeData.staminaMinus = 1;
		if (this.plusMinusNumberFlag == 'plus') {
			this.rotateNumberBike = this.bikeData.legPower - this.bikeData.bikeSpeed;
			if (this.rotateNumberBike > 50) {
				this.rotateNumberBike = 50;
			}
		} else if (this.plusMinusNumberFlag == 'minus') {
			this.rotateNumberBike = -(this.bikeData.legPower - this.bikeData.bikeSpeed);
			if (this.rotateNumberBike < -50) {
				this.rotateNumberBike = -50;
			}
		} 
		if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
			this.rotateNumberBike *= 0.5;
		}
		this.bikeData.bikeFlag = arguments[4];
		this.charInventoryBike.style.display = 'none';
		this.buttonSound.play();
		this.inventoryFlag = false;
		this.fonBtnInvent.classList.remove('green');
	},
	// Метод выбора скорости на велотренажере
	speedChoiceCase: function() {
		this.bikeData.bikeExp = arguments[0];
		this.bikeData.bikeMoney = arguments[1];
		this.bikeData.bikeSpeed = arguments[2];
		this.bikeData.staminaMinus = arguments[3];
		if (this.plusMinusNumberFlag == 'plus') {
			this.rotateNumberBike = this.bikeData.legPower - this.bikeData.bikeSpeed;
			if (this.rotateNumberBike <= 0) {
				this.rotateNumberBike = 0.5;
			}
		} else if (this.plusMinusNumberFlag == 'minus') {
			this.rotateNumberBike = -(this.bikeData.legPower - this.bikeData.bikeSpeed);
			if (this.rotateNumberBike >= 0) {
				this.rotateNumberBike = -0.5;
			}
		} 
		if (this.charData.staminaProgressNumber <= (this.charData.staminaMaxProgressNumber * 0.2)) {
			this.rotateNumberBike *= 0.5;
		}
		this.bikeElem.number_speed.innerHTML = this.bikeData.speedNumber;
	},
	//**************************************************************************************************
	// Метод выбора вещи в магазине
	shopChoiceCase: function() {	
		game.buttonSound.play();
		game.infoShop.style.display = 'block';
		arguments[0].style.display = 'block';
	},
	// Методы покупки вещей в магазине
	buyItemCase: function() {
		if (game.charData.moneyNumber >= arguments[0]) {
			this.moneySound.play();
			game.charData.moneyNumber -= arguments[0];
			arguments[1].style.display = 'block';
			arguments[2].style.display = 'none';
			this.infoShop.style.display = 'none';
		} else {
			this.infoInvent.forEach(function(item) {
				item.style.display = 'none';
			});
			this.infoInvent[13].style.display = 'block';
		}
	},
	buyStimCase: function() {
		if (game.charData.moneyNumber >= arguments[0]) {
			this.moneySound.play();
			game.charData.moneyNumber -= arguments[0];
			arguments[1].style.display = 'block';
			arguments[2].style.display = 'block';
			this.infoShop.style.display = 'none';
		} else {
			this.infoInvent.forEach(function(item) {
				item.style.display = 'none';
			});
			this.infoInvent[13].style.display = 'block';
		}
	},
	//*********************************************************************************************************
	// Метод появления частей тела если есть запись в local storage
	bodyElemCase: function() {
		arguments[0].style.display = 'block';
		arguments[1].style.display = 'block';
		arguments[2].style.display = 'block';
		arguments[3].style.display = 'block';
		arguments[4].style.display = 'block';
		arguments[5].style.display = 'block';
		arguments[6].style.display = 'block';
		arguments[7].style.display = 'block';
		arguments[8].style.display = 'block';
		arguments[9].style.display = 'block';
		arguments[10].style.display = 'block';
		arguments[11].style.display = 'block';
	},
	// Метод появления частей ног если есть запись в local storage
	legsElemCase: function() {
		arguments[0].style.display = 'block';
		arguments[1].style.display = 'block';
		arguments[2].style.display = 'block';
		arguments[3].style.display = 'block';
		arguments[4].style.display = 'block';
		arguments[5].style.display = 'block';
		arguments[6].style.display = 'block';
		arguments[7].style.display = 'block';
	},
	// Данные чара ******************************************************************************************************************
	timerData: {
		// Таймеры стимуляторов в главном окне
		energeticTimerNumber: 0,
		proteinTimerNumber: 0,
		// Флаг включенного таймера
		energeticTimerFlag: false,
		proteinTimerFlag: false,
		// Флаги смещения таймеров с иконками
		energeticTransFlag: false,
		proteinTransFlag: false
	},
	inventData: {
		// Флаги появления вещей в инвентарях
		dumbInventFlag2: false,
		dumbInventFlag3: false,
		dumbInventFlag4: false,
		dumbInventFlag5: false,
		dumbInventFlag6: false,
		dumbInventFlag7: false,
		dumbInventFlag8: false,
		dumbInventFlag9: false,
		dumbInventFlag10: false,
		bikeInventFlag2: false,
		bikeInventFlag3: false,
		energyInventFlag: false,
		proteinInventFlag: false,
		steroidsInventFlag: false,
		// Количество стимуляторов в инвентаре
		energeticInventNumber: 0,
		proteinInventNumber: 0,
		steroidsInventNumber: 0,
		// Флаги убирания кнопок покупки вещей
		btnBuyDumbFlag2: false,
		btnBuyDumbFlag3: false,
		btnBuyDumbFlag4: false,
		btnBuyDumbFlag5: false,
		btnBuyDumbFlag6: false,
		btnBuyDumbFlag7: false,
		btnBuyDumbFlag8: false,
		btnBuyDumbFlag9: false,
		btnBuyDumbFlag10: false,
		btnBuyBikeFlag2: false,
		btnBuyBikeFlag3: false
	},
	bikeData: {
		// Сила подьема ног, отнимание стамины 
		legPower: 75, 
		legPowerCount: 1,
		staminaMinus: 1,
		legPowerInfo: 60,
		// Экспа, деньги, скорости байков
		bikeExp: 1,
		bikeMoney: 1,
		bikeSpeed: 70,
		speedNumber: 1,
		// Уровень ног
		legsLvlNumber: 1,
		legsExpNumber: 0,
		legsMaxExpNumber: 20,
		// Флаг активного велотренажера
		bikeFlag: 1
	},
	dumbData: {
		// Сила подьема рук, отнимание стамины
		armPower: 50, 
		armPowerCount: 1,
		staminaMinus: 1,
		armPowerInfo: 40,
		// Экспа, деньги, вес гантелей
		dumbExp: 1,
		dumbMoney: 1,
		dumbWeight: 10,
		// Уровень тела
		bodyLvlNumber: 1,
		bodyExpNumber: 0,
		bodyMaxExpNumber: 20,
		// Изменяемые точки transform-origin и translateX
		toLeftArmX: 318.6,
		toFirstLeftArmX: 307.7,
		toRightArmX: 401.5,
		toFirstRightArmX: 412.5,
		transRight: 0,
		transLeft: 0,
		// Флаг активной гантели
		dumbFlag: 1
	},
	charData: {
		// Скорость востановления стамины
		recStamInterval: 1000,
		// Данные в глcharм окне
		moneyNumber: 100000,
		staminaProgressNumber: 30,
		staminaMaxProgressNumber: 30,
		// Прокачк рук
		bodyForceNumber: 1,
		bodyNeedPointsNumber: 1,
		// Прокачка ног
		legsForceNumber: 1,
		legsNeedPointsNumber: 1,
		// Прокачка выносливости
		staminaNumber: 1,
		staminaNeedPointsNumber: 1,
		// Прокачка востановления выносливости
		recStamNumber: 1,
		recStamNeedPointsNumber: 1,
		recStamInfoNumber: 60,
		// Очки стcharов
		statusPointsNumber: 10000,
		// Флаги прекращения увеличения уровней прокачивания
		endUpBodyFlag: false,
		endUpLegsFlag: false,
		endUpStaminaFlag: false,
		endUpRecStamFlag: false
	},
	volumeData: {
		volumeNumber: 1.0
	},
	startWindows: {
		openWindow: null
	},
	adData: {
		interstitialCount: 0,
	}
};
game.energyMain.style.display = 'none';
game.proteinMain.style.display = 'none';


// Стартовое окно ***************************************************************************************************
game.mainWindow.addEventListener('click', startWindowBtns);

function startWindowBtns(event) {
	switch (event.target.id) {
		case 'btn-sw-start':
			game.buttonSound.play();
			game.mainWindow.style.display = 'none';
			game.mainWindowDumb.style.display = 'block';
			game.expProgressDumb.style.display = 'block';
			game.mainBodyLvl.style.display = 'block';
			game.startWindows.openWindow = 'dumb';
			game.serialStartWindows = JSON.stringify(game.startWindows); //сериализуем его в строчку
			localStorage.setItem("startWindowsKey", game.serialStartWindows); //запишем его в хранилище по ключу "myKey"
		break;
		case 'btn-sw-exit':
			game.buttonSound.play();
			game.adData.interstitialCount = 0;
			window.close();
			game.serialAdData = JSON.stringify(game.adData); //сериализуем его в строчку
			localStorage.setItem("adDataKey", game.serialAdData); //запишем его в хранилище по ключу "myKey"
		break;
		case 'btn-sw-continue':
			if (game.startWindows.openWindow == 'dumb') {
				game.buttonSound.play();
				game.mainWindow.style.display = 'none';
				game.mainWindowDumb.style.display = 'block';
				game.expProgressDumb.style.display = 'block';
				game.mainBodyLvl.style.display = 'block';
			} else if (game.startWindows.openWindow == 'bike') {
				game.buttonSound.play();
				game.mainWindow.style.display = 'none';
				game.mainWindowBike.style.display = 'block';
				game.expProgressBike.style.display = 'block';
				game.mainLegsLvl.style.display = 'block';
			}
		break;
		case 'btn-sw-reset':
			game.buttonSound.play();
			localStorage.clear();
			window.location.reload();
		break;
	}
};

// Переход на локацию с велотренажерами
game.btn_trnsDumb.addEventListener("mousedown", transitionDumb);
function transitionDumb() {
	game.mainWindowDumb.style.display = 'none';
	game.expProgressDumb.style.display = 'none';
	game.mainBodyLvl.style.display = 'none';
	game.mainWindowBike.style.display = 'block';
	game.expProgressBike.style.display = 'block';
	game.mainLegsLvl.style.display = 'block';
	game.startWindows.openWindow = 'bike';
};

// Переход на локацию с гантелями
game.btn_trnsBike.addEventListener("mousedown", transitionBike);

function transitionBike() {
	game.mainWindowBike.style.display = 'none';
	game.expProgressBike.style.display = 'none';
	game.mainLegsLvl.style.display = 'none';
	game.mainWindowDumb.style.display = 'block';
	game.expProgressDumb.style.display = 'block';
	game.mainBodyLvl.style.display = 'block';
	game.startWindows.openWindow = 'dumb';
};

// Обработчики клика Dumb ********************************************************************************************************************
game.clickAreaDumb.addEventListener("mousedown", rotateArms);
game.clickAreaDumb.addEventListener("mouseup", rotateArmsEnd);

// Функции клика
function rotateArms() {	
	if (!game.clickFlagDumb && !game.clickBackFlag) {
		game.clickFlagDumb = true;
		if (!game.startBackArmFlag) {
			game.moanSound.play();
			game.startBackArmFlag = true;
			backArms();
			game.changeMouth();
		}	
		if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2) && !game.rotateNumberHalfDumb) {
			game.rotateNumberHalfDumb = true;
			game.rotateNumberDumb = game.rotateNumberDumb * 0.5;
		}	
		if (game.rotateArm > 70 && game.positionUp3) { // position arms 3
			game.rotateFirstArm -= game.rotateNumberDumb;
			game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
			game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
			game.rotateArm += game.rotateNumberDumb;
			game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
			game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
			if (game.rotateArm >= 150 && game.positionUp3) { // Полный подьем
				game.clickBackFlag = true;
				if (game.proteinMain.style.display == 'none') {
					game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 2; // Exp and Money
				} else if (game.proteinMain.style.display == 'block') {
					game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 2.4; // Exp and Money
				}
				game.charData.moneyNumber += game.dumbData.dumbMoney * 2; // Exp and Money
				game.expProgressDumb.value = game.dumbData.bodyExpNumber;
				game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
				game.moneyMain.innerHTML = game.charData.moneyNumber;
				game.rotateFirstArm = 10;
				game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';	
				game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';	
				game.rotateArm = 150;
				game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
				game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
			}
		} else if (game.rotateArm >= 0 && game.positionUp2) { // position arms 2
			game.rotateArm += game.rotateNumberDumb;
			game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
			game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
			if (game.rotateArm > 70 && game.positionUp2) { // Переход на позицию 3
				game.positionUp3 = true;
				game.positionUp2 = false;
				game.rotateNumberDumb = game.rotateNumberDumb * 0.8;
				if (!game.exp3FlagDumb) { // Exp and Money
					game.exp3FlagDumb = true;
					if (game.proteinMain.style.display == 'none') {
						game.dumbData.bodyExpNumber += game.dumbData.dumbExp; // Exp and Money
					} else if (game.proteinMain.style.display == 'block') {
						game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 1.2; // Exp and Money
					} 
					game.charData.moneyNumber += game.dumbData.dumbMoney; 
					game.expProgressDumb.value = game.dumbData.bodyExpNumber;
					game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
					game.moneyMain.innerHTML = game.charData.moneyNumber;
				}
				game.rotateFirstArm = 90 - (game.rotateArm - 70);
				game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';	
				game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';		
				game.rotateArm = (game.rotateArm - 70) * 0.8 + 70;
				game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
				game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
				if (game.rotateArm >= 150 && game.positionUp3) { // Полный подьем
					game.clickBackFlag = true;
					// Exp and Money
					if (game.proteinMain.style.display == 'none') {
						game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 2; // Exp and Money
					} else if (game.proteinMain.style.display == 'block') {
						game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 2.4; // Exp and Money
					} 
					game.charData.moneyNumber += game.dumbData.dumbMoney * 2; 
					game.expProgressDumb.value = game.dumbData.bodyExpNumber;
					game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
					game.moneyMain.innerHTML = game.charData.moneyNumber;
					game.rotateFirstArm = 10;
					game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
					game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';	
					game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
					game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';		
					game.rotateArm = 150;
					game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
					game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
					game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
					game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
				}
			}
		} else if (game.rotateFirstArm >= 0 && game.positionUp1) { // position arms 1
			game.rotateFirstArm += game.rotateNumberDumb;
			game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
			game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
			if (game.rotateFirstArm > 90 && game.positionUp1) { // Переход на позицию 2
				game.positionUp1 = false;
				game.positionUp2 = true;
				game.rotateNumberDumb *= 0.8;
				if (!game.exp2FlagDumb) { // Exp
					game.exp2FlagDumb = true;
					if (game.proteinMain.style.display == 'none') {
						game.dumbData.bodyExpNumber += game.dumbData.dumbExp; // Exp and Money
					} else if (game.proteinMain.style.display == 'block') {
						game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 1.2; // Exp and Money
					}
					game.charData.moneyNumber += game.dumbData.dumbMoney;
					game.expProgressDumb.value = game.dumbData.bodyExpNumber;
					game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
					game.moneyMain.innerHTML = game.charData.moneyNumber;
				}
				game.rotateArm = (game.rotateFirstArm - 90) * 0.8;
				game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
				game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
				game.rotateFirstArm = 90;
				game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
				game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
				if (game.rotateArm > 70 && game.positionUp2) { // Переход на позицию 3
					game.positionUp3 = true;
					game.positionUp2 = false;
					game.rotateNumberDumb *= 0.8;
					if (!game.exp3FlagDumb) { // Exp and Money
						game.exp3FlagDumb = true;
						if (game.proteinMain.style.display == 'none') {
							game.dumbData.bodyExpNumber += game.dumbData.dumbExp; // Exp and Money
						} else if (game.proteinMain.style.display == 'block') {
							game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 1.2; // Exp and Money
						}
						game.charData.moneyNumber += game.dumbData.dumbMoney;
						game.expProgressDumb.value = game.dumbData.bodyExpNumber;
						game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
						game.moneyMain.innerHTML = game.charData.moneyNumber;
					}
					game.rotateFirstArm = 90 - (game.rotateArm - 70) * 0.8;
					game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
					game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';		
					game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
					game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';		
					game.rotateArm = (game.rotateArm - 70) * 0.8 + 70;
					game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
					game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
					game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
					game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
					if (game.rotateArm >= 150 && game.positionUp3) { // Полный подьем
						game.clickBackFlag = true;
						// Exp and Money
						if (game.proteinMain.style.display == 'none') {
							game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 2; // Exp and Money
						} else if (game.proteinMain.style.display == 'block') {
							game.dumbData.bodyExpNumber += game.dumbData.dumbExp * 2.4; // Exp and Money
						}
						game.charData.moneyNumber += game.dumbData.dumbMoney * 2; 
						game.expProgressDumb.value = game.dumbData.bodyExpNumber;
						game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
						game.moneyMain.innerHTML = game.charData.moneyNumber;
						game.rotateFirstArm = 10;
						game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
						game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';	
						game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
						game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';	
						game.rotateArm = 150;
						game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
						game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
						game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
						game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
					}
				}	
			} 
		}
		// Отнимание стамины
		game.charData.staminaProgressNumber -= game.dumbData.staminaMinus;
		if (game.charData.staminaProgressNumber < game.charData.staminaMaxProgressNumber && !game.startRecStamFlag) {
			game.startRecStamFlag = true;
			recoveryStamina();
		}
		if (game.charData.staminaProgressNumber <= 0) {
			game.charData.staminaProgressNumber = 0;
		}
		game.staminaProgress.value = game.charData.staminaProgressNumber;
		// Увеличение уровня 
		if (game.dumbData.bodyExpNumber >= game.dumbData.bodyMaxExpNumber) {
			game.upBodyLvl();
		}
	}
	console.log('rotateNumberDumb: ' + game.rotateNumberDumb);
	console.log('armPower: ' + game.dumbData.armPower);
	console.log('dumbWeight: ' + game.dumbData.dumbWeight);

};
// Отпуск касания
function rotateArmsEnd() {
	game.clickFlagDumb = false;
	game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
	localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
	game.serialDumbData = JSON.stringify(game.dumbData); //сериализуем его в строчку
	localStorage.setItem("dumbDataKey", game.serialDumbData); //запишем его в хранилище по ключу "myKey"
};
	
// Функция опускания рук
function backArms() {
	game.backInterval = setInterval(function() {
		if (!game.clickBackFlag) {
			game.backRotateNumber = 5;
		} else if (game.clickBackFlag) {
			game.backRotateNumber = 20;
		}
		// position arms 3
		if (game.rotateArm > 70 && game.positionUp3) {
			game.rotateFirstArm += game.backRotateNumber;
			game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
			game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
			game.rotateArm -= game.backRotateNumber;
			game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
			game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
			if (game.rotateArm <= 70 && game.positionUp3) {
				game.positionUp3 = false;
				game.positionUp2 = true;
				game.rotateNumberDumb = game.rotateNumberDumb * 1.25;
				game.rotateFirstArm = 90;
				game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
				game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
			}
		}
		// position arms 2
		else if (game.rotateArm > 0 && game.rotateArm <= 70 && game.positionUp2 == true) {
			game.rotateArm -= game.backRotateNumber;
			game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';
			game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
			game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';
			if (game.rotateArm <= 0 && game.positionUp2) {
				game.positionUp2 = false;
				game.positionUp1 = true;
				game.rotateNumberDumb = game.rotateNumberDumb * 1.25;
				game.rotateArm = 0;
				game.dumbElem.right_arm.style.transform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.transform = 'rotate(' + game.rotateArm + 'deg)';	
				game.dumbElem.right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateArm) + 'deg)';
				game.dumbElem.left_arm.style.WebkitTransform = 'rotate(' + game.rotateArm + 'deg)';	
			}
		}	
		// position arms 1
		else if (game.rotateFirstArm > 0 && game.rotateFirstArm <= 90 && game.positionUp1) {
			game.rotateFirstArm -= game.backRotateNumber;
			game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
			game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
			game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
			if (game.rotateFirstArm <= 0 && game.positionUp1) {
				game.rotateFirstArm = 0;
				game.dumbElem.first_right_arm.style.transform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.transform = 'rotate(' + game.rotateFirstArm + 'deg)';
				game.dumbElem.first_right_arm.style.WebkitTransform = 'rotate(' + (-game.rotateFirstArm) + 'deg)';
				game.dumbElem.first_left_arm.style.WebkitTransform = 'rotate(' + game.rotateFirstArm + 'deg)';
				game.clickBackFlag = false;
				game.startBackArmFlag = false;
				game.exp2FlagDumb = false;
				game.exp3FlagDumb = false;
				clearInterval(game.backInterval);
				game.backMouth();
				game.moanSound.pause();
				game.moanSound.currentTime = 0;
			} 
		}
	}, 30);
};

// Обработчики клика  Bike *********************************************************************************************************************
game.clickAreaBike.addEventListener("mousedown", rotateLegs);
game.clickAreaBike.addEventListener("mouseup", rotateLegsEnd);

// Функции клика
function rotateLegs() {	
	if (!game.clickFlagBike) {
		game.moanSound.play();
		game.clickFlagBike = true;	
		game.changeMouth();
		clearInterval(game.autoInterval);
		clearInterval(game.downInterval);
		game.downRotateFlag = false;
		game.stopAutoRotateCount = 0;
		if (game.plusMinusNumberFlag == 'plus') {
			game.rotateNumberBike = game.bikeData.legPower - game.bikeData.bikeSpeed;
			if (game.rotateNumberBike > 50) {
				game.rotateNumberBike = 50;
			} else if (game.rotateNumberBike <= 0) {
				game.rotateNumberBike = 0.5;
			}
		} else if (game.plusMinusNumberFlag == 'minus') {
			game.rotateNumberBike = -(game.bikeData.legPower - game.bikeData.bikeSpeed);
			if (game.rotateNumberBike < -50) {
				game.rotateNumberBike = -50;
			} else if (game.rotateNumberBike >= 0) {
				game.rotateNumberBike = -0.5;
			}
		} 
		game.rotateNumberHalfBike = false;
		if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2) && !game.rotateNumberHalfBike) {
			game.rotateNumberHalfBike = true;
			game.rotateNumberBike *= 0.5;
		}
		autoRotate();
	}
};

// Когда отпустили палец
function rotateLegsEnd() {
	game.clickFlagBike = false;
	if (!game.downRotateFlag) {
		game.downRotateFlag = true;
		downRotate();
	}	
	game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
	localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
	game.serialBikeData = JSON.stringify(game.bikeData); //сериализуем его в строчку
	localStorage.setItem("bikeDataKey", game.serialBikeData); //запишем его в хранилище по ключу "myKey"
};
	
// Функция автоматического кручения педалей
function autoRotate() {
	game.autoInterval = setInterval(function() {
		// Стамина меньше 20%
		if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2) && !game.rotateNumberHalfBike) {
			game.rotateNumberHalfBike = true;
			game.rotateNumberBike *= 0.5;
		}
		// Вращение педалей **********************************************************************************************************
		if (game.rotateLeg >= 0) { // position legs 1
			game.rotateLeg += game.rotateNumberBike;
			game.rotateFirstLeftLeg -= game.rotateNumberBike * 1.3;
			game.transLeftPedals -= game.rotateNumberBike * 1.8;
			game.rotateFirstRightLeg -= game.rotateNumberBike * 1.3;		
			game.transRightPedals += game.rotateNumberBike * 1.8;
			game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
			game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
			game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
			game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
			game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
			game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
			game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
			game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
			game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
			game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
			game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
			game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
			if (game.rotateLeg >= 53) { 				
				if (game.proteinMain.style.display == 'none') {
					game.bikeData.legsExpNumber += game.bikeData.bikeExp;  // Exp and Money
				} else if (game.proteinMain.style.display == 'block') {
					game.bikeData.legsExpNumber += game.bikeData.bikeExp * 1.2;  // Exp and Money
				}
				game.charData.moneyNumber += game.bikeData.bikeMoney; 
				game.expProgressBike.value = game.bikeData.legsExpNumber;
				game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
				game.moneyMain.innerHTML = game.charData.moneyNumber;
				game.sumRotate = game.rotateLeg;
				game.rotateLeg = 53;
				game.rotateFirstLeftLeg = -68.9;
				game.transLeftPedals = -95.4;
				game.rotateFirstRightLeg = -68.9;
				game.transRightPedals = 95.4;
				game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
				game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
				game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
				game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
				game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
				game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
				game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
				game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
				game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
				game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
				game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
				game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
				game.rotateNumberBike = -game.rotateNumberBike;
				setTimeout(function() {
					game.rotateLeg = 53 - (game.sumRotate - 53);
					game.rotateFirstLeftLeg = -(68.9 - (game.sumRotate * 1.3 - 68.9));
					game.transLeftPedals = -(95.4 - (game.sumRotate * 1.8 - 95.4));
					game.rotateFirstRightLeg = -(68.9 - (game.sumRotate * 1.3 - 68.9));		
					game.transRightPedals = 95.4 - (game.sumRotate * 1.8 - 95.4);
					if (game.rotateLeg > 0) {
						game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
						game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
					} else if (game.rotateLeg <= 0) {						
						if (game.proteinMain.style.display == 'none') {
							game.bikeData.legsExpNumber += game.bikeData.bikeExp;  // Exp and Money
						} else if (game.proteinMain.style.display == 'block') {
							game.bikeData.legsExpNumber += game.bikeData.bikeExp * 1.2;  // Exp and Money
						}
						game.charData.moneyNumber += game.bikeData.bikeMoney; 
						game.expProgressBike.value = game.bikeData.legsExpNumber;
						game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
						game.moneyMain.innerHTML = game.charData.moneyNumber;
						game.sumRotate = game.rotateLeg;
						game.rotateLeg = 0;
						game.rotateFirstLeftLeg = 0;
						game.transLeftPedals = 0;
						game.rotateFirstRightLeg = 0;
						game.transRightPedals = 0;
						game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
						game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
						game.rotateNumberBike = -game.rotateNumberBike;
						setTimeout(function() {
							game.rotateLeg = -game.sumRotate;
							game.rotateFirstLeftLeg = game.sumRotate * 1.3;
							game.transLeftPedals = game.sumRotate * 1.8;
							game.rotateFirstRightLeg = game.sumRotate * 1.3;		
							game.transRightPedals = -game.sumRotate * 1.8;
							if (game.rotateLeg < 53) {
								game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
								game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
							} else if (game.rotateLeg >= 53) {								
								if (game.proteinMain.style.display == 'none') {
									game.bikeData.legsExpNumber += game.bikeData.bikeExp;  // Exp and Money
								} else if (game.proteinMain.style.display == 'block') {
									game.bikeData.legsExpNumber += game.bikeData.bikeExp * 1.2;  // Exp and Money
								}
								game.charData.moneyNumber += game.bikeData.bikeMoney; 
								game.expProgressBike.value = game.bikeData.legsExpNumber;
								game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
								game.moneyMain.innerHTML = game.charData.moneyNumber;
								game.sumRotate = game.rotateLeg;
								game.rotateLeg = 53;
								game.rotateFirstLeftLeg = -68.9;
								game.transLeftPedals = -95.4;
								game.rotateFirstRightLeg = -68.9;
								game.transRightPedals = 95.4;
								game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
								game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
								game.rotateNumberBike = -game.rotateNumberBike;
							}
						}, 50);
					}	
				}, 50);			
			}
			if (game.rotateLeg < 0) {				
				if (game.proteinMain.style.display == 'none') {
					game.bikeData.legsExpNumber += game.bikeData.bikeExp;  // Exp and Money
				} else if (game.proteinMain.style.display == 'block') {
					game.bikeData.legsExpNumber += game.bikeData.bikeExp * 1.2;  // Exp and Money
				}
				game.charData.moneyNumber += game.bikeData.bikeMoney; 
				game.expProgressBike.value = game.bikeData.legsExpNumber;
				game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
				game.moneyMain.innerHTML = game.charData.moneyNumber;
				game.sumRotate = game.rotateLeg;
				game.rotateLeg = 0;
				game.rotateFirstLeftLeg = 0;
				game.transLeftPedals = 0;
				game.rotateFirstRightLeg = 0;
				game.transRightPedals = 0;
				game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
				game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
				game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
				game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
				game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
				game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
				game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
				game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
				game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
				game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
				game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
				game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
				game.rotateNumberBike = -game.rotateNumberBike;
				setTimeout(function() {
					game.rotateLeg = -game.sumRotate;
					game.rotateFirstLeftLeg = game.sumRotate * 1.3;
					game.transLeftPedals = game.sumRotate * 1.8;
					game.rotateFirstRightLeg = game.sumRotate * 1.3;		
					game.transRightPedals = -game.sumRotate * 1.8;
					if (game.rotateLeg < 53) {
						game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
						game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
					} else if (game.rotateLeg >= 53) { 						
						if (game.proteinMain.style.display == 'none') {
							game.bikeData.legsExpNumber += game.bikeData.bikeExp;  // Exp and Money
						} else if (game.proteinMain.style.display == 'block') {
							game.bikeData.legsExpNumber += game.bikeData.bikeExp * 1.2;  // Exp and Money
						}
						game.charData.moneyNumber += game.bikeData.bikeMoney; 
						game.expProgressBike.value = game.bikeData.legsExpNumber;
						game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
						game.moneyMain.innerHTML = game.charData.moneyNumber;
						game.sumRotate = game.rotateLeg;
						game.rotateLeg = 53;
						game.rotateFirstLeftLeg = -68.9;
						game.transLeftPedals = -95.4;
						game.rotateFirstRightLeg = -68.9;
						game.transRightPedals = 95.4;
						game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
						game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
						game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
						game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
						game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
						game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
						game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
						game.rotateNumberBike = -game.rotateNumberBike;
						setTimeout(function() {
							game.rotateLeg = 53 - (game.sumRotate - 53);
							game.rotateFirstLeftLeg = -(68.9 - (game.sumRotate * 1.3 - 68.9));
							game.transLeftPedals = -(95.4 - (game.sumRotate * 1.8 - 95.4));
							game.rotateFirstRightLeg = -(68.9 - (game.sumRotate * 1.3 - 68.9));		
							game.transRightPedals = 95.4 - (game.sumRotate * 1.8 - 95.4);
							if (game.rotateLeg > 0) {
								game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
								game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
							}						
							if (game.rotateLeg <= 0) {								
								if (game.proteinMain.style.display == 'none') {
									game.bikeData.legsExpNumber += game.bikeData.bikeExp;  // Exp and Money
								} else if (game.proteinMain.style.display == 'block') {
									game.bikeData.legsExpNumber += game.bikeData.bikeExp * 1.2;  // Exp and Money
								}
								game.charData.moneyNumber += game.bikeData.bikeMoney; 
								game.expProgressBike.value = game.bikeData.legsExpNumber;
								game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
								game.moneyMain.innerHTML = game.charData.moneyNumber;
								game.sumRotate = game.rotateLeg;
								game.rotateLeg = 0;
								game.rotateFirstLeftLeg = 0;
								game.transLeftPedals = 0;
								game.rotateFirstRightLeg = 0;
								game.transRightPedals = 0;
								game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
								game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
								game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
								game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
								game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
								game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
								game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
								game.rotateNumberBike = -game.rotateNumberBike;
							}
						}, 50);
					}	
				}, 50);
			}
		}
		// Отнимание стамины
		if (!game.minusStamFlag) {
			game.minusStamFlag = true;
			setTimeout(function() {
				game.minusStamFlag = false;
				game.charData.staminaProgressNumber -= game.bikeData.staminaMinus;
			}, 200);
		}
		if (game.charData.staminaProgressNumber < game.charData.staminaMaxProgressNumber && !game.startRecStamFlag) {
			game.startRecStamFlag = true;
			recoveryStamina();
		}
		if (game.charData.staminaProgressNumber <= 0) {
			game.charData.staminaProgressNumber = 0;
		}
		game.staminaProgress.value = game.charData.staminaProgressNumber;
		// Увеличение уровня 
		if (game.bikeData.legsExpNumber >= game.bikeData.legsMaxExpNumber) {
			game.upLegsLvl();
		}
		// Плюс минус
		if (game.rotateNumberBike < 0) {
			game.plusMinusNumberFlag = 'minus';
		} else if (game.rotateNumberBike >= 0) {
			game.plusMinusNumberFlag = 'plus';
		}
		// Автопрекращение вращения педалей
		game.stopAutoRotateCount += 1;	
		if (game.stopAutoRotateCount >= 300) {
			game.stopAutoRotateCount = 0;
			downRotate();	
		}
		console.log('bikeSpeed: ' + game.bikeData.bikeSpeed);
		console.log('legPower: ' + game.bikeData.legPower);
		console.log('rotateNumberBike: ' + game.rotateNumberBike);
	}, 110);	
};

// Остановка вращения
function downRotate() {
	game.downInterval = setInterval(function() {
		if (game.plusMinusNumberFlag == 'minus') {
			game.rotateNumberBike += 2;
			if (game.rotateNumberBike >= 0) {
				clearInterval(game.autoInterval);
				clearInterval(game.downInterval);
				game.backMouth();
				game.downRotateFlag = false;
				game.moanSound.pause();
				game.moanSound.currentTime = 0;
			}
		} else if (game.plusMinusNumberFlag == 'plus') {
			game.rotateNumberBike -= 2;
			if (game.rotateNumberBike <= 0) {
				clearInterval(game.autoInterval);
				clearInterval(game.downInterval);
				game.backMouth();
				game.downRotateFlag = false;
				game.moanSound.pause();
				game.moanSound.currentTime = 0;
			}
		}	
	}, 110);
};

// Переключение скоростей велотренажеров *************************************************************************************************
game.bikeElem.bike_speeds.addEventListener('mousedown', changeSpeeds);

function changeSpeeds(event) {
	switch (event.target.id) {
		case 'btn-up-speed':
			game.bikeData.speedNumber += 1;
			if (game.bikeData.bikeFlag == 1 && game.bikeData.speedNumber > 4) {
				game.bikeData.speedNumber = 4;
			} else if (game.bikeData.bikeFlag == 2 && game.bikeData.speedNumber > 7) {
				game.bikeData.speedNumber = 7;
			} else if (game.bikeData.bikeFlag == 3 && game.bikeData.speedNumber > 10) {
				game.bikeData.speedNumber = 10;
			}
		break;
		case 'btn-down-speed':
			game.bikeData.speedNumber -= 1;
			if (game.bikeData.speedNumber < 1) {
				game.bikeData.speedNumber = 1;
			}
		break;
	}
	switch (game.bikeData.speedNumber) {
		case 1:
			game.speedChoiceCase(1, 1, 70, 1);
		break;
		case 2:
			game.speedChoiceCase(2.5, 2, 77, 2);
		break;
		case 3:
			game.speedChoiceCase(6, 3, 87, 3);
		break;
		case 4:
			game.speedChoiceCase(13.8, 4, 101, 4);
		break;
		case 5:
			game.speedChoiceCase(30.4, 5, 116, 5);
		break;
		case 6:
			game.speedChoiceCase(63.8, 6, 132, 6);
		break;
		case 7:
			game.speedChoiceCase(127.5, 7, 150, 7);
		break;
		case 8:
			game.speedChoiceCase(242.3, 9, 170, 9);
		break;
		case 9:
			game.speedChoiceCase(436, 11, 192, 11);
		break;
		case 10:
			game.speedChoiceCase(741.3, 13, 217, 13);
		break;
	}
	if (game.rotateNumber < 0) {
		game.rotateNumber = -(game.rotateNumber);
		game.plusMinusNumberFlag = 'plus';
	}
	game.rotateLeg = 0;
	game.rotateFirstLeftLeg = 0;
	game.transLeftPedals = 0;
	game.rotateFirstRightLeg = 0;
	game.transRightPedals = 0;
	game.bikeElem.left_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
	game.bikeElem.first_left_legs.style.transform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
	game.bikeElem.left_pedals.style.transform = 'translateY(' + game.transLeftPedals + 'px)';
	game.bikeElem.right_legs.style.transform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
	game.bikeElem.first_right_legs.style.transform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
	game.bikeElem.right_pedals.style.transform = 'translateY(' + game.transRightPedals + 'px)';
	game.bikeElem.left_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // левая
	game.bikeElem.first_left_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstLeftLeg + 'deg)';
	game.bikeElem.left_pedals.style.WebkitTransform = 'translateY(' + game.transLeftPedals + 'px)';
	game.bikeElem.right_legs.style.WebkitTransform = 'rotate(' + game.rotateLeg + 'deg)'; // правая
	game.bikeElem.first_right_legs.style.WebkitTransform = 'rotate(' + game.rotateFirstRightLeg + 'deg)';
	game.bikeElem.right_pedals.style.WebkitTransform = 'translateY(' + game.transRightPedals + 'px)';
	game.serialBikeData = JSON.stringify(game.bikeData); //сериализуем его в строчку
	localStorage.setItem("bikeDataKey", game.serialBikeData); //запишем его в хранилище по ключу "myKey"
}

// Востановление стамины  ****************************************************************************************************************
function recoveryStamina() {
	game.intervalRecStam = setInterval(function() {
		if (game.energyMain.style.display == 'none') {
			game.charData.staminaProgressNumber += 2;
		} else if (game.energyMain.style.display == 'block') {
			game.charData.staminaProgressNumber += 2.6;
		}
		if (game.charData.staminaProgressNumber >= game.charData.staminaMaxProgressNumber) {
			game.charData.staminaProgressNumber = game.charData.staminaMaxProgressNumber;
			clearInterval(game.intervalRecStam);
			game.startRecStamFlag = false;
		}
		if (game.charData.staminaProgressNumber > (game.charData.staminaMaxProgressNumber * 0.2) && game.rotateNumberHalfDumb) {
			game.rotateNumberHalfDumb = false;
			game.rotateNumberDumb = game.rotateNumberDumb * 2;
			game.rotateNumberBike = game.rotateNumberBike * 2;
		}
		game.staminaProgress.value = game.charData.staminaProgressNumber;
		game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
		localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
	}, game.charData.recStamInterval);
};

// Кнопки открытия менюх  **************************************************************************************************************
//game.btns_menu.addEventListener('mousedown', openMenus);
game.btns_menu.addEventListener('click', openMenus);

function openMenus(event) {
	switch (event.target.id) {
		case 'btn-menu_1_':
			if (!game.menuFlag) {
				game.buttonSound.play();
				game.menuFlag = true;
				game.inventoryFlag = false;
				game.shopFlag = false;
				game.optionsFlag = false;
				game.charMenu.style.display = 'block';
				game.charInventoryDumb.style.display = 'none';
				game.charInventoryBike.style.display = 'none';
				game.charShop.style.display = 'none';
				game.charOptions.style.display = 'none';
				game.fonBtnMenu.classList.add('yellow');
				game.fonBtnInvent.classList.remove('green');
				game.fonBtnShop.classList.remove('purple');
				game.fonBtnOptions.classList.remove('blue');
				game.moneyShop.style.display = 'none';
				game.infoShop.style.display = 'none';
			} else if (game.menuFlag) {
				game.buttonSound.play();
				game.menuFlag = false;
				game.charMenu.style.display = 'none';
				game.fonBtnMenu.classList.remove('yellow');
			}
		break;
		case 'btn-inventory_1_':
			if (!game.inventoryFlag) {
				game.buttonSound.play();
				game.inventoryFlag = true;
				game.menuFlag = false;
				game.shopFlag = false;
				game.optionsFlag = false;
				if (game.mainWindowDumb.style.display == 'block') {
					game.charInventoryDumb.style.display = 'block';
				} else if (game.mainWindowBike.style.display == 'block') {
					game.charInventoryBike.style.display = 'block';
				}
				game.charMenu.style.display = 'none';
				game.charShop.style.display = 'none';
				game.charOptions.style.display = 'none';
				game.fonBtnInvent.classList.add('green');
				game.fonBtnMenu.classList.remove('yellow');
				game.fonBtnShop.classList.remove('purple');
				game.fonBtnOptions.classList.remove('blue');
				game.moneyShop.style.display = 'none';
				game.infoShop.style.display = 'none';
			} else if (game.inventoryFlag) {
				game.buttonSound.play();
				game.inventoryFlag = false;
				game.charInventoryBike.style.display = 'none';
				game.charInventoryDumb.style.display = 'none';
				game.fonBtnInvent.classList.remove('green');
			}
		break;
		case 'btn-shop_1_':
			if (!game.shopFlag) {
				game.buttonSound.play();
				game.shopFlag = true;
				game.menuFlag = false;
				game.inventoryFlag = false;
				game.optionsFlag = false;
				game.charShop.style.display = 'block';
				game.charMenu.style.display = 'none';
				game.charInventoryDumb.style.display = 'none';
				game.charInventoryBike.style.display = 'none';
				game.charOptions.style.display = 'none';
				game.fonBtnShop.classList.add('purple');
				game.fonBtnInvent.classList.remove('green');
				game.fonBtnMenu.classList.remove('yellow');
				game.fonBtnOptions.classList.remove('blue');
				game.moneyShop.style.display = 'block';
				game.moneyNumberShop.innerHTML = game.charData.moneyNumber;
			} else if (game.shopFlag) {
				game.buttonSound.play();
				game.shopFlag = false;
				game.charShop.style.display = 'none';
				game.fonBtnShop.classList.remove('purple');
				game.moneyShop.style.display = 'none';
				game.infoShop.style.display = 'none';
			}
		break;
		case 'btn-options_1_':
			if (!game.optionsFlag) {
				game.buttonSound.play();
				game.optionsFlag = true;
				game.menuFlag = false;
				game.inventoryFlag = false;
				game.shopFlag = false;
				game.charOptions.style.display = 'block';
				game.charMenu.style.display = 'none';
				game.charInventoryBike.style.display = 'none';
				game.charInventoryDumb.style.display = 'none';
				game.charShop.style.display = 'none';
				game.fonBtnOptions.classList.add('blue');
				game.fonBtnInvent.classList.remove('green');
				game.fonBtnMenu.classList.remove('yellow');
				game.fonBtnShop.classList.remove('purple');
				game.moneyShop.style.display = 'none';
				game.infoShop.style.display = 'none';
			} else if (game.optionsFlag) {
				game.buttonSound.play();
				game.optionsFlag = false;
				game.charOptions.style.display = 'none';
				game.fonBtnOptions.classList.remove('blue');
			}
		break;
	}
};

// Меню чара  ***************************************************************************
game.charMenu.addEventListener('mousedown', menuFunc);

function menuFunc(event) {
	switch (event.target.id) {
		case 'btn-up-body-force_1_':
			if (game.charData.bodyForceNumber == 1 && game.charData.statusPointsNumber >= 1) {
				game.upBodyCase(1, 1);
			} else if (game.charData.bodyForceNumber == 2 && game.charData.statusPointsNumber >= 1) {
				game.upBodyCase(1, 1);
			} else if (game.charData.bodyForceNumber == 3 && game.charData.statusPointsNumber >= 1) {
				game.upBodyCase(1, 1);
			} else if (game.charData.bodyForceNumber == 4 && game.charData.statusPointsNumber >= 1) {
				game.upBodyCase(2, 1);
			} else if (game.charData.bodyForceNumber == 5 && game.charData.statusPointsNumber >= 2) {
				game.upBodyCase(2, 2);
			} else if (game.charData.bodyForceNumber == 6 && game.charData.statusPointsNumber >= 2) {
				game.upBodyCase(2, 2);
			} else if (game.charData.bodyForceNumber == 7 && game.charData.statusPointsNumber >= 2) {
				game.upBodyCase(2, 2);
			} else if (game.charData.bodyForceNumber == 8 && game.charData.statusPointsNumber >= 2) {
				game.upBodyCase(2, 2);
			} else if (game.charData.bodyForceNumber == 9 && game.charData.statusPointsNumber >= 2) {
				game.upBodyCase(3, 2);
			} else if (game.charData.bodyForceNumber == 10 && game.charData.statusPointsNumber >= 3) {
				game.upBodyCase(3, 3);
			} else if (game.charData.bodyForceNumber == 11 && game.charData.statusPointsNumber >= 3) {
				game.upBodyCase(3, 3);
			} else if (game.charData.bodyForceNumber == 12 && game.charData.statusPointsNumber >= 3) {
				game.upBodyCase(3, 3);
			} else if (game.charData.bodyForceNumber == 13 && game.charData.statusPointsNumber >= 3) {
				game.upBodyCase(3, 3);
			} else if (game.charData.bodyForceNumber == 14 && game.charData.statusPointsNumber >= 3) {
				game.upBodyCase(4, 3);
			} else if (game.charData.bodyForceNumber == 15 && game.charData.statusPointsNumber >= 4) {
				game.upBodyCase(4, 4);
			} else if (game.charData.bodyForceNumber == 16 && game.charData.statusPointsNumber >= 4) {
				game.upBodyCase(4, 4);
			} else if (game.charData.bodyForceNumber == 17 && game.charData.statusPointsNumber >= 4) {
				game.upBodyCase(4, 4);
			} else if (game.charData.bodyForceNumber == 18 && game.charData.statusPointsNumber >= 4) {
				game.upBodyCase(4, 4);
			} else if (game.charData.bodyForceNumber == 19 && game.charData.statusPointsNumber >= 4) {
				game.upBodyCase(5, 4);
			} else if (game.charData.bodyForceNumber == 20 && game.charData.statusPointsNumber >= 5) {
				game.upBodyCase(5, 5);
			} else if (game.charData.bodyForceNumber == 21 && game.charData.statusPointsNumber >= 5) {
				game.upBodyCase(5, 5);
			} else if (game.charData.bodyForceNumber == 22 && game.charData.statusPointsNumber >= 5) {
				game.upBodyCase(5, 5);
			} else if (game.charData.bodyForceNumber == 23 && game.charData.statusPointsNumber >= 5) {
				game.upBodyCase(5, 5);
			} else if (game.charData.bodyForceNumber == 24 && game.charData.statusPointsNumber >= 5) {
				game.upBodyCase(6, 5);
			} else if (game.charData.bodyForceNumber == 25 && game.charData.statusPointsNumber >= 6) {
				game.upBodyCase(6, 6);
			} else if (game.charData.bodyForceNumber == 26 && game.charData.statusPointsNumber >= 6) {
				game.upBodyCase(6, 6);
			} else if (game.charData.bodyForceNumber == 27 && game.charData.statusPointsNumber >= 6) {
				game.upBodyCase(6, 6);
			} else if (game.charData.bodyForceNumber == 28 && game.charData.statusPointsNumber >= 6) {
				game.upBodyCase(6, 6);
			} else if (game.charData.bodyForceNumber == 29 && game.charData.statusPointsNumber >= 6) {
				game.upBodyCase(7, 6);
			} else if (game.charData.bodyForceNumber == 30 && game.charData.statusPointsNumber >= 7) {
				game.upBodyCase(7, 7);
			} else if (game.charData.bodyForceNumber == 31 && game.charData.statusPointsNumber >= 7) {
				game.upBodyCase(7, 7);
			} else if (game.charData.bodyForceNumber == 32 && game.charData.statusPointsNumber >= 7) {
				game.upBodyCase(7, 7);
			} else if (game.charData.bodyForceNumber == 33 && game.charData.statusPointsNumber >= 7) {
				game.upBodyCase(7, 7);
			} else if (game.charData.bodyForceNumber == 34 && game.charData.statusPointsNumber >= 7) {
				game.upBodyCase(8, 7);
			} else if (game.charData.bodyForceNumber == 35 && game.charData.statusPointsNumber >= 8) {
				game.upBodyCase(8, 8);
			} else if (game.charData.bodyForceNumber == 36 && game.charData.statusPointsNumber >= 8) {
				game.upBodyCase(8, 8);
			} else if (game.charData.bodyForceNumber == 37 && game.charData.statusPointsNumber >= 8) {
				game.upBodyCase(8, 8);
			} else if (game.charData.bodyForceNumber == 38 && game.charData.statusPointsNumber >= 8) {
				game.upBodyCase(8, 8);
			} else if (game.charData.bodyForceNumber == 39 && game.charData.statusPointsNumber >= 8) {
				game.upBodyCase(9, 8);
			} else if (game.charData.bodyForceNumber == 40 && game.charData.statusPointsNumber >= 9) {
				game.upBodyCase(9, 9);
			} else if (game.charData.bodyForceNumber == 41 && game.charData.statusPointsNumber >= 9) {
				game.upBodyCase(9, 9);
			} else if (game.charData.bodyForceNumber == 42 && game.charData.statusPointsNumber >= 9) {
				game.upBodyCase(9, 9);
			} else if (game.charData.bodyForceNumber == 43 && game.charData.statusPointsNumber >= 9) {
				game.upBodyCase(9, 9);
			} else if (game.charData.bodyForceNumber == 44 && game.charData.statusPointsNumber >= 9) {
				game.upBodyCase(10, 9);
			} else if (game.charData.bodyForceNumber == 45 && game.charData.statusPointsNumber >= 10) {
				game.upBodyCase(10, 10);
			}
			game.buttonSound.play();
			game.bodyForce.innerHTML = game.charData.bodyForceNumber;
			game.bodyNeedPoints.innerHTML = game.charData.bodyNeedPointsNumber;
			game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
			game.statusPoints.innerHTML = game.charData.statusPointsNumber;	
			game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
			localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
			game.serialDumbData = JSON.stringify(game.dumbData); //сериализуем его в строчку
			localStorage.setItem("dumbDataKey", game.serialDumbData); //запишем его в хранилище по ключу "myKey"
		break;
		case 'btn-up-legs-force':
			if (game.charData.legsForceNumber == 1 && game.charData.statusPointsNumber >= 1) {
				game.upLegsCase(1, 1);
			} else if (game.charData.legsForceNumber == 2 && game.charData.statusPointsNumber >= 1) {
				game.upLegsCase(1, 1);
			} else if (game.charData.legsForceNumber == 3 && game.charData.statusPointsNumber >= 1) {
				game.upLegsCase(1, 1);
			} else if (game.charData.legsForceNumber == 4 && game.charData.statusPointsNumber >= 1) {
				game.upLegsCase(2, 1);
			} else if (game.charData.legsForceNumber == 5 && game.charData.statusPointsNumber >= 2) {
				game.upLegsCase(2, 2);
			} else if (game.charData.legsForceNumber == 6 && game.charData.statusPointsNumber >= 2) {
				game.upLegsCase(2, 2);
			} else if (game.charData.legsForceNumber == 7 && game.charData.statusPointsNumber >= 2) {
				game.upLegsCase(2, 2);
			} else if (game.charData.legsForceNumber == 8 && game.charData.statusPointsNumber >= 2) {
				game.upLegsCase(2, 2);
			} else if (game.charData.legsForceNumber == 9 && game.charData.statusPointsNumber >= 2) {
				game.upLegsCase(3, 2);
			} else if (game.charData.legsForceNumber == 10 && game.charData.statusPointsNumber >= 3) {
				game.upLegsCase(3, 3);
			} else if (game.charData.legsForceNumber == 11 && game.charData.statusPointsNumber >= 3) {
				game.upLegsCase(3, 3);
			} else if (game.charData.legsForceNumber == 12 && game.charData.statusPointsNumber >= 3) {
				game.upLegsCase(3, 3);
			} else if (game.charData.legsForceNumber == 13 && game.charData.statusPointsNumber >= 3) {
				game.upLegsCase(3, 3);
			} else if (game.charData.legsForceNumber == 14 && game.charData.statusPointsNumber >= 3) {
				game.upLegsCase(4, 3);
			} else if (game.charData.legsForceNumber == 15 && game.charData.statusPointsNumber >= 4) {
				game.upLegsCase(4, 4);
			} else if (game.charData.legsForceNumber == 16 && game.charData.statusPointsNumber >= 4) {
				game.upLegsCase(4, 4);
			} else if (game.charData.legsForceNumber == 17 && game.charData.statusPointsNumber >= 4) {
				game.upLegsCase(4, 4);
			} else if (game.charData.legsForceNumber == 18 && game.charData.statusPointsNumber >= 4) {
				game.upLegsCase(4, 4);
			} else if (game.charData.legsForceNumber == 19 && game.charData.statusPointsNumber >= 4) {
				game.upLegsCase(5, 4);
			} else if (game.charData.legsForceNumber == 20 && game.charData.statusPointsNumber >= 5) {
				game.upLegsCase(5, 5);
			} else if (game.charData.legsForceNumber == 21 && game.charData.statusPointsNumber >= 5) {
				game.upLegsCase(5, 5);
			} else if (game.charData.legsForceNumber == 22 && game.charData.statusPointsNumber >= 5) {
				game.upLegsCase(5, 5);
			} else if (game.charData.legsForceNumber == 23 && game.charData.statusPointsNumber >= 5) {
				game.upLegsCase(5, 5);
			} else if (game.charData.legsForceNumber == 24 && game.charData.statusPointsNumber >= 5) {
				game.upLegsCase(6, 5);
			} else if (game.charData.legsForceNumber == 25 && game.charData.statusPointsNumber >= 6) {
				game.upLegsCase(6, 6);
			} else if (game.charData.legsForceNumber == 26 && game.charData.statusPointsNumber >= 6) {
				game.upLegsCase(6, 6);
			} else if (game.charData.legsForceNumber == 27 && game.charData.statusPointsNumber >= 6) {
				game.upLegsCase(6, 6);
			} else if (game.charData.legsForceNumber == 28 && game.charData.statusPointsNumber >= 6) {
				game.upLegsCase(6, 6);
			} else if (game.charData.legsForceNumber == 29 && game.charData.statusPointsNumber >= 6) {
				game.upLegsCase(7, 6);
			} else if (game.charData.legsForceNumber == 30 && game.charData.statusPointsNumber >= 7) {
				game.upLegsCase(7, 7);
			} else if (game.charData.legsForceNumber == 31 && game.charData.statusPointsNumber >= 7) {
				game.upLegsCase(7, 7);
			} else if (game.charData.legsForceNumber == 32 && game.charData.statusPointsNumber >= 7) {
				game.upLegsCase(7, 7);
			} else if (game.charData.legsForceNumber == 33 && game.charData.statusPointsNumber >= 7) {
				game.upLegsCase(7, 7);
			} else if (game.charData.legsForceNumber == 34 && game.charData.statusPointsNumber >= 7) {
				game.upLegsCase(8, 7);
			} else if (game.charData.legsForceNumber == 35 && game.charData.statusPointsNumber >= 8) {
				game.upLegsCase(8, 8);
			} else if (game.charData.legsForceNumber == 36 && game.charData.statusPointsNumber >= 8) {
				game.upLegsCase(8, 8);
			} else if (game.charData.legsForceNumber == 37 && game.charData.statusPointsNumber >= 8) {
				game.upLegsCase(8, 8);
			} else if (game.charData.legsForceNumber == 38 && game.charData.statusPointsNumber >= 8) {
				game.upLegsCase(8, 8);
			} else if (game.charData.legsForceNumber == 39 && game.charData.statusPointsNumber >= 8) {
				game.upLegsCase(9, 8);
			} else if (game.charData.legsForceNumber == 40 && game.charData.statusPointsNumber >= 9) {
				game.upLegsCase(9, 9);
			} else if (game.charData.legsForceNumber == 41 && game.charData.statusPointsNumber >= 9) {
				game.upLegsCase(9, 9);
			} else if (game.charData.legsForceNumber == 42 && game.charData.statusPointsNumber >= 9) {
				game.upLegsCase(9, 9);
			} else if (game.charData.legsForceNumber == 43 && game.charData.statusPointsNumber >= 9) {
				game.upLegsCase(9, 9);
			} else if (game.charData.legsForceNumber == 44 && game.charData.statusPointsNumber >= 9) {
				game.upLegsCase(10, 9);
			} else if (game.charData.legsForceNumber == 45 && game.charData.statusPointsNumber >= 10) {
				game.upLegsCase(10, 10);
			}
			game.buttonSound.play();
			game.legsForce.innerHTML = game.charData.legsForceNumber;
			game.legsNeedPoints.innerHTML = game.charData.legsNeedPointsNumber;
			game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);
			game.statusPoints.innerHTML = game.charData.statusPointsNumber;	
			game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
			localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
			game.serialBikeData = JSON.stringify(game.bikeData); //сериализуем его в строчку
			localStorage.setItem("bikeDataKey", game.serialBikeData); //запишем его в хранилище по ключу "myKey"
		break;
		case 'btn-up-stamina':
			if (game.charData.staminaNumber == 1 && game.charData.statusPointsNumber >= 1) {
				game.upStaminaCase(1, 1);
			} else if (game.charData.staminaNumber == 2 && game.charData.statusPointsNumber >= 1) {
				game.upStaminaCase(1, 1);
			} else if (game.charData.staminaNumber == 3 && game.charData.statusPointsNumber >= 1) {
				game.upStaminaCase(1, 1);
			} else if (game.charData.staminaNumber == 4 && game.charData.statusPointsNumber >= 1) {
				game.upStaminaCase(2, 1);
			} else if (game.charData.staminaNumber == 5 && game.charData.statusPointsNumber >= 2) {
				game.upStaminaCase(2, 2);
			} else if (game.charData.staminaNumber == 6 && game.charData.statusPointsNumber >= 2) {
				game.upStaminaCase(2, 2);
			} else if (game.charData.staminaNumber == 7 && game.charData.statusPointsNumber >= 2) {
				game.upStaminaCase(2, 2);
			} else if (game.charData.staminaNumber == 8 && game.charData.statusPointsNumber >= 2) {
				game.upStaminaCase(2, 2);
			} else if (game.charData.staminaNumber == 9 && game.charData.statusPointsNumber >= 2) {
				game.upStaminaCase(3, 2);
			} else if (game.charData.staminaNumber == 10 && game.charData.statusPointsNumber >= 3) {
				game.upStaminaCase(3, 3);
			} else if (game.charData.staminaNumber == 11 && game.charData.statusPointsNumber >= 3) {
				game.upStaminaCase(3, 3);
			} else if (game.charData.staminaNumber == 12 && game.charData.statusPointsNumber >= 3) {
				game.upStaminaCase(3, 3);
			} else if (game.charData.staminaNumber == 13 && game.charData.statusPointsNumber >= 3) {
				game.upStaminaCase(3, 3);
			} else if (game.charData.staminaNumber == 14 && game.charData.statusPointsNumber >= 3) {
				game.upStaminaCase(4, 3);
			} else if (game.charData.staminaNumber == 15 && game.charData.statusPointsNumber >= 4) {
				game.upStaminaCase(4, 4);
			} else if (game.charData.staminaNumber == 16 && game.charData.statusPointsNumber >= 4) {
				game.upStaminaCase(4, 4);
			} else if (game.charData.staminaNumber == 17 && game.charData.statusPointsNumber >= 4) {
				game.upStaminaCase(4, 4);
			} else if (game.charData.staminaNumber == 18 && game.charData.statusPointsNumber >= 4) {
				game.upStaminaCase(4, 4);
			} else if (game.charData.staminaNumber == 19 && game.charData.statusPointsNumber >= 4) {
				game.upStaminaCase(5, 4);
			} else if (game.charData.staminaNumber == 20 && game.charData.statusPointsNumber >= 5) {
				game.upStaminaCase(5, 5);
			} else if (game.charData.staminaNumber == 21 && game.charData.statusPointsNumber >= 5) {
				game.upStaminaCase(5, 5);
			} else if (game.charData.staminaNumber == 22 && game.charData.statusPointsNumber >= 5) {
				game.upStaminaCase(5, 5);
			} else if (game.charData.staminaNumber == 23 && game.charData.statusPointsNumber >= 5) {
				game.upStaminaCase(5, 5);
			} else if (game.charData.staminaNumber == 24 && game.charData.statusPointsNumber >= 5) {
				game.upStaminaCase(6, 5);
			} else if (game.charData.staminaNumber == 25 && game.charData.statusPointsNumber >= 6) {
				game.upStaminaCase(6, 6);
			} else if (game.charData.staminaNumber == 26 && game.charData.statusPointsNumber >= 6) {
				game.upStaminaCase(6, 6);
			} else if (game.charData.staminaNumber == 27 && game.charData.statusPointsNumber >= 6) {
				game.upStaminaCase(6, 6);
			} else if (game.charData.staminaNumber == 28 && game.charData.statusPointsNumber >= 6) {
				game.upStaminaCase(6, 6);
			} else if (game.charData.staminaNumber == 29 && game.charData.statusPointsNumber >= 6) {
				game.upStaminaCase(7, 6);
			} else if (game.charData.staminaNumber == 30 && game.charData.statusPointsNumber >= 7) {
				game.upStaminaCase(7, 7);
			} else if (game.charData.staminaNumber == 31 && game.charData.statusPointsNumber >= 7) {
				game.upStaminaCase(7, 7);
			} else if (game.charData.staminaNumber == 32 && game.charData.statusPointsNumber >= 7) {
				game.upStaminaCase(7, 7);
			} else if (game.charData.staminaNumber == 33 && game.charData.statusPointsNumber >= 7) {
				game.upStaminaCase(7, 7);
			} else if (game.charData.staminaNumber == 34 && game.charData.statusPointsNumber >= 7) {
				game.upStaminaCase(8, 7);
			} else if (game.charData.staminaNumber == 35 && game.charData.statusPointsNumber >= 8) {
				game.upStaminaCase(8, 8);
			} else if (game.charData.staminaNumber == 36 && game.charData.statusPointsNumber >= 8) {
				game.upStaminaCase(8, 8);
			} else if (game.charData.staminaNumber == 37 && game.charData.statusPointsNumber >= 8) {
				game.upStaminaCase(8, 8);
			} else if (game.charData.staminaNumber == 38 && game.charData.statusPointsNumber >= 8) {
				game.upStaminaCase(8, 8);
			} else if (game.charData.staminaNumber == 39 && game.charData.statusPointsNumber >= 8) {
				game.upStaminaCase(9, 8);
			} else if (game.charData.staminaNumber == 40 && game.charData.statusPointsNumber >= 9) {
				game.upStaminaCase(9, 9);
			} else if (game.charData.staminaNumber == 41 && game.charData.statusPointsNumber >= 9) {
				game.upStaminaCase(9, 9);
			} else if (game.charData.staminaNumber == 42 && game.charData.statusPointsNumber >= 9) {
				game.upStaminaCase(9, 9);
			} else if (game.charData.staminaNumber == 43 && game.charData.statusPointsNumber >= 9) {
				game.upStaminaCase(9, 9);
			} else if (game.charData.staminaNumber == 44 && game.charData.statusPointsNumber >= 9) {
				game.upStaminaCase(10, 9);
			} else if (game.charData.staminaNumber == 45 && game.charData.statusPointsNumber >= 10) {
				game.upStaminaCase(10, 10);
			}
			game.buttonSound.play();
			game.staminaProgress.max = game.charData.staminaMaxProgressNumber;
			game.stamina.innerHTML = game.charData.staminaNumber;
			game.staminaNeedPoints.innerHTML = game.charData.staminaNeedPointsNumber;
			game.staminaInfo.innerHTML = game.charData.staminaMaxProgressNumber.toFixed(1);
			game.statusPoints.innerHTML = game.charData.statusPointsNumber;	
			game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
			localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
		break;
		case 'btn-up-recoverystamina':
			if (game.charData.recStamNumber == 1 && game.charData.statusPointsNumber >= 1) {
				game.upRecStamCase(1, 1);
			} else if (game.charData.recStamNumber == 2 && game.charData.statusPointsNumber >= 1) {
				game.upRecStamCase(1, 1);
			} else if (game.charData.recStamNumber == 3 && game.charData.statusPointsNumber >= 1) {
				game.upRecStamCase(1, 1);
			} else if (game.charData.recStamNumber == 4 && game.charData.statusPointsNumber >= 1) {
				game.upRecStamCase(2, 1);
			} else if (game.charData.recStamNumber == 5 && game.charData.statusPointsNumber >= 2) {
				game.upRecStamCase(2, 2);
			} else if (game.charData.recStamNumber == 6 && game.charData.statusPointsNumber >= 2) {
				game.upRecStamCase(2, 2);
			} else if (game.charData.recStamNumber == 7 && game.charData.statusPointsNumber >= 2) {
				game.upRecStamCase(2, 2);
			} else if (game.charData.recStamNumber == 8 && game.charData.statusPointsNumber >= 2) {
				game.upRecStamCase(2, 2);
			} else if (game.charData.recStamNumber == 9 && game.charData.statusPointsNumber >= 2) {
				game.upRecStamCase(3, 2);
			} else if (game.charData.recStamNumber == 10 && game.charData.statusPointsNumber >= 3) {
				game.upRecStamCase(3, 3);
			} else if (game.charData.recStamNumber == 11 && game.charData.statusPointsNumber >= 3) {
				game.upRecStamCase(3, 3);
			} else if (game.charData.recStamNumber == 12 && game.charData.statusPointsNumber >= 3) {
				game.upRecStamCase(3, 3);
			} else if (game.charData.recStamNumber == 13 && game.charData.statusPointsNumber >= 3) {
				game.upRecStamCase(3, 3);
			} else if (game.charData.recStamNumber == 14 && game.charData.statusPointsNumber >= 3) {
				game.upRecStamCase(4, 3);
			} else if (game.charData.recStamNumber == 15 && game.charData.statusPointsNumber >= 4) {
				game.upRecStamCase(4, 4);
			} else if (game.charData.recStamNumber == 16 && game.charData.statusPointsNumber >= 4) {
				game.upRecStamCase(4, 4);
			} else if (game.charData.recStamNumber == 17 && game.charData.statusPointsNumber >= 4) {
				game.upRecStamCase(4, 4);
			} else if (game.charData.recStamNumber == 18 && game.charData.statusPointsNumber >= 4) {
				game.upRecStamCase(4, 4);
			} else if (game.charData.recStamNumber == 19 && game.charData.statusPointsNumber >= 4) {
				game.upRecStamCase(5, 4);
			} else if (game.charData.recStamNumber == 20 && game.charData.statusPointsNumber >= 5) {
				game.upRecStamCase(5, 5);
			} else if (game.charData.recStamNumber == 21 && game.charData.statusPointsNumber >= 5) {
				game.upRecStamCase(5, 5);
			} else if (game.charData.recStamNumber == 22 && game.charData.statusPointsNumber >= 5) {
				game.upRecStamCase(5, 5);
			} else if (game.charData.recStamNumber == 23 && game.charData.statusPointsNumber >= 5) {
				game.upRecStamCase(5, 5);
			} else if (game.charData.recStamNumber == 24 && game.charData.statusPointsNumber >= 5) {
				game.upRecStamCase(6, 5);
			} else if (game.charData.recStamNumber == 25 && game.charData.statusPointsNumber >= 6) {
				game.upRecStamCase(6, 6);
			} else if (game.charData.recStamNumber == 26 && game.charData.statusPointsNumber >= 6) {
				game.upRecStamCase(6, 6);
			} else if (game.charData.recStamNumber == 27 && game.charData.statusPointsNumber >= 6) {
				game.upRecStamCase(6, 6);
			} else if (game.charData.recStamNumber == 28 && game.charData.statusPointsNumber >= 6) {
				game.upRecStamCase(6, 6);
			} else if (game.charData.recStamNumber == 29 && game.charData.statusPointsNumber >= 6) {
				game.upRecStamCase(7, 6);
			} else if (game.charData.recStamNumber == 30 && game.charData.statusPointsNumber >= 7) {
				game.upRecStamCase(7, 7);
			} else if (game.charData.recStamNumber == 31 && game.charData.statusPointsNumber >= 7) {
				game.upRecStamCase(7, 7);
			} else if (game.charData.recStamNumber == 32 && game.charData.statusPointsNumber >= 7) {
				game.upRecStamCase(7, 7);
			} else if (game.charData.recStamNumber == 33 && game.charData.statusPointsNumber >= 7) {
				game.upRecStamCase(7, 7);
			} else if (game.charData.recStamNumber == 34 && game.charData.statusPointsNumber >= 7) {
				game.upRecStamCase(8, 7);
			} else if (game.charData.recStamNumber == 35 && game.charData.statusPointsNumber >= 8) {
				game.upRecStamCase(8, 8);
			} else if (game.charData.recStamNumber == 36 && game.charData.statusPointsNumber >= 8) {
				game.upRecStamCase(8, 8);
			} else if (game.charData.recStamNumber == 37 && game.charData.statusPointsNumber >= 8) {
				game.upRecStamCase(8, 8);
			} else if (game.charData.recStamNumber == 38 && game.charData.statusPointsNumber >= 8) {
				game.upRecStamCase(8, 8);
			} else if (game.charData.recStamNumber == 39 && game.charData.statusPointsNumber >= 8) {
				game.upRecStamCase(9, 8);
			} else if (game.charData.recStamNumber == 40 && game.charData.statusPointsNumber >= 9) {
				game.upRecStamCase(9, 9);
			} else if (game.charData.recStamNumber == 41 && game.charData.statusPointsNumber >= 9) {
				game.upRecStamCase(9, 9);
			} else if (game.charData.recStamNumber == 42 && game.charData.statusPointsNumber >= 9) {
				game.upRecStamCase(9, 9);
			} else if (game.charData.recStamNumber == 43 && game.charData.statusPointsNumber >= 9) {
				game.upRecStamCase(9, 9);
			} else if (game.charData.recStamNumber == 44 && game.charData.statusPointsNumber >= 9) {
				game.upRecStamCase(10, 9);
			} else if (game.charData.recStamNumber == 45 && game.charData.statusPointsNumber >= 10) {
				game.upRecStamCase(10, 10);
			}
			game.buttonSound.play();
			game.recStam.innerHTML = game.charData.recStamNumber;
			game.recStamNeedPoints.innerHTML = game.charData.recStamNeedPointsNumber;
			game.recStamInfo.innerHTML = game.charData.recStamInfoNumber.toFixed(1);
			game.statusPoints.innerHTML = game.charData.statusPointsNumber;	
			game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
			localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
		break;
	}
};

// Меню инвентаря  ***********************************************************************
game.charInventoryDumb.addEventListener('mousedown', inventoryFuncDumb);
game.charInventoryBike.addEventListener('mousedown', inventoryFuncBike);

function inventoryFuncDumb(event) {
	switch (event.target.id) {
		case 'btn-dumbbell1-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[0], game.dumbElem.right_dumbbells[0], 1, 1, 10, 1, 1);
		break;
		case 'btn-dumbbell2-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[1], game.dumbElem.right_dumbbells[1], 2.5, 2, 20, 2, 2);
		break;
		case 'btn-dumbbell3-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[2], game.dumbElem.right_dumbbells[2], 6, 3, 40, 3, 3);
		break;
		case 'btn-dumbbell4-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[3], game.dumbElem.right_dumbbells[3], 13.8, 4, 70, 4, 4);
		break;
		case 'btn-dumbbell5-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[4], game.dumbElem.right_dumbbells[4], 30.4, 5, 110, 5, 5);
		break;
		case 'btn-dumbbell6-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[5], game.dumbElem.right_dumbbells[5], 63.8, 6, 160, 6, 6);
		break;
		case 'btn-dumbbell7-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[6], game.dumbElem.right_dumbbells[6], 127.5, 7, 225, 7, 7);
		break;
		case 'btn-dumbbell8-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[7], game.dumbElem.right_dumbbells[7], 242.3, 9, 310, 9, 8);
		break;
		case 'btn-dumbbell9-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[8], game.dumbElem.right_dumbbells[8], 436, 11, 420, 11, 9);
		break;
		case 'btn-dumbbell10-inventary':
			game.dumbChoiceCase(game.dumbElem.left_dumbbells[9], game.dumbElem.right_dumbbells[9], 741.3, 13, 550, 13, 10);
		break;
		case 'btn-energy-drink_1_':
			if (game.proteinMain.style.display == 'block' && game.timerData.proteinTransFlag == false) {
				game.energyMain.style.display = 'block';
				game.timerData.energeticTransFlag = true;
				game.energyMain.style.transform = 'translateX(150px)';
				game.energyMain.style.WebkitTransform = 'translateX(150px)';
			} else {
				game.energyMain.style.display = 'block';
				game.energyMain.style.transform = 'translateX(0px)';
				game.energyMain.style.WebkitTransform = 'translateX(0px)';
			}
			game.timerData.energeticTimerNumber += 90;
			game.energyTimer.innerHTML = game.timerData.energeticTimerNumber;
			game.inventData.energeticInventNumber -= 1;
			game.stimQuantInventDumb[0].innerHTML = game.inventData.energeticInventNumber;
			game.stimQuantInventBike[0].innerHTML = game.inventData.energeticInventNumber;
			if (game.inventData.energeticInventNumber == 0) {
				game.items_inventoryDumb[10].style.display = 'none';
				game.items_inventoryBike[3].style.display = 'none';
				game.inventData.energyInventFlag = false;
			}
			if (!game.timerData.energeticTimerFlag) {
				game.timerData.energeticTimerFlag = true;
				minusEnergyTimer();
			}
			game.eatingSound.play();
		break;
		case 'btn-protein_1_':
			if (game.energyMain.style.display == 'block' && game.timerData.energeticTransFlag == false) {
				game.proteinMain.style.display = 'block';
				game.timerData.proteinTransFlag = true;
				game.proteinMain.style.transform = 'translateX(150px)';		
				game.proteinMain.style.WebkitTransform = 'translateX(150px)';				
			} else {
				game.proteinMain.style.display = 'block';
				game.proteinMain.style.transform = 'translateX(0px)';
				game.proteinMain.style.WebkitTransform = 'translateX(0px)';
			}
			game.timerData.proteinTimerNumber += 120;
			game.proteinTimer.innerHTML = game.timerData.proteinTimerNumber;
			game.inventData.proteinInventNumber -= 1;
			game.stimQuantInventDumb[1].innerHTML = game.inventData.proteinInventNumber;
			game.stimQuantInventBike[1].innerHTML = game.inventData.proteinInventNumber;
			if (game.inventData.proteinInventNumber == 0) {
				game.items_inventoryDumb[11].style.display = 'none';
				game.items_inventoryBike[4].style.display = 'none';
				game.inventData.proteinInventFlag = false;
			}
			if (!game.timerData.proteinTimerFlag) {
				game.timerData.proteinTimerFlag = true;
				minusProteinTimer();
			}
			game.eatingSound.play();
		break;
		case 'btn-steroids_1_':
			game.eatingSound.play();
			game.inventData.steroidsInventNumber -= 1;
			game.stimQuantInventDumb[2].innerHTML = game.inventData.steroidsInventNumber;
			game.stimQuantInventBike[2].innerHTML = game.inventData.steroidsInventNumber;
			if (game.inventData.steroidsInventNumber == 0) {
				game.items_inventoryDumb[12].style.display = 'none';
				game.items_inventoryBike[5].style.display = 'none';
				game.inventData.steroidsInventFlag = false;
			}
			// Руки
			game.dumbData.armPowerInfo *= 1.05;
			game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
			game.dumbData.armPower *= 1.05;
			game.rotateNumberDumb = game.dumbData.armPower - game.dumbData.dumbWeight;
			if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2)) {
				game.rotateNumberDumb *= 0.5;
			}
			// Ноги
			game.bikeData.legPowerInfo *= 1.05;
			game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);
			game.bikeData.legPower *= 1.02;
			if (game.plusMinusNumberFlag == 'plus') {
				game.rotateNumberBike = game.bikeData.legPower - game.bikeData.bikeSpeed;
				if (game.rotateNumberBike > 50) {
					game.rotateNumberBike = 50;
				}
			} else if (game.plusMinusNumberFlag == 'minus') {
				game.rotateNumberBike = -(game.bikeData.legPower - game.bikeData.bikeSpeed);
				if (game.rotateNumberBike < -50) {
					game.rotateNumberBike = -50;
				}
			} 
			if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2)) {
				game.rotateNumberBike *= 0.5;
			}
			game.serialBikeData = JSON.stringify(game.bikeData); //сериализуем его в строчку
			localStorage.setItem("bikeDataKey", game.serialBikeData); //запишем его в хранилище по ключу "myKey"
		break;
	}
	game.serialDumbData = JSON.stringify(game.dumbData); //сериализуем его в строчку
	localStorage.setItem("dumbDataKey", game.serialDumbData); //запишем его в хранилище по ключу "myKey"
	game.serialInventData = JSON.stringify(game.inventData); //сериализуем его в строчку
	localStorage.setItem("inventDataKey", game.serialInventData); //запишем его в хранилище по ключу "myKey"
	game.serialTimerData = JSON.stringify(game.timerData); //сериализуем его в строчку
	localStorage.setItem("timerDataKey", game.serialTimerData); //запишем его в хранилище по ключу "myKey"
};
function inventoryFuncBike(event) {
	switch (event.target.id) {
		case 'btn-bike1-inventory':
			game.bikeChoiceCase(game.bikeElem.front_bike[0], game.bikeElem.back_bike[0], game.bikeElem.left_pedal[0], game.bikeElem.right_pedal[0], 1);
		break;
		case 'btn-bike2-inventory':
			game.bikeChoiceCase(game.bikeElem.front_bike[1], game.bikeElem.back_bike[1], game.bikeElem.left_pedal[1], game.bikeElem.right_pedal[1], 2);
		break;
		case 'btn-bike3-inventory':
			game.bikeChoiceCase(game.bikeElem.front_bike[2], game.bikeElem.back_bike[2], game.bikeElem.left_pedal[2], game.bikeElem.right_pedal[2], 3);
		break;
		case 'btn-energy-drink_2_':
			if (game.proteinMain.style.display == 'block' && game.timerData.proteinTransFlag == false) {
				game.energyMain.style.display = 'block';
				game.timerData.energeticTransFlag = true;
				game.energyMain.style.transform = 'translateX(150px)';
				game.energyMain.style.WebkitTransform = 'translateX(150px)';
			} else {
				game.energyMain.style.display = 'block';
				game.energyMain.style.transform = 'translateX(0px)';
				game.energyMain.style.WebkitTransform = 'translateX(0px)';
			}
			game.timerData.energeticTimerNumber += 90;
			game.energyTimer.innerHTML = game.timerData.energeticTimerNumber;
			game.inventData.energeticInventNumber -= 1;
			game.stimQuantInventBike[0].innerHTML = game.inventData.energeticInventNumber;
			game.stimQuantInventDumb[0].innerHTML = game.inventData.energeticInventNumber;
			if (game.inventData.energeticInventNumber == 0) {
				game.items_inventoryBike[3].style.display = 'none';
				game.items_inventoryDumb[10].style.display = 'none';
				game.inventData.energyInventFlag = false;
			}
			if (!game.timerData.energeticTimerFlag) {
				game.timerData.energeticTimerFlag = true;
				minusEnergyTimer();
			}
			game.eatingSound.play();
		break;
		case 'btn-protein_2_':
			if (game.energyMain.style.display == 'block' && game.timerData.energeticTransFlag == false) {
				game.proteinMain.style.display = 'block';
				game.timerData.proteinTransFlag = true;
				game.proteinMain.style.transform = 'translateX(150px)';	
				game.proteinMain.style.WebkitTransform = 'translateX(150px)';				
			} else {
				game.proteinMain.style.display = 'block';
				game.proteinMain.style.transform = 'translateX(0px)';
				game.proteinMain.style.WebkitTransform = 'translateX(0px)';
			}
			game.timerData.proteinTimerNumber += 120;
			game.proteinTimer.innerHTML = game.timerData.proteinTimerNumber;
			game.inventData.proteinInventNumber -= 1;
			game.stimQuantInventBike[1].innerHTML = game.inventData.proteinInventNumber;
			game.stimQuantInventDumb[1].innerHTML = game.inventData.proteinInventNumber;
			if (game.inventData.proteinInventNumber == 0) {
				game.items_inventoryBike[4].style.display = 'none';
				game.items_inventoryDumb[11].style.display = 'none';
				game.inventData.proteinInventFlag = false;
			}
			if (!game.timerData.proteinTimerFlag) {
				game.timerData.proteinTimerFlag = true;
				minusProteinTimer();
			}
			game.eatingSound.play();
		break;
		case 'btn-steroids_2_':
			game.eatingSound.play();
			game.inventData.steroidsInventNumber -= 1;
			game.stimQuantInventBike[2].innerHTML = game.inventData.steroidsInventNumber;
			game.stimQuantInventDumb[2].innerHTML = game.inventData.steroidsInventNumber;
			if (game.inventData.steroidsInventNumber == 0) {
				game.items_inventoryBike[5].style.display = 'none';
				game.items_inventoryDumb[12].style.display = 'none';
				game.inventData.steroidsInventFlag = false;
			}
			// Руки
			game.dumbData.armPowerInfo *= 1.05;
			game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
			game.dumbData.armPower *= 1.05;
			game.rotateNumberDumb = game.dumbData.armPower - game.dumbData.dumbWeight;
			if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2)) {
				game.rotateNumberDumb *= 0.5;
			}
			// Ноги
			game.bikeData.legPowerInfo *= 1.05;
			game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);
			game.bikeData.legPower *= 1.02;
			if (game.plusMinusNumberFlag == 'plus') {
				game.rotateNumberBike = game.bikeData.legPower - game.bikeData.bikeSpeed;
				if (game.rotateNumberBike > 50) {
					game.rotateNumberBike = 50;
				}
			} else if (game.plusMinusNumberFlag == 'minus') {
				game.rotateNumberBike = -(game.bikeData.legPower - game.bikeData.bikeSpeed);
				if (game.rotateNumberBike < -50) {
					game.rotateNumberBike = -50;
				}
			} 
			if (game.charData.staminaProgressNumber <= (game.charData.staminaMaxProgressNumber * 0.2)) {
				game.rotateNumberBike *= 0.5;
			}
			game.serialBikeData = JSON.stringify(game.bikeData); //сериализуем его в строчку
			localStorage.setItem("bikeDataKey", game.serialBikeData); //запишем его в хранилище по ключу "myKey"
		break;
	}
	game.serialDumbData = JSON.stringify(game.dumbData); //сериализуем его в строчку
	localStorage.setItem("dumbDataKey", game.serialDumbData); //запишем его в хранилище по ключу "myKey"
	game.serialInventData = JSON.stringify(game.inventData); //сериализуем его в строчку
	localStorage.setItem("inventDataKey", game.serialInventData); //запишем его в хранилище по ключу "myKey"
	game.serialTimerData = JSON.stringify(game.timerData); //сериализуем его в строчку
	localStorage.setItem("timerDataKey", game.serialTimerData); //запишем его в хранилище по ключу "myKey"
};

// Функции уменьшения таймеров стимуляторов
function minusEnergyTimer() {
	game.intervalEnergyTimer = setInterval(function() {
		if (game.timerData.energeticTransFlag == true) {
			if (game.proteinMain.style.display == 'none') {
				game.energyMain.style.transform = 'translateX(0px)';
				game.energyMain.style.WebkitTransform = 'translateX(0px)';
				game.timerData.energeticTransFlag = false;
			}		
		}
		game.timerData.energeticTimerNumber -= 1;
		game.energyTimer.innerHTML = game.timerData.energeticTimerNumber;
		if (game.timerData.energeticTimerNumber == 0) {
			game.timerData.energeticTimerFlag = false;
			game.energyMain.style.transform = 'translateX(0px)';
			game.energyMain.style.WebkitTransform = 'translateX(0px)';
			game.timerData.energeticTransFlag = false;
			game.energyMain.style.display = 'none';
			clearInterval(game.intervalEnergyTimer);
		}
		game.serialTimerData = JSON.stringify(game.timerData); //сериализуем его в строчку
		localStorage.setItem("timerDataKey", game.serialTimerData); //запишем его в хранилище по ключу "myKey"
	}, 1000);
};
function minusProteinTimer() {
	game.intervalProteinTimer = setInterval(function() {
		if (game.timerData.proteinTransFlag == true) {
			if (game.energyMain.style.display == 'none') {
				game.proteinMain.style.transform = 'translateX(0px)';
				game.proteinMain.style.WebkitTransform = 'translateX(0px)';
				game.timerData.proteinTransFlag = false;
			}
		}
		game.timerData.proteinTimerNumber -= 1;
		game.proteinTimer.innerHTML = game.timerData.proteinTimerNumber;
		if (game.timerData.proteinTimerNumber == 0) {
			game.timerData.proteinTimerFlag = false;
			game.proteinMain.style.transform = 'translateX(0px)';
			game.proteinMain.style.WebkitTransform = 'translateX(0px)';
			game.timerData.proteinTransFlag = false;
			game.proteinMain.style.display = 'none';
			clearInterval(game.intervalProteinTimer);
		}
		game.serialTimerData = JSON.stringify(game.timerData); //сериализуем его в строчку
		localStorage.setItem("timerDataKey", game.serialTimerData); //запишем его в хранилище по ключу "myKey"
	}, 1000);
};

// Меню магазина  ************************************************************************
game.shopAreaCkick.addEventListener('click', touchShop);
game.itemsShop.addEventListener('click', shopItemsEnd);
game.infoShop.addEventListener('click', infoWind);

function touchShop() {
	game.infoInvent.forEach(function(item) {
		item.style.display = 'none';
	});
	game.infoShop.style.display = 'none';
};

function shopItemsEnd(event) {
	if (!game.shopMoveFlag) {
		switch (event.target.id) {
			// Вещи в магазине
			case 'btn-dumbbell1-shop':
				game.shopChoiceCase(game.infoInvent[0]);
			break;
			case 'btn-dumbbell2-shop':
				game.shopChoiceCase(game.infoInvent[1]);
			break;
			case 'btn-dumbbell3-shop':
				game.shopChoiceCase(game.infoInvent[2]);
			break;
			case 'btn-dumbbell4-shop':
				game.shopChoiceCase(game.infoInvent[3]);
			break;
			case 'btn-dumbbell5-shop':
				game.shopChoiceCase(game.infoInvent[4]);
			break;
			case 'btn-dumbbell6-shop':
				game.shopChoiceCase(game.infoInvent[5]);
			break;
			case 'btn-dumbbell7-shop':
				game.shopChoiceCase(game.infoInvent[6]);
			break;
			case 'btn-dumbbell8-shop':
				game.shopChoiceCase(game.infoInvent[7]);
			break;
			case 'btn-dumbbell9-shop':
				game.shopChoiceCase(game.infoInvent[8]);
			break;
			case 'btn-dumbbell10-shop_1_':
				game.shopChoiceCase(game.infoInvent[9]);
			break;
			case 'btn-bike1-shop':
				game.shopChoiceCase(game.infoInvent[10]);
			break;
			case 'btn-bike2-shop':
				game.shopChoiceCase(game.infoInvent[11]);
			break;
			case 'btn-bike3-shop':
				game.shopChoiceCase(game.infoInvent[12]);
			break;
			case 'btn-energy-drink':
				game.shopChoiceCase(game.infoInvent[14]);
				game.stimulateNumber = 1;
				game.energeticPrice = 500;
				game.quantityStim[0].innerHTML = game.stimulateNumber;
				game.priceStim[0].innerHTML = game.energeticPrice;
			break;
			case 'btn-protein':
				game.shopChoiceCase(game.infoInvent[15]);
				game.stimulateNumber = 1;
				game.proteinPrice = 2000;
				game.quantityStim[1].innerHTML = game.stimulateNumber;
				game.priceStim[1].innerHTML = game.proteinPrice;
			break;
			case 'btn-steroids':
				game.shopChoiceCase(game.infoInvent[16]);
				game.stimulateNumber = 1;
				game.steroidsPrice = 15000;
				game.quantityStim[2].innerHTML = game.stimulateNumber;
				game.priceStim[2].innerHTML = game.steroidsPrice;
			break;
		}
	}
};

function infoWind(event) {
	switch (event.target.id) {
		// Гантели покупка
		case 'btn-buy-dumb2':
			game.buyItemCase(80, game.items_inventoryDumb[1], game.btnsBuy[0]);
			if (game.items_inventoryDumb[1].style.display == 'block') {
				game.inventData.dumbInventFlag2 = true;
				game.inventData.btnBuyDumbFlag2 = true; 
			}
		break;
		case 'btn-buy-dumb3':
			game.buyItemCase(300, game.items_inventoryDumb[2], game.btnsBuy[1]);
			if (game.items_inventoryDumb[2].style.display == 'block') {
				game.inventData.dumbInventFlag3 = true;
				game.inventData.btnBuyDumbFlag3 = true; 
			}
		break;
		case 'btn-buy-dumb4':
			game.buyItemCase(600, game.items_inventoryDumb[3], game.btnsBuy[2]);
			if (game.items_inventoryDumb[3].style.display == 'block') {
				game.inventData.dumbInventFlag4 = true;
				game.inventData.btnBuyDumbFlag4 = true; 
			}
		break;
		case 'btn-buy-dumb5':
			game.buyItemCase(1200, game.items_inventoryDumb[4], game.btnsBuy[3]);
			if (game.items_inventoryDumb[4].style.display == 'block') {
				game.inventData.dumbInventFlag5 = true;
				game.inventData.btnBuyDumbFlag5 = true; 
			}
		break;
		case 'btn-buy-dumb6':
			game.buyItemCase(2400, game.items_inventoryDumb[5], game.btnsBuy[4]);
			if (game.items_inventoryDumb[5].style.display == 'block') {
				game.inventData.dumbInventFlag6 = true;
				game.inventData.btnBuyDumbFlag6 = true; 
			}
		break;
		case 'btn-buy-dumb7':
			game.buyItemCase(4800, game.items_inventoryDumb[6], game.btnsBuy[5]);
			if (game.items_inventoryDumb[6].style.display == 'block') {
				game.inventData.dumbInventFlag7 = true;
				game.inventData.btnBuyDumbFlag7 = true; 
			}
		break;
		case 'btn-buy-dumb8':
			game.buyItemCase(9600, game.items_inventoryDumb[7], game.btnsBuy[6]);
			if (game.items_inventoryDumb[7].style.display == 'block') {
				game.inventData.dumbInventFlag8 = true;
				game.inventData.btnBuyDumbFlag8 = true; 
			} 
		break;
		case 'btn-buy-dumb9':
			game.buyItemCase(19200, game.items_inventoryDumb[8], game.btnsBuy[7]);
			if (game.items_inventoryDumb[8].style.display == 'block') {
				game.inventData.dumbInventFlag9 = true;
				game.inventData.btnBuyDumbFlag9 = true; 
			} 
		break;
		case 'btn-buy-dumb10':
			game.buyItemCase(38400, game.items_inventoryDumb[9], game.btnsBuy[8]);
			if (game.items_inventoryDumb[9].style.display == 'block') {
				game.inventData.dumbInventFlag10 = true;
				game.inventData.btnBuyDumbFlag10 = true; 
			}
		break;
		// Велотренажеры покупка
		case 'btn-buy-bike2':
			game.buyItemCase(6000, game.items_inventoryBike[1], game.btnsBuy[9]);
			if (game.btnsBuy[9].style.display == 'none') {
				game.inventData.bikeInventFlag2 = true;
				game.inventData.btnBuyBikeFlag2 = true; 
			}	
		break;
		case 'btn-buy-bike3':
			game.buyItemCase(48000, game.items_inventoryBike[2], game.btnsBuy[10]);
			if (game.btnsBuy[10].style.display == 'none') {
				game.inventData.bikeInventFlag3 = true;
				game.inventData.btnBuyBikeFlag3 = true; 
			}	
		break;
		// Стимуляторы выбор покупаемого количества
		case 'btn-energetic-plus':
			game.buttonSound.play();
			game.stimulateNumber += 1;
			game.quantityStim[0].innerHTML = game.stimulateNumber;
			game.energeticPrice += 500;
			game.priceStim[0].innerHTML = game.energeticPrice;
		break;
		case 'btn-energetic-minus':
			if (game.stimulateNumber > 1) {
				game.buttonSound.play();
				game.stimulateNumber -= 1;
				game.quantityStim[0].innerHTML = game.stimulateNumber;
				game.energeticPrice -= 500;
				game.priceStim[0].innerHTML = game.energeticPrice;
			}
		break;
		case 'btn-protein-plus':
			game.buttonSound.play();
			game.stimulateNumber += 1;
			game.quantityStim[1].innerHTML = game.stimulateNumber;
			game.proteinPrice += 2000;
			game.priceStim[1].innerHTML = game.proteinPrice;
		break;
		case 'btn-protein-minus':
			if (game.stimulateNumber > 1) {
				game.buttonSound.play();
				game.stimulateNumber -= 1;
				game.quantityStim[1].innerHTML = game.stimulateNumber;
				game.proteinPrice -= 2000;
				game.priceStim[1].innerHTML = game.proteinPrice;
			}
		break;
		case 'btn-steroids-plus':
			game.buttonSound.play();
			game.stimulateNumber += 1;
			game.quantityStim[2].innerHTML = game.stimulateNumber;
			game.steroidsPrice += 15000;
			game.priceStim[2].innerHTML = game.steroidsPrice;
		break;
		case 'btn-steroids-minus':
			if (game.stimulateNumber > 1) {
				game.buttonSound.play();
				game.stimulateNumber -= 1;
				game.quantityStim[2].innerHTML = game.stimulateNumber;
				game.steroidsPrice -= 15000;
				game.priceStim[2].innerHTML = game.steroidsPrice;
			}
		break;
		// Стимуляторы покупка
		case 'btn-buy-energetic':
			game.buyStimCase(game.energeticPrice, game.items_inventoryDumb[10], game.items_inventoryBike[3]);
			if (game.items_inventoryDumb[10].style.display == 'block') {
				game.inventData.energyInventFlag = true;
				game.inventData.energeticInventNumber += game.stimulateNumber;
				game.stimQuantInventDumb[0].innerHTML = game.inventData.energeticInventNumber;
				game.stimQuantInventBike[0].innerHTML = game.inventData.energeticInventNumber;
			}
		break;
		case 'btn-buy-protein':
			game.buyStimCase(game.proteinPrice, game.items_inventoryDumb[11], game.items_inventoryBike[4]);
			if (game.items_inventoryDumb[11].style.display == 'block') {
				game.inventData.proteinInventFlag = true;
				game.inventData.proteinInventNumber += game.stimulateNumber;
				game.stimQuantInventDumb[1].innerHTML = game.inventData.proteinInventNumber;
				game.stimQuantInventBike[1].innerHTML = game.inventData.proteinInventNumber;
			}
		break;
		case 'btn-buy-steroids':
			game.buyStimCase(game.steroidsPrice, game.items_inventoryDumb[12], game.items_inventoryBike[5]);
			if (game.items_inventoryDumb[12].style.display == 'block') {
				game.inventData.steroidsInventFlag = true;
				game.inventData.steroidsInventNumber += game.stimulateNumber;
				game.stimQuantInventDumb[2].innerHTML = game.inventData.steroidsInventNumber;
				game.stimQuantInventBike[2].innerHTML = game.inventData.steroidsInventNumber;
			}
		break;
		// Закрытие окошек информации
		case 'exit-info-dumb1':
		case 'exit-info-dumb2':
		case 'exit-info-dumb3':
		case 'exit-info-dumb4':
		case 'exit-info-dumb5':
		case 'exit-info-dumb6':
		case 'exit-info-dumb7':
		case 'exit-info-dumb8':
		case 'exit-info-dumb9':
		case 'exit-info-dumb10':
		case 'exit-info-bike1':
		case 'exit-info-bike2':
		case 'exit-info-bike3':
		case 'exit-havnt-money':
		case 'exit-info-energetict':
		case 'exit-info-protein':
		case 'exit-info-steroids':
			game.buttonSound.play();
			game.infoInvent.forEach(function(item) {
				item.style.display = 'none';
			});
			game.infoShop.style.display = 'none';
		break;
	}
	game.moneyMain.innerHTML = game.charData.moneyNumber;
	game.moneyNumberShop.innerHTML = game.charData.moneyNumber;
	game.serialCharData = JSON.stringify(game.charData); //сериализуем его в строчку
	localStorage.setItem("charDataKey", game.serialCharData); //запишем его в хранилище по ключу "myKey"
	game.serialInventData = JSON.stringify(game.inventData); //сериализуем его в строчку
	localStorage.setItem("inventDataKey", game.serialInventData); //запишем его в хранилище по ключу "myKey"
};

// Меню опций  ******************************************************************************
game.charOptions.addEventListener('mousedown', optionsFunc);

function optionsFunc(event) {
	switch(event.target.id) {	
        case 'btn-exit-game':
        	game.buttonSound.play();
            game.mainWindow.style.display = 'block';
            game.mainWindowDumb.style.display = 'none';
            game.mainWindowBike.style.display = 'none';
            game.expProgressDumb.style.display = 'none';
            game.expProgressBike.style.display = 'none';
            game.mainBodyLvl.style.display = 'none';
            game.mainLegsLvl.style.display = 'none';
			game.optionsFlag = false;
			game.charOptions.style.display = 'none';
			game.fonBtnOptions.classList.remove('blue');
			if (game.mainWindowDumb.style.display == 'block') {
				game.startWindows.openWindow = 'dumb';
			} else if (game.mainWindowBike.style.display == 'block') {
				game.startWindows.openWindow = 'bike';
			}
			game.btnStart.style.display = 'none';
			game.btnContinue.style.display = 'block';
			game.btnReset.style.display = 'block';
			game.serialStartWindows = JSON.stringify(game.startWindows); //сериализуем его в строчку
			localStorage.setItem("startWindowsKey", game.serialStartWindows); //запишем его в хранилище по ключу "myKey"
        break;  
		/*Звук*/
		case 'btn-volume-minus':
			game.buttonSound.play();
			game.volumeData.volumeNumber -= 0.1;
			if (game.volumeData.volumeNumber <= 0.0) {
				game.volumeData.volumeNumber = 0.0;
			}
			game.buttonSound.volume = game.volumeData.volumeNumber;
			game.moneySound.volume = game.volumeData.volumeNumber;
			game.eatingSound.volume = game.volumeData.volumeNumber;
			game.moanSound.volume = game.volumeData.volumeNumber;
			game.quantityVolume.innerHTML = game.volumeData.volumeNumber.toFixed(1);
		break;
		case 'btn-volume-plus':
			game.buttonSound.play();
			game.volumeData.volumeNumber += 0.1;
			if (game.volumeData.volumeNumber >= 1.0) {
				game.volumeData.volumeNumber = 1.0;
			}
			game.buttonSound.volume = game.volumeData.volumeNumber;
			game.moneySound.volume = game.volumeData.volumeNumber;
			game.eatingSound.volume = game.volumeData.volumeNumber;
			game.moanSound.volume = game.volumeData.volumeNumber;
			game.quantityVolume.innerHTML = game.volumeData.volumeNumber.toFixed(1);
		break;
	}
    game.serialVolumeData = JSON.stringify(game.volumeData); //сериализуем его в строчку
    localStorage.setItem("volumeDataKey", game.serialVolumeData); //запишем его в хранилище по ключу "myKey"
};

//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
// Local Storage - dumbData  **********************************************************************************************************
if (localStorage.getItem("dumbDataKey") !== null) {
    game.dumbData = JSON.parse(localStorage.getItem("dumbDataKey")); //спарсим его обратно объект
    switch(game.dumbData.bodyLvlNumber) {
    	case 1:
			game.bodyElemCase(game.dumbElem.bodys[0], game.dumbElem.faces[0], game.dumbElem.second_left_arms[0], game.dumbElem.first_left_arms[0], game.dumbElem.second_right_arms[0], game.dumbElem.first_right_arms[0], game.bikeElem.bodys[0], game.bikeElem.faces[0], game.bikeElem.second_left_arms[0], game.bikeElem.first_left_arms[0], game.bikeElem.second_right_arms[0], game.bikeElem.first_right_arms[0]);
		break;
    	case 2:
			game.bodyElemCase(game.dumbElem.bodys[0], game.dumbElem.faces[0], game.dumbElem.second_left_arms[1], game.dumbElem.first_left_arms[1], game.dumbElem.second_right_arms[1], game.dumbElem.first_right_arms[1], game.bikeElem.bodys[0], game.bikeElem.faces[0], game.bikeElem.second_left_arms[1], game.bikeElem.first_left_arms[1], game.bikeElem.second_right_arms[1], game.bikeElem.first_right_arms[1]);
		break;
		case 3:
			game.bodyElemCase(game.dumbElem.bodys[1], game.dumbElem.faces[0], game.dumbElem.second_left_arms[2], game.dumbElem.first_left_arms[2], game.dumbElem.second_right_arms[2], game.dumbElem.first_right_arms[2], game.bikeElem.bodys[1], game.bikeElem.faces[0], game.bikeElem.second_left_arms[2], game.bikeElem.first_left_arms[2], game.bikeElem.second_right_arms[2], game.bikeElem.first_right_arms[2]);
		break;
		case 4:
			game.bodyElemCase(game.dumbElem.bodys[2], game.dumbElem.faces[0], game.dumbElem.second_left_arms[3], game.dumbElem.first_left_arms[3], game.dumbElem.second_right_arms[3], game.dumbElem.first_right_arms[3], game.bikeElem.bodys[2], game.bikeElem.faces[0], game.bikeElem.second_left_arms[3], game.bikeElem.first_left_arms[3], game.bikeElem.second_right_arms[3], game.bikeElem.first_right_arms[3]);
		break;
		case 5:
			game.bodyElemCase(game.dumbElem.bodys[3], game.dumbElem.faces[0], game.dumbElem.second_left_arms[4], game.dumbElem.first_left_arms[4], game.dumbElem.second_right_arms[4], game.dumbElem.first_right_arms[4], game.bikeElem.bodys[3], game.bikeElem.faces[0], game.bikeElem.second_left_arms[4], game.bikeElem.first_left_arms[4], game.bikeElem.second_right_arms[4], game.bikeElem.first_right_arms[4]);
		break;
		case 6:
			game.bodyElemCase(game.dumbElem.bodys[4], game.dumbElem.faces[0], game.dumbElem.second_left_arms[5], game.dumbElem.first_left_arms[5], game.dumbElem.second_right_arms[5], game.dumbElem.first_right_arms[5], game.bikeElem.bodys[4], game.bikeElem.faces[0], game.bikeElem.second_left_arms[5], game.bikeElem.first_left_arms[5], game.bikeElem.second_right_arms[5], game.bikeElem.first_right_arms[5]);
		break;
		case 7:
			game.bodyElemCase(game.dumbElem.bodys[5], game.dumbElem.faces[0], game.dumbElem.second_left_arms[6], game.dumbElem.first_left_arms[6], game.dumbElem.second_right_arms[6], game.dumbElem.first_right_arms[6], game.bikeElem.bodys[5], game.bikeElem.faces[0], game.bikeElem.second_left_arms[6], game.bikeElem.first_left_arms[6], game.bikeElem.second_right_arms[6], game.bikeElem.first_right_arms[6]);
		break;
		case 8:
			game.bodyElemCase(game.dumbElem.bodys[6], game.dumbElem.faces[0], game.dumbElem.second_left_arms[7], game.dumbElem.first_left_arms[7], game.dumbElem.second_right_arms[7], game.dumbElem.first_right_arms[7], game.bikeElem.bodys[6], game.bikeElem.faces[0], game.bikeElem.second_left_arms[7], game.bikeElem.first_left_arms[7], game.bikeElem.second_right_arms[7], game.bikeElem.first_right_arms[7]);
		break;
		case 9:
			game.bodyElemCase(game.dumbElem.bodys[7], game.dumbElem.faces[0], game.dumbElem.second_left_arms[8], game.dumbElem.first_left_arms[8], game.dumbElem.second_right_arms[8], game.dumbElem.first_right_arms[8], game.bikeElem.bodys[7], game.bikeElem.faces[0], game.bikeElem.second_left_arms[8], game.bikeElem.first_left_arms[8], game.bikeElem.second_right_arms[8], game.bikeElem.first_right_arms[8]);
		break;
		case 10:
			game.bodyElemCase(game.dumbElem.bodys[8], game.dumbElem.faces[0], game.dumbElem.second_left_arms[9], game.dumbElem.first_left_arms[9], game.dumbElem.second_right_arms[9], game.dumbElem.first_right_arms[9], game.bikeElem.bodys[8], game.bikeElem.faces[0], game.bikeElem.second_left_arms[9], game.bikeElem.first_left_arms[9], game.bikeElem.second_right_arms[9], game.bikeElem.first_right_arms[9]);
		break;
		case 11:
			game.bodyElemCase(game.dumbElem.bodys[9], game.dumbElem.faces[0], game.dumbElem.second_left_arms[10], game.dumbElem.first_left_arms[10], game.dumbElem.second_right_arms[10], game.dumbElem.first_right_arms[10], game.bikeElem.bodys[9], game.bikeElem.faces[0], game.bikeElem.second_left_arms[10], game.bikeElem.first_left_arms[10], game.bikeElem.second_right_arms[10], game.bikeElem.first_right_arms[10]);
		break;
		case 12:
			game.bodyElemCase(game.dumbElem.bodys[10], game.dumbElem.faces[0], game.dumbElem.second_left_arms[11], game.dumbElem.first_left_arms[11], game.dumbElem.second_right_arms[11], game.dumbElem.first_right_arms[11], game.bikeElem.bodys[10], game.bikeElem.faces[0], game.bikeElem.second_left_arms[11], game.bikeElem.first_left_arms[11], game.bikeElem.second_right_arms[11], game.bikeElem.first_right_arms[11]);
		break;
		case 13:
			game.bodyElemCase(game.dumbElem.bodys[11], game.dumbElem.faces[0], game.dumbElem.second_left_arms[12], game.dumbElem.first_left_arms[12], game.dumbElem.second_right_arms[12], game.dumbElem.first_right_arms[12], game.bikeElem.bodys[11], game.bikeElem.faces[0], game.bikeElem.second_left_arms[12], game.bikeElem.first_left_arms[12], game.bikeElem.second_right_arms[12], game.bikeElem.first_right_arms[12]);
		break;
		case 14:
			game.bodyElemCase(game.dumbElem.bodys[12], game.dumbElem.faces[0], game.dumbElem.second_left_arms[13], game.dumbElem.first_left_arms[13], game.dumbElem.second_right_arms[13], game.dumbElem.first_right_arms[13], game.bikeElem.bodys[12], game.bikeElem.faces[0], game.bikeElem.second_left_arms[13], game.bikeElem.first_left_arms[13], game.bikeElem.second_right_arms[13], game.bikeElem.first_right_arms[13]);
		break;
		case 15:
			game.bodyElemCase(game.dumbElem.bodys[13], game.dumbElem.faces[0], game.dumbElem.second_left_arms[14], game.dumbElem.first_left_arms[14], game.dumbElem.second_right_arms[14], game.dumbElem.first_right_arms[14], game.bikeElem.bodys[13], game.bikeElem.faces[0], game.bikeElem.second_left_arms[14], game.bikeElem.first_left_arms[14], game.bikeElem.second_right_arms[14], game.bikeElem.first_right_arms[14]);
		break;
		case 16:
			game.bodyElemCase(game.dumbElem.bodys[14], game.dumbElem.faces[0], game.dumbElem.second_left_arms[15], game.dumbElem.first_left_arms[15], game.dumbElem.second_right_arms[15], game.dumbElem.first_right_arms[15], game.bikeElem.bodys[14], game.bikeElem.faces[0], game.bikeElem.second_left_arms[15], game.bikeElem.first_left_arms[15], game.bikeElem.second_right_arms[15], game.bikeElem.first_right_arms[15]);
		break;
		case 17:
			game.bodyElemCase(game.dumbElem.bodys[15], game.dumbElem.faces[0], game.dumbElem.second_left_arms[16], game.dumbElem.first_left_arms[16], game.dumbElem.second_right_arms[16], game.dumbElem.first_right_arms[16], game.bikeElem.bodys[15], game.bikeElem.faces[0], game.bikeElem.second_left_arms[16], game.bikeElem.first_left_arms[16], game.bikeElem.second_right_arms[16], game.bikeElem.first_right_arms[16]);
		break;
		case 18:
			game.bodyElemCase(game.dumbElem.bodys[16], game.dumbElem.faces[1], game.dumbElem.second_left_arms[17], game.dumbElem.first_left_arms[17], game.dumbElem.second_right_arms[17], game.dumbElem.first_right_arms[17], game.bikeElem.bodys[16], game.bikeElem.faces[1], game.bikeElem.second_left_arms[17], game.bikeElem.first_left_arms[17], game.bikeElem.second_right_arms[17], game.bikeElem.first_right_arms[17]);
		break;
		case 19:
			game.bodyElemCase(game.dumbElem.bodys[17], game.dumbElem.faces[2], game.dumbElem.second_left_arms[18], game.dumbElem.first_left_arms[18], game.dumbElem.second_right_arms[18], game.dumbElem.first_right_arms[18], game.bikeElem.bodys[17], game.bikeElem.faces[2], game.bikeElem.second_left_arms[18], game.bikeElem.first_left_arms[18], game.bikeElem.second_right_arms[18], game.bikeElem.first_right_arms[18]);
		break;
		case 20:
			game.bodyElemCase(game.dumbElem.bodys[18], game.dumbElem.faces[3], game.dumbElem.second_left_arms[19], game.dumbElem.first_left_arms[19], game.dumbElem.second_right_arms[19], game.dumbElem.first_right_arms[19], game.bikeElem.bodys[18], game.bikeElem.faces[3], game.bikeElem.second_left_arms[19], game.bikeElem.first_left_arms[19], game.bikeElem.second_right_arms[19], game.bikeElem.first_right_arms[19]);
		break;
		case 21:
			game.bodyElemCase(game.dumbElem.bodys[19], game.dumbElem.faces[4], game.dumbElem.second_left_arms[20], game.dumbElem.first_left_arms[20], game.dumbElem.second_right_arms[20], game.dumbElem.first_right_arms[20], game.bikeElem.bodys[19], game.bikeElem.faces[4], game.bikeElem.second_left_arms[20], game.bikeElem.first_left_arms[20], game.bikeElem.second_right_arms[20], game.bikeElem.first_right_arms[20]);
		break;
		case 22:
			game.bodyElemCase(game.dumbElem.bodys[20], game.dumbElem.faces[5], game.dumbElem.second_left_arms[21], game.dumbElem.first_left_arms[21], game.dumbElem.second_right_arms[21], game.dumbElem.first_right_arms[21], game.bikeElem.bodys[20], game.bikeElem.faces[5], game.bikeElem.second_left_arms[21], game.bikeElem.first_left_arms[21], game.bikeElem.second_right_arms[21], game.bikeElem.first_right_arms[21]);
		break;
		case 23:
			game.bodyElemCase(game.dumbElem.bodys[21], game.dumbElem.faces[5], game.dumbElem.second_left_arms[22], game.dumbElem.first_left_arms[22], game.dumbElem.second_right_arms[22], game.dumbElem.first_right_arms[22], game.bikeElem.bodys[21], game.bikeElem.faces[5], game.bikeElem.second_left_arms[22], game.bikeElem.first_left_arms[22], game.bikeElem.second_right_arms[22], game.bikeElem.first_right_arms[22]);
		break;
		case 24:
			game.bodyElemCase(game.dumbElem.bodys[22], game.dumbElem.faces[5], game.dumbElem.second_left_arms[23], game.dumbElem.first_left_arms[23], game.dumbElem.second_right_arms[23], game.dumbElem.first_right_arms[23], game.bikeElem.bodys[22], game.bikeElem.faces[5], game.bikeElem.second_left_arms[23], game.bikeElem.first_left_arms[23], game.bikeElem.second_right_arms[23], game.bikeElem.first_right_arms[23]);
		break;
		case 25:
			game.bodyElemCase(game.dumbElem.bodys[23], game.dumbElem.faces[6], game.dumbElem.second_left_arms[24], game.dumbElem.first_left_arms[24], game.dumbElem.second_right_arms[24], game.dumbElem.first_right_arms[24], game.bikeElem.bodys[23], game.bikeElem.faces[6], game.bikeElem.second_left_arms[24], game.bikeElem.first_left_arms[24], game.bikeElem.second_right_arms[24], game.bikeElem.first_right_arms[24]);
		break; 
	} 
	switch (game.dumbData.dumbFlag) {
		case 1:
			game.dumbElem.left_dumbbells[0].style.display = 'block';
			game.dumbElem.right_dumbbells[0].style.display = 'block';
		break;
		case 2:
			game.dumbElem.left_dumbbells[1].style.display = 'block';
			game.dumbElem.right_dumbbells[1].style.display = 'block';
		break;
		case 3:
			game.dumbElem.left_dumbbells[2].style.display = 'block';
			game.dumbElem.right_dumbbells[2].style.display = 'block';
		break;
		case 4:
			game.dumbElem.left_dumbbells[3].style.display = 'block';
			game.dumbElem.right_dumbbells[3].style.display = 'block';
		break;
		case 5:
			game.dumbElem.left_dumbbells[4].style.display = 'block';
			game.dumbElem.right_dumbbells[4].style.display = 'block';
		break;
		case 6:
			game.dumbElem.left_dumbbells[5].style.display = 'block';
			game.dumbElem.right_dumbbells[5].style.display = 'block';
		break;
		case 7:
			game.dumbElem.left_dumbbells[6].style.display = 'block';
			game.dumbElem.right_dumbbells[6].style.display = 'block';
		break;
		case 8:
			game.dumbElem.left_dumbbells[7].style.display = 'block';
			game.dumbElem.right_dumbbells[7].style.display = 'block';
		break;
		case 9:
			game.dumbElem.left_dumbbells[8].style.display = 'block';
			game.dumbElem.right_dumbbells[8].style.display = 'block';
		break;
		case 10:
			game.dumbElem.left_dumbbells[9].style.display = 'block';
			game.dumbElem.right_dumbbells[9].style.display = 'block';
		break;
	}  	
	// Уровень рук
	game.mainBodyLvlNumber.innerHTML = game.dumbData.bodyLvlNumber;
	game.bodyLvl.innerHTML = game.dumbData.bodyLvlNumber;
	game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
	game.bodyMaxExp.innerHTML = game.dumbData.bodyMaxExpNumber;
	game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
	game.expProgressDumb.value = game.dumbData.bodyExpNumber; // Exp
	game.expProgressDumb.max = game.dumbData.bodyMaxExpNumber;
	game.rotateNumberDumb = game.dumbData.armPower - game.dumbData.dumbWeight; // Сила подьема рук
	// Точки transform-origin
	game.dumbElem.left_arm.style.transformOrigin = game.dumbData.toLeftArmX + 'px 631.3px';
	game.dumbElem.first_left_arm.style.transformOrigin = game.dumbData.toFirstLeftArmX + 'px 716.1px';
	game.dumbElem.right_arm.style.transformOrigin = game.dumbData.toRightArmX + 'px 631.3px';
	game.dumbElem.first_right_arm.style.transformOrigin = game.dumbData.toFirstRightArmX + 'px 716.1px';
	game.dumbElem.left_arm.style.WebkitTransformOrigin = game.dumbData.toLeftArmX + 'px 631.3px';
	game.dumbElem.first_left_arm.style.WebkitTransformOrigin = game.dumbData.toFirstLeftArmX + 'px 716.1px';
	game.dumbElem.right_arm.style.WebkitTransformOrigin = game.dumbData.toRightArmX + 'px 631.3px';
	game.dumbElem.first_right_arm.style.WebkitTransformOrigin = game.dumbData.toFirstRightArmX + 'px 716.1px';
	game.dumbElem.left_fingers.style.transform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.right_fingers.style.transform = 'translate(' + game.dumbData.transRight + 'px)';
	game.dumbElem.all_left_dumbbells.style.transform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.all_right_dumbbells.style.transform = 'translate(' + game.dumbData.transRight + 'px)';
	game.dumbElem.left_fingers.style.WebkitTransform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.right_fingers.style.WebkitTransform = 'translate(' + game.dumbData.transRight + 'px)';
	game.dumbElem.all_left_dumbbells.style.WebkitTransform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.all_right_dumbbells.style.WebkitTransform = 'translate(' + game.dumbData.transRight + 'px)';
} else if (localStorage.getItem("dumbDataKey") == null) { // Нет записи в локал сторэдж
	// Элементы 1 lvl
	game.bodyElemCase(game.dumbElem.bodys[0], game.dumbElem.faces[0], game.dumbElem.second_left_arms[0], game.dumbElem.first_left_arms[0], game.dumbElem.second_right_arms[0], game.dumbElem.first_right_arms[0], game.bikeElem.bodys[0], game.bikeElem.faces[0], game.bikeElem.second_left_arms[0], game.bikeElem.first_left_arms[0], game.bikeElem.second_right_arms[0], game.bikeElem.first_right_arms[0]);
	game.dumbElem.left_dumbbells[0].style.display = 'block';
	game.dumbElem.right_dumbbells[0].style.display = 'block';
	// Уровень рук
	game.mainBodyLvlNumber.innerHTML = game.dumbData.bodyLvlNumber;
	game.bodyLvl.innerHTML = game.dumbData.bodyLvlNumber;
	game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
	game.bodyMaxExp.innerHTML = game.dumbData.bodyMaxExpNumber;
	game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
	game.expProgressDumb.value = game.dumbData.bodyExpNumber; // Exp
	game.expProgressDumb.max = game.dumbData.bodyMaxExpNumber;
	game.rotateNumberDumb = game.dumbData.armPower - game.dumbData.dumbWeight; // Сила подьема рук
	// Точки transform-origin
	game.dumbElem.left_arm.style.transformOrigin = game.dumbData.toLeftArmX + 'px 631.3px';
	game.dumbElem.first_left_arm.style.transformOrigin = game.dumbData.toFirstLeftArmX + 'px 716.1px';
	game.dumbElem.right_arm.style.transformOrigin = game.dumbData.toRightArmX + 'px 631.3px';
	game.dumbElem.first_right_arm.style.transformOrigin = game.dumbData.toFirstRightArmX + 'px 716.1px';
	game.dumbElem.left_arm.style.WebkitTransformOrigin = game.dumbData.toLeftArmX + 'px 631.3px';
	game.dumbElem.first_left_arm.style.WebkitTransformOrigin = game.dumbData.toFirstLeftArmX + 'px 716.1px';
	game.dumbElem.right_arm.style.WebkitTransformOrigin = game.dumbData.toRightArmX + 'px 631.3px';
	game.dumbElem.first_right_arm.style.WebkitTransformOrigin = game.dumbData.toFirstRightArmX + 'px 716.1px';
	game.dumbElem.left_fingers.style.transform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.right_fingers.style.transform = 'translate(' + game.dumbData.transRight + 'px)';
	game.dumbElem.all_left_dumbbells.style.transform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.all_right_dumbbells.style.transform = 'translate(' + game.dumbData.transRight + 'px)';
	game.dumbElem.left_fingers.style.WebkitTransform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.right_fingers.style.WebkitTransform = 'translate(' + game.dumbData.transRight + 'px)';
	game.dumbElem.all_left_dumbbells.style.WebkitTransform = 'translate(' + game.dumbData.transLeft + 'px)';
	game.dumbElem.all_right_dumbbells.style.WebkitTransform = 'translate(' + game.dumbData.transRight + 'px)';
} 

// Local Storage - bikeData  **********************************************************************************************************
if (localStorage.getItem("bikeDataKey") !== null) {
    game.bikeData = JSON.parse(localStorage.getItem("bikeDataKey")); //спарсим его обратно объект
    // Уровни ног
	switch (game.bikeData.legsLvlNumber) {
		case 1:
			game.legsElemCase(game.bikeElem.first_left_leg[0], game.bikeElem.second_left_leg[0], game.bikeElem.first_right_leg[0], game.bikeElem.second_right_leg[0], game.bikeElem.underpant[0], game.dumbElem.left_leg[0], game.dumbElem.right_leg[0], game.dumbElem.underpant[0]);
		break;
		case 2:
			game.legsElemCase(game.bikeElem.first_left_leg[1], game.bikeElem.second_left_leg[1], game.bikeElem.first_right_leg[1], game.bikeElem.second_right_leg[1], game.bikeElem.underpant[0], game.dumbElem.left_leg[1], game.dumbElem.right_leg[1], game.dumbElem.underpant[0]);
		break;
		case 3:
			game.legsElemCase(game.bikeElem.first_left_leg[2], game.bikeElem.second_left_leg[2], game.bikeElem.first_right_leg[2], game.bikeElem.second_right_leg[2], game.bikeElem.underpant[1], game.dumbElem.left_leg[2], game.dumbElem.right_leg[2], game.dumbElem.underpant[1]);
		break;
		case 4:
			game.legsElemCase(game.bikeElem.first_left_leg[3], game.bikeElem.second_left_leg[3], game.bikeElem.first_right_leg[3], game.bikeElem.second_right_leg[3], game.bikeElem.underpant[2], game.dumbElem.left_leg[3], game.dumbElem.right_leg[3], game.dumbElem.underpant[2]);
		break;
		case 5:
			game.legsElemCase(game.bikeElem.first_left_leg[4], game.bikeElem.second_left_leg[4], game.bikeElem.first_right_leg[4], game.bikeElem.second_right_leg[4], game.bikeElem.underpant[3], game.dumbElem.left_leg[4], game.dumbElem.right_leg[4], game.dumbElem.underpant[3]);
		break;
		case 6:
			game.legsElemCase(game.bikeElem.first_left_leg[5], game.bikeElem.second_left_leg[5], game.bikeElem.first_right_leg[5], game.bikeElem.second_right_leg[5], game.bikeElem.underpant[4], game.dumbElem.left_leg[5], game.dumbElem.right_leg[5], game.dumbElem.underpant[4]);
		break;
		case 7:
			game.legsElemCase(game.bikeElem.first_left_leg[6], game.bikeElem.second_left_leg[6], game.bikeElem.first_right_leg[6], game.bikeElem.second_right_leg[6], game.bikeElem.underpant[5], game.dumbElem.left_leg[6], game.dumbElem.right_leg[6], game.dumbElem.underpant[5]);
		break;
		case 8:
			game.legsElemCase(game.bikeElem.first_left_leg[7], game.bikeElem.second_left_leg[7], game.bikeElem.first_right_leg[7], game.bikeElem.second_right_leg[7], game.bikeElem.underpant[5], game.dumbElem.left_leg[7], game.dumbElem.right_leg[7], game.dumbElem.underpant[5]);
		break;
		case 9:
			game.legsElemCase(game.bikeElem.first_left_leg[8], game.bikeElem.second_left_leg[8], game.bikeElem.first_right_leg[8], game.bikeElem.second_right_leg[8], game.bikeElem.underpant[6], game.dumbElem.left_leg[8], game.dumbElem.right_leg[8], game.dumbElem.underpant[6]);
		break;
		case 10:
			game.legsElemCase(game.bikeElem.first_left_leg[9], game.bikeElem.second_left_leg[9], game.bikeElem.first_right_leg[9], game.bikeElem.second_right_leg[9], game.bikeElem.underpant[6], game.dumbElem.left_leg[9], game.dumbElem.right_leg[9], game.dumbElem.underpant[6]);
		break;
		case 11:
			game.legsElemCase(game.bikeElem.first_left_leg[10], game.bikeElem.second_left_leg[10], game.bikeElem.first_right_leg[10], game.bikeElem.second_right_leg[10], game.bikeElem.underpant[7], game.dumbElem.left_leg[10], game.dumbElem.right_leg[10], game.dumbElem.underpant[7]);
		break;
		case 12:
			game.legsElemCase(game.bikeElem.first_left_leg[11], game.bikeElem.second_left_leg[11], game.bikeElem.first_right_leg[11], game.bikeElem.second_right_leg[11], game.bikeElem.underpant[8], game.dumbElem.left_leg[11], game.dumbElem.right_leg[11], game.dumbElem.underpant[8]);
		break;
		case 13:
			game.legsElemCase(game.bikeElem.first_left_leg[12], game.bikeElem.second_left_leg[12], game.bikeElem.first_right_leg[12], game.bikeElem.second_right_leg[12], game.bikeElem.underpant[9], game.dumbElem.left_leg[12], game.dumbElem.right_leg[12], game.dumbElem.underpant[9]);
		break;
		case 14:
			game.legsElemCase(game.bikeElem.first_left_leg[13], game.bikeElem.second_left_leg[13], game.bikeElem.first_right_leg[13], game.bikeElem.second_right_leg[13], game.bikeElem.underpant[10], game.dumbElem.left_leg[13], game.dumbElem.right_leg[13], game.dumbElem.underpant[10]);
		break;
		case 15:
			game.legsElemCase(game.bikeElem.first_left_leg[14], game.bikeElem.second_left_leg[14], game.bikeElem.first_right_leg[14], game.bikeElem.second_right_leg[14], game.bikeElem.underpant[11], game.dumbElem.left_leg[14], game.dumbElem.right_leg[14], game.dumbElem.underpant[11]);
		break;
		case 16:
			game.legsElemCase(game.bikeElem.first_left_leg[15], game.bikeElem.second_left_leg[15], game.bikeElem.first_right_leg[15], game.bikeElem.second_right_leg[15], game.bikeElem.underpant[12], game.dumbElem.left_leg[15], game.dumbElem.right_leg[15], game.dumbElem.underpant[12]);
		break;
		case 17:
			game.legsElemCase(game.bikeElem.first_left_leg[16], game.bikeElem.second_left_leg[16], game.bikeElem.first_right_leg[16], game.bikeElem.second_right_leg[16], game.bikeElem.underpant[13], game.dumbElem.left_leg[16], game.dumbElem.right_leg[16], game.dumbElem.underpant[13]);
		break;
		case 18:
			game.legsElemCase(game.bikeElem.first_left_leg[17], game.bikeElem.second_left_leg[17], game.bikeElem.first_right_leg[17], game.bikeElem.second_right_leg[17], game.bikeElem.underpant[14], game.dumbElem.left_leg[17], game.dumbElem.right_leg[17], game.dumbElem.underpant[14]);
		break;
		case 19:
			game.legsElemCase(game.bikeElem.first_left_leg[18], game.bikeElem.second_left_leg[18], game.bikeElem.first_right_leg[18], game.bikeElem.second_right_leg[18], game.bikeElem.underpant[15], game.dumbElem.left_leg[18], game.dumbElem.right_leg[18], game.dumbElem.underpant[15]);
		break;
		case 20:
			game.legsElemCase(game.bikeElem.first_left_leg[19], game.bikeElem.second_left_leg[19], game.bikeElem.first_right_leg[19], game.bikeElem.second_right_leg[19], game.bikeElem.underpant[16], game.dumbElem.left_leg[19], game.dumbElem.right_leg[19], game.dumbElem.underpant[16]);
		break;
		case 21:
			game.legsElemCase(game.bikeElem.first_left_leg[20], game.bikeElem.second_left_leg[20], game.bikeElem.first_right_leg[20], game.bikeElem.second_right_leg[20], game.bikeElem.underpant[17], game.dumbElem.left_leg[20], game.dumbElem.right_leg[20], game.dumbElem.underpant[17]);
		break;
		case 22:
			game.legsElemCase(game.bikeElem.first_left_leg[21], game.bikeElem.second_left_leg[21], game.bikeElem.first_right_leg[21], game.bikeElem.second_right_leg[21], game.bikeElem.underpant[18], game.dumbElem.left_leg[21], game.dumbElem.right_leg[21], game.dumbElem.underpant[18]);
		break;
		case 23:
			game.legsElemCase(game.bikeElem.first_left_leg[22], game.bikeElem.second_left_leg[22], game.bikeElem.first_right_leg[22], game.bikeElem.second_right_leg[22], game.bikeElem.underpant[19], game.dumbElem.left_leg[22], game.dumbElem.right_leg[22], game.dumbElem.underpant[19]);
		break;
		case 24:
			game.legsElemCase(game.bikeElem.first_left_leg[23], game.bikeElem.second_left_leg[23], game.bikeElem.first_right_leg[23], game.bikeElem.second_right_leg[23], game.bikeElem.underpant[20], game.dumbElem.left_leg[23], game.dumbElem.right_leg[23], game.dumbElem.underpant[20]);
		break;
		case 25:
			game.legsElemCase(game.bikeElem.first_left_leg[24], game.bikeElem.second_left_leg[24], game.bikeElem.first_right_leg[24], game.bikeElem.second_right_leg[24], game.bikeElem.underpant[21], game.dumbElem.left_leg[24], game.dumbElem.right_leg[24], game.dumbElem.underpant[21]);
		break;
	}  
	// Флаг выбраного велотренажера
	switch (game.bikeData.bikeFlag) {
		case 1:
			game.bikeElem.front_bike[0].style.display = 'block';
			game.bikeElem.back_bike[0].style.display = 'block';
			game.bikeElem.left_pedal[0].style.display = 'block';
			game.bikeElem.right_pedal[0].style.display = 'block';
		break;
		case 2:
			game.bikeElem.front_bike[1].style.display = 'block';
			game.bikeElem.back_bike[1].style.display = 'block';
			game.bikeElem.left_pedal[1].style.display = 'block';
			game.bikeElem.right_pedal[1].style.display = 'block';
		break;
		case 3:
			game.bikeElem.front_bike[2].style.display = 'block';
			game.bikeElem.back_bike[2].style.display = 'block';
			game.bikeElem.left_pedal[2].style.display = 'block';
			game.bikeElem.right_pedal[2].style.display = 'block';
		break;
	}  
	// Выбраная скорость велотренажера
	game.bikeElem.number_speed.innerHTML = game.bikeData.speedNumber;	
	// Точки transform-origin
	game.bikeElem.first_left_legs.style.transformOrigin = '272px 852.5px';
	game.bikeElem.left_legs.style.transformOrigin = '342.5px 755px';
	game.bikeElem.first_right_legs.style.transformOrigin = '493px 763px';
	game.bikeElem.right_legs.style.transformOrigin = '376.5px 755px';
	game.bikeElem.first_left_legs.style.WebkitTransformOrigin = '272px 852.5px';
	game.bikeElem.left_legs.style.WebkitTransformOrigin = '342.5px 755px';
	game.bikeElem.first_right_legs.style.WebkitTransformOrigin = '493px 763px';
	game.bikeElem.right_legs.style.WebkitTransformOrigin = '376.5px 755px';
	// Данные в menu и в основном окне 1lvl
	game.rotateNumberBike = game.bikeData.legPower - game.bikeData.bikeSpeed; // Сила ног
	game.mainLegsLvlNumber.innerHTML = game.bikeData.legsLvlNumber;
	game.expProgressBike.value = game.bikeData.legsExpNumber; // Exp
	game.expProgressBike.max = game.bikeData.legsMaxExpNumber;
	// Уровень ног
	game.legsLvl.innerHTML = game.bikeData.legsLvlNumber;
	game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
	game.legsMaxExp.innerHTML = game.bikeData.legsMaxExpNumber;
	game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);	
} else if (localStorage.getItem("bikeDataKey") == null) { // Нет записи в локал сторэдж
	// Элементы 1 lvl
	// Велики
	game.bikeElem.front_bike[0].style.display = 'block';
	game.bikeElem.back_bike[0].style.display = 'block';
	game.bikeElem.left_pedal[0].style.display = 'block';
	game.bikeElem.right_pedal[0].style.display = 'block';
	// Части тела
	game.legsElemCase(game.bikeElem.first_left_leg[0], game.bikeElem.second_left_leg[0], game.bikeElem.first_right_leg[0], game.bikeElem.second_right_leg[0], game.bikeElem.underpant[0], game.dumbElem.left_leg[0], game.dumbElem.right_leg[0], game.dumbElem.underpant[0]);
	// Точки transform-origin
	game.bikeElem.first_left_legs.style.transformOrigin = '272px 852.5px';
	game.bikeElem.left_legs.style.transformOrigin = '342.5px 755px';
	game.bikeElem.first_right_legs.style.transformOrigin = '493px 763px';
	game.bikeElem.right_legs.style.transformOrigin = '376.5px 755px';
	game.bikeElem.first_left_legs.style.WebkitTransformOrigin = '272px 852.5px';
	game.bikeElem.left_legs.style.WebkitTransformOrigin = '342.5px 755px';
	game.bikeElem.first_right_legs.style.WebkitTransformOrigin = '493px 763px';
	game.bikeElem.right_legs.style.WebkitTransformOrigin = '376.5px 755px';
	// Данные в menu и в основном окне 1lvl
	game.rotateNumberBike = game.bikeData.legPower - game.bikeData.bikeSpeed; // Сила ног
	game.mainLegsLvlNumber.innerHTML = game.bikeData.legsLvlNumber;
	game.expProgressBike.value = game.bikeData.legsExpNumber; // Exp
	game.expProgressBike.max = game.bikeData.legsMaxExpNumber;
	// Уровень ног
	game.legsLvl.innerHTML = game.bikeData.legsLvlNumber;
	game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
	game.legsMaxExp.innerHTML = game.bikeData.legsMaxExpNumber;
	game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);
}

// Local Storage - charData  **********************************************************************************************************
if (localStorage.getItem("charDataKey") !== null) {
    game.charData = JSON.parse(localStorage.getItem("charDataKey")); //спарсим его обратно объект
	// Данные в menu и в основном окне 1 lvl 
	game.moneyMain.innerHTML = game.charData.moneyNumber;
	game.staminaProgress.value = game.charData.staminaProgressNumber; // Stamina
	game.staminaProgress.max = game.charData.staminaMaxProgressNumber;
	// Прокачка тела
	game.bodyForce.innerHTML = game.charData.bodyForceNumber;
	game.bodyNeedPoints.innerHTML = game.charData.bodyNeedPointsNumber;
	// Прокачка ног
	game.legsForce.innerHTML = game.charData.legsForceNumber;
	game.legsNeedPoints.innerHTML = game.charData.legsNeedPointsNumber;
	// Прокачка выносливости
	game.stamina.innerHTML = game.charData.staminaNumber;
	game.staminaNeedPoints.innerHTML = game.charData.staminaNeedPointsNumber;
	game.staminaInfo.innerHTML = game.charData.staminaMaxProgressNumber.toFixed(1);
	// Прокачка регенерации выносливости
	game.recStam.innerHTML = game.charData.recStamNumber;
	game.recStamNeedPoints.innerHTML = game.charData.recStamNeedPointsNumber;
	game.recStamInfo.innerHTML = game.charData.recStamInfoNumber.toFixed(1);
	// Очки статусов
	game.statusPoints.innerHTML = game.charData.statusPointsNumber;	
	if (game.charData.staminaProgressNumber < game.charData.staminaMaxProgressNumber && !game.startRecStamFlag) {
		game.startRecStamFlag = true;
		recoveryStamina();
	}
	// Флаги прекращения прокачки в меню чара
	if (game.charData.endUpRecStamFlag == true) {game.recStamNeedPoints.style.display = 'none';}
	if (game.charData.endUpStaminaFlag == true) {game.staminaNeedPoints.style.display = 'none';}
	if (game.charData.endUpLegsFlag == true) {game.legsNeedPoints.style.display = 'none';}
	if (game.charData.endUpBodyFlag == true) {game.bodyNeedPoints.style.display = 'none';}

} else if (localStorage.getItem("charDataKey") == null) { // Нет записи в локал сторэдж
	// Данные в menu и в основном окне 1lvl
	game.moneyMain.innerHTML = game.charData.moneyNumber;
	game.staminaProgress.value = game.charData.staminaProgressNumber; // Stamina
	game.staminaProgress.max = game.charData.staminaMaxProgressNumber;
	// Прокачка тела
	game.bodyForce.innerHTML = game.charData.bodyForceNumber;
	game.bodyNeedPoints.innerHTML = game.charData.bodyNeedPointsNumber;
	// Прокачка ног
	game.legsForce.innerHTML = game.charData.legsForceNumber;
	game.legsNeedPoints.innerHTML = game.charData.legsNeedPointsNumber;
	// Прокачка выносливости
	game.stamina.innerHTML = game.charData.staminaNumber;
	game.staminaNeedPoints.innerHTML = game.charData.staminaNeedPointsNumber;
	game.staminaInfo.innerHTML = game.charData.staminaMaxProgressNumber.toFixed(1);
	// Прокачка регенерации выносливости
	game.recStam.innerHTML = game.charData.recStamNumber;
	game.recStamNeedPoints.innerHTML = game.charData.recStamNeedPointsNumber;
	game.recStamInfo.innerHTML = game.charData.recStamInfoNumber.toFixed(1);
	// Очки статусов
	game.statusPoints.innerHTML = game.charData.statusPointsNumber;	
}
/*
// Local Storage legs ****************************************************************************************************************
if (localStorage.getItem("bikeDataKey") !== null) {
    game.bikeData = JSON.parse(localStorage.getItem("bikeDataKey")); //спарсим его обратно объект
	switch (game.bikeData.legsLvlNumber) {
		case 1:
			game.legsElemCase(game.dumbElem.left_leg[0], game.right_leg[0], game.underpant[0]);
		break;
		case 2:
			game.legsElemCase(game.dumbElem.left_leg[1], game.right_leg[1], game.underpant[0]);
		break;
		case 3:
			game.legsElemCase(game.dumbElem.left_leg[2], game.right_leg[2], game.underpant[1]);
		break;
		case 4:
			game.legsElemCase(game.dumbElem.left_leg[3], game.right_leg[3], game.underpant[2]);
		break;
		case 5:
			game.legsElemCase(game.dumbElem.left_leg[4], game.right_leg[4], game.underpant[3]);
		break;
		case 6:
			game.legsElemCase(game.dumbElem.left_leg[5], game.right_leg[5], game.underpant[4]);
		break;
		case 7:
			game.legsElemCase(game.dumbElem.left_leg[6], game.right_leg[6], game.underpant[5]);
		break;
		case 8:
			game.legsElemCase(game.dumbElem.left_leg[7], game.right_leg[7], game.underpant[5]);
		break;
		case 9:
			game.legsElemCase(game.dumbElem.left_leg[8], game.right_leg[8], game.underpant[6]);
		break;
		case 10:
			game.legsElemCase(game.dumbElem.left_leg[9], game.right_leg[9], game.underpant[6]);
		break;
		case 11:
			game.legsElemCase(game.dumbElem.left_leg[10], game.right_leg[10], game.underpant[7]);
		break;
		case 12:
			game.legsElemCase(game.dumbElem.left_leg[11], game.right_leg[11], game.underpant[8]);
		break;
		case 13:
			game.legsElemCase(game.dumbElem.left_leg[12], game.right_leg[12], game.underpant[9]);
		break;
		case 14:
			game.legsElemCase(game.dumbElem.left_leg[13], game.right_leg[13], game.underpant[10]);
		break;
		case 15:
			game.legsElemCase(game.dumbElem.left_leg[14], game.right_leg[14], game.underpant[11]);
		break;
		case 16:
			game.legsElemCase(game.dumbElem.left_leg[15], game.right_leg[15], game.underpant[12]);
		break;
		case 17:
			game.legsElemCase(game.dumbElem.left_leg[16], game.right_leg[16], game.underpant[13]);
		break;
		case 18:
			game.legsElemCase(game.dumbElem.left_leg[17], game.right_leg[17], game.underpant[14]);
		break;
		case 19:
			game.legsElemCase(game.dumbElem.left_leg[18], game.right_leg[18], game.underpant[15]);
		break;
		case 20:
			game.legsElemCase(game.dumbElem.left_leg[19], game.right_leg[19], game.underpant[16]);
		break;
		case 21:
			game.legsElemCase(game.dumbElem.left_leg[20], game.right_leg[20], game.underpant[17]);
		break;
		case 22:
			game.legsElemCase(game.dumbElem.left_leg[21], game.right_leg[21], game.underpant[18]);
		break;
		case 23:
			game.legsElemCase(game.dumbElem.left_leg[22], game.right_leg[22], game.underpant[19]);
		break;
		case 24:
			game.legsElemCase(game.dumbElem.left_leg[23], game.right_leg[23], game.underpant[20]);
		break;
		case 25:
			game.legsElemCase(game.dumbElem.left_leg[24], game.right_leg[24], game.underpant[21]);
		break;
	} 
	// Уровень ног
	game.legsLvl.innerHTML = game.bikeData.legsLvlNumber;
	game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
	game.legsMaxExp.innerHTML = game.bikeData.legsMaxExpNumber;
	game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);
} else if (localStorage.getItem("bikeDataKey") == null) {
	game.legsElemCase(game.left_leg[0], game.right_leg[0], game.underpant[0]);   
	// Уровень ног
	game.legsLvl.innerHTML = game.bikeData.legsLvlNumber;
	game.legsExp.innerHTML = game.bikeData.legsExpNumber.toFixed(1);
	game.legsMaxExp.innerHTML = game.bikeData.legsMaxExpNumber; 
	game.legsInfo.innerHTML = game.bikeData.legPowerInfo.toFixed(1);
}
// Local Storage body ********************************************************************************************************************
if (localStorage.getItem("dumbDataKey") !== null) {
    game.dumbData = JSON.parse(localStorage.getItem("dumbDataKey")); //спарсим его обратно объект
	switch(game.dumbData.bodyLvlNumber) {
    	case 1:
			game.bodyElemCase(game.bodys[0], game.faces[0], game.second_left_arms[0], game.first_left_arms[0], game.second_right_arms[0], game.first_right_arms[0]);
		break;
    	case 2:
			game.bodyElemCase(game.bodys[0], game.faces[0], game.second_left_arms[1], game.first_left_arms[1], game.second_right_arms[1], game.first_right_arms[1]);
		break;
		case 3:
			game.bodyElemCase(game.bodys[1], game.faces[0], game.second_left_arms[2], game.first_left_arms[2], game.second_right_arms[2], game.first_right_arms[2]);
		break;
		case 4:
			game.bodyElemCase(game.bodys[2], game.faces[0], game.second_left_arms[3], game.first_left_arms[3], game.second_right_arms[3], game.first_right_arms[3]);
		break;
		case 5:
			game.bodyElemCase(game.bodys[3], game.faces[0], game.second_left_arms[4], game.first_left_arms[4], game.second_right_arms[4], game.first_right_arms[4]);
		break;
		case 6:
			game.bodyElemCase(game.bodys[4], game.faces[0], game.second_left_arms[5], game.first_left_arms[5], game.second_right_arms[5], game.first_right_arms[5]);
		break;
		case 7:
			game.bodyElemCase(game.bodys[5], game.faces[0], game.second_left_arms[6], game.first_left_arms[6], game.second_right_arms[6], game.first_right_arms[6]);
		break;
		case 8:
			game.bodyElemCase(game.bodys[6], game.faces[0], game.second_left_arms[7], game.first_left_arms[7], game.second_right_arms[7], game.first_right_arms[7]);
		break;
		case 9:
			game.bodyElemCase(game.bodys[7], game.faces[0], game.second_left_arms[8], game.first_left_arms[8], game.second_right_arms[8], game.first_right_arms[8]);
		break;
		case 10:
			game.bodyElemCase(game.bodys[8], game.faces[0], game.second_left_arms[9], game.first_left_arms[9], game.second_right_arms[9], game.first_right_arms[9]);
		break;
		case 11:
			game.bodyElemCase(game.bodys[9], game.faces[0], game.second_left_arms[10], game.first_left_arms[10], game.second_right_arms[10], game.first_right_arms[10]);
		break;
		case 12:
			game.bodyElemCase(game.bodys[10], game.faces[0], game.second_left_arms[11], game.first_left_arms[11], game.second_right_arms[11], game.first_right_arms[11]);
		break;
		case 13:
			game.bodyElemCase(game.bodys[11], game.faces[0], game.second_left_arms[12], game.first_left_arms[12], game.second_right_arms[12], game.first_right_arms[12]);
		break;
		case 14:
			game.bodyElemCase(game.bodys[12], game.faces[0], game.second_left_arms[13], game.first_left_arms[13], game.second_right_arms[13], game.first_right_arms[13]);
		break;
		case 15:
			game.bodyElemCase(game.bodys[13], game.faces[0], game.second_left_arms[14], game.first_left_arms[14], game.second_right_arms[14], game.first_right_arms[14]);
		break;
		case 16:
			game.bodyElemCase(game.bodys[14], game.faces[0], game.second_left_arms[15], game.first_left_arms[15], game.second_right_arms[15], game.first_right_arms[15]);
		break;
		case 17:
			game.bodyElemCase(game.bodys[15], game.faces[0], game.second_left_arms[16], game.first_left_arms[16], game.second_right_arms[16], game.first_right_arms[16]);
		break;
		case 18:
			game.bodyElemCase(game.bodys[16], game.faces[1], game.second_left_arms[17], game.first_left_arms[17], game.second_right_arms[17], game.first_right_arms[17]);
		break;
		case 19:
			game.bodyElemCase(game.bodys[17], game.faces[2], game.second_left_arms[18], game.first_left_arms[18], game.second_right_arms[18], game.first_right_arms[18]);
		break;
		case 20:
			game.bodyElemCase(game.bodys[18], game.faces[3], game.second_left_arms[19], game.first_left_arms[19], game.second_right_arms[19], game.first_right_arms[19]);
		break;
		case 21:
			game.bodyElemCase(game.bodys[19], game.faces[4], game.second_left_arms[20], game.first_left_arms[20], game.second_right_arms[20], game.first_right_arms[20]);
		break;
		case 22:
			game.bodyElemCase(game.bodys[20], game.faces[5], game.second_left_arms[21], game.first_left_arms[21], game.second_right_arms[21], game.first_right_arms[21]);
		break;
		case 23:
			game.bodyElemCase(game.bodys[21], game.faces[5], game.second_left_arms[22], game.first_left_arms[22], game.second_right_arms[22], game.first_right_arms[22]);
		break;
		case 24:
			game.bodyElemCase(game.bodys[22], game.faces[5], game.second_left_arms[23], game.first_left_arms[23], game.second_right_arms[23], game.first_right_arms[23]);
		break;
		case 25:
			game.bodyElemCase(game.bodys[23], game.faces[6], game.second_left_arms[24], game.first_left_arms[24], game.second_right_arms[24], game.first_right_arms[24]);
		break; 
	}
	// Уровень рук
	game.bodyLvl.innerHTML = game.dumbData.bodyLvlNumber;
	game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
	game.bodyMaxExp.innerHTML = game.dumbData.bodyMaxExpNumber; 
	game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
} else if(localStorage.getItem("dumbDataKey") == null) {
	game.bodyElemCase(game.bodys[0], game.faces[0], game.second_left_arms[0], game.first_left_arms[0], game.second_right_arms[0], game.first_right_arms[0]); 
	// Уровень рук
	game.bodyLvl.innerHTML = game.dumbData.bodyLvlNumber;
	game.bodyExp.innerHTML = game.dumbData.bodyExpNumber.toFixed(1);
	game.bodyMaxExp.innerHTML = game.dumbData.bodyMaxExpNumber;
	game.bodyInfo.innerHTML = game.dumbData.armPowerInfo.toFixed(1);
}
*/
// Local Storage inventory flags ***************************************************************************************************
if (localStorage.getItem("inventDataKey") !== null) {
    game.inventData = JSON.parse(localStorage.getItem("inventDataKey")); //спарсим его обратно объект
    // Флаги появления вещей в инвентаре
    if (game.inventData.dumbInventFlag2) { game.items_inventoryDumb[1].style.display = 'block'; }
    if (game.inventData.dumbInventFlag3) { game.items_inventoryDumb[2].style.display = 'block'; }
    if (game.inventData.dumbInventFlag4) { game.items_inventoryDumb[3].style.display = 'block'; }
    if (game.inventData.dumbInventFlag5) { game.items_inventoryDumb[4].style.display = 'block'; }
    if (game.inventData.dumbInventFlag6) { game.items_inventoryDumb[5].style.display = 'block'; }
    if (game.inventData.dumbInventFlag7) { game.items_inventoryDumb[6].style.display = 'block'; }
    if (game.inventData.dumbInventFlag8) { game.items_inventoryDumb[7].style.display = 'block'; }
    if (game.inventData.dumbInventFlag9) { game.items_inventoryDumb[8].style.display = 'block'; }
    if (game.inventData.dumbInventFlag10) { game.items_inventoryDumb[9].style.display = 'block'; }
    if (game.inventData.bikeInventFlag2) { game.items_inventoryBike[1].style.display = 'block'; }
    if (game.inventData.bikeInventFlag3) { game.items_inventoryBike[2].style.display = 'block'; }
    if (game.inventData.energyInventFlag) { 
    	game.items_inventoryDumb[10].style.display = 'block'; 
    	game.items_inventoryBike[3].style.display = 'block'; 
    }
    if (game.inventData.proteinInventFlag) { 
    	game.items_inventoryDumb[11].style.display = 'block'; 
    	game.items_inventoryBike[4].style.display = 'block'; 
    }
    if (game.inventData.steroidsInventFlag) { 
    	game.items_inventoryDumb[12].style.display = 'block'; 
    	game.items_inventoryBike[5].style.display = 'block'; 
    }
    // Флаги удаления кнопок покупки вещей
    if (game.inventData.btnBuyDumbFlag2) {game.btnsBuy[0].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag3) {game.btnsBuy[1].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag4) {game.btnsBuy[2].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag5) {game.btnsBuy[3].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag6) {game.btnsBuy[4].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag7) {game.btnsBuy[5].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag8) {game.btnsBuy[6].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag9) {game.btnsBuy[7].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag10) {game.btnsBuy[8].style.display = 'none';}
    if (game.inventData.btnBuyBikeFlag2) {game.btnsBuy[9].style.display = 'none';}
    if (game.inventData.btnBuyBikeFlag3) {game.btnsBuy[10].style.display = 'none';}
    // Количество стимуляторов в инвентаре
    game.stimQuantInventDumb[0].innerHTML = game.inventData.energeticInventNumber;
	game.stimQuantInventDumb[1].innerHTML = game.inventData.proteinInventNumber;
	game.stimQuantInventDumb[2].innerHTML = game.inventData.steroidsInventNumber;
	game.stimQuantInventBike[0].innerHTML = game.inventData.energeticInventNumber;
	game.stimQuantInventBike[1].innerHTML = game.inventData.proteinInventNumber;
	game.stimQuantInventBike[2].innerHTML = game.inventData.steroidsInventNumber;

} else if (localStorage.getItem("inventDataKey") == null) {

}

// Local Storage stimulates timers **************************************************************************************************
if (localStorage.getItem("timerDataKey") !== null) {
    game.timerData = JSON.parse(localStorage.getItem("timerDataKey")); //спарсим его обратно объект
	// Таймеры стимуляторов в главном окне
	if (game.timerData.energeticTimerNumber > 0) {
		game.timerData.energeticTimerFlag = true;
		game.energyMain.style.display = 'block';
		if (game.timerData.energeticTransFlag == true) {
			game.energyMain.style.transform = 'translateX(150px)';
			game.energyMain.style.WebkitTransform = 'translateX(150px)';
		}
		minusEnergyTimer(); 
	}
	if (game.timerData.proteinTimerNumber > 0) { 
		game.timerData.proteinTimerFlag = true;
		game.proteinMain.style.display = 'block';
		if (game.timerData.proteinTransFlag == true) {
			game.proteinMain.style.transform = 'translateX(150px)';
			game.proteinMain.style.WebkitTransform = 'translateX(150px)';
		}
		minusProteinTimer(); 
	}
	game.energyTimer.innerHTML = game.timerData.energeticTimerNumber;
	game.proteinTimer.innerHTML = game.timerData.proteinTimerNumber;

} else if (localStorage.getItem("timerDataKey") == null) {

}

// Local Storage volume setup ************************************************************************************************************
if (localStorage.getItem("volumeDataKey") !== null) {
    game.volumeData = JSON.parse(localStorage.getItem("volumeDataKey")); //спарсим его обратно объект
    game.buttonSound.volume = game.volumeData.volumeNumber;
	game.moneySound.volume = game.volumeData.volumeNumber;
	game.eatingSound.volume = game.volumeData.volumeNumber;
	game.moanSound.volume = game.volumeData.volumeNumber;
	game.quantityVolume.innerHTML = game.volumeData.volumeNumber.toFixed(1);
} else if (localStorage.getItem("volumeDataKey") == null) {

}

// Local Storage ad data ************************************************************************************************************
if (localStorage.getItem("adDataKey") !== null) {
    game.adData = JSON.parse(localStorage.getItem("adDataKey")); //спарсим его обратно объект
} else if (localStorage.getItem("adDataKey") == null) {

}
	
// Local Storage inventory flags ****************************************************************************************************************
if (localStorage.getItem("inventDataKey") !== null) {
    game.inventData = JSON.parse(localStorage.getItem("inventDataKey")); //спарсим его обратно объект
    // Флаги появления вещей в инвентаре
    if (game.inventData.bikeInventFlag2) {game.items_inventoryDumb[1].style.display = 'block';}
    if (game.inventData.bikeInventFlag3) {game.items_inventoryDumb[2].style.display = 'block';}
    if (game.inventData.energyInventFlag) { game.items_inventoryDumb[3].style.display = 'block'; }
    if (game.inventData.proteinInventFlag) { game.items_inventoryDumb[4].style.display = 'block'; }
    if (game.inventData.steroidsInventFlag) { game.items_inventoryDumb[5].style.display = 'block'; }
    // Флаги удаления кнопок покупки вещей
    if (game.inventData.btnBuyDumbFlag2) {game.btnsBuy[0].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag3) {game.btnsBuy[1].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag4) {game.btnsBuy[2].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag5) {game.btnsBuy[3].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag6) {game.btnsBuy[4].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag7) {game.btnsBuy[5].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag8) {game.btnsBuy[6].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag9) {game.btnsBuy[7].style.display = 'none';}
    if (game.inventData.btnBuyDumbFlag10) {game.btnsBuy[8].style.display = 'none';}
    if (game.inventData.btnBuyBikeFlag2) {game.btnsBuy[9].style.display = 'none';}
    if (game.inventData.btnBuyBikeFlag3) {game.btnsBuy[10].style.display = 'none';}
    // Количество стимуляторов в инвентаре
    game.stimQuantInventDumb[0].innerHTML = game.inventData.energeticInventNumber;
	game.stimQuantInventDumb[1].innerHTML = game.inventData.proteinInventNumber;
	game.stimQuantInventDumb[2].innerHTML = game.inventData.steroidsInventNumber;

} else if (localStorage.getItem("inventDataKey") == null) {

}

// Local Storage start window ************************************************************************************************************
if (localStorage.getItem("startWindowsKey") !== null) {
    game.startWindows = JSON.parse(localStorage.getItem("startWindowsKey")); //спарсим его обратно объект
    game.btnContinue.style.display = 'block';
    game.btnReset.style.display = 'block';
    game.btnStart.style.display = 'none';
} else if (localStorage.getItem("startWindowsKey") == null) {
	game.btnStart.style.display = 'block';
}

game.loadWindow.style.display = 'none'; 
game.mainWindow.style.display = 'block';
game.btns_menu.style.display = 'block';

}; // window.onload