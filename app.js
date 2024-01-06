// Site variables
let menu_1 = document.getElementById("menu1");

let btn_menu_1 = document.getElementById("btn_menu_1");

// Telegram variables
let tg = window.Telegram.WebApp;
let item_to_telegram = "";

let btn_A1 = document.getElementById("btnA1");
let btn_A2 = document.getElementById("btnA2");
let btn_A3 = document.getElementById("btnA3");
let btn_A4 = document.getElementById("btnA4");
let btn_A5 = document.getElementById("btnA5");
let btn_A6 = document.getElementById("btnA6");

let main_btn_visible = "none";

tg.expand();

menu_1.style.display = "none";

btn_menu_1.addEventListener("click", function() {
	var display = menu_1.style.display;
    if (display == "none" || display == "") {
        menu_1.style.display = "flex";
        menu_1.style.flexWrap = "wrap";
        Array.from(menu_1.children).forEach(child => {
            child.style.width = "50%";
        });

		document.getElementById("img_1_title").style.display = "none";
    } else {
        menu_1.style.display = "none";

		document.getElementById("img_1_title").style.display = "block";
    }
});

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

btn_A1.addEventListener("click", function() {
	if (main_btn_visible != "a1") {
		tg.MainButton.setText("Вы выбрали Linolit 350");
		item_to_telegram = "A1";
		tg.MainButton.show();

		main_btn_visible == "a1";
	} else {
		tg.MainButton.hide();
	}
});

btn_A2.addEventListener("click", function() {
	if (main_btn_visible != "a2") {
		tg.MainButton.setText("Вы выбрали Linolit 520");
		item_to_telegram = "A2";
		tg.MainButton.show();
		
		main_btn_visible == "a2";
	} else {
		tg.MainButton.hide();
	}
});

btn_A3.addEventListener("click", function() {
	if (main_btn_visible != "a3") {
		tg.MainButton.setText("Вы выбрали Linolit 550");
		item_to_telegram = "A3";
		tg.MainButton.show();
		
		main_btn_visible == "a3";
	} else {
		tg.MainButton.hide();
	}
});

btn_A4.addEventListener("click", function() {
	if (main_btn_visible != "a4") {
		tg.MainButton.setText("Вы выбрали Linolit 800");
		item_to_telegram = "A4";
		tg.MainButton.show();
		
		main_btn_visible == "a4";
	} else {
		tg.MainButton.hide();
	}
});

btn_A5.addEventListener("click", function() {
	if (main_btn_visible != "a5") {
		tg.MainButton.setText("Вы выбрали Linolit 670");
		item_to_telegram = "A5";
		tg.MainButton.show();
		
		main_btn_visible == "a5";
	} else {
		tg.MainButton.hide();
	}
});

btn_A6.addEventListener("click", function() {
	if (main_btn_visible != "a6") {
		tg.MainButton.setText("Вы выбрали Linolit 804 Remote Control");
		item_to_telegram = "A6";
		tg.MainButton.show();
		
		main_btn_visible == "a6";
	} else {
		tg.MainButton.hide();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
	tg.sendData(item_to_telegram);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.id}`;

usercard.appendChild(p);
