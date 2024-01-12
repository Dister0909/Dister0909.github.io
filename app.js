// Site variables
let menu_1 = document.getElementById("menu1");
let menu_2 = document.getElementById("menu2");

let btn_menu_1 = document.getElementById("btn_menu_1");
let btn_menu_2 = document.getElementById("btn_menu_2");

// Telegram variables
let tg = window.Telegram.WebApp;
let item_to_telegram = "";

let btn_A1 = document.getElementById("btnA1");
let btn_A2 = document.getElementById("btnA2");
let btn_A3 = document.getElementById("btnA3");
let btn_A4 = document.getElementById("btnA4");
let btn_A5 = document.getElementById("btnA5");
let btn_A6 = document.getElementById("btnA6");

let btn_B1 = document.getElementById("btnB1");
let btn_B2 = document.getElementById("btnB2");
let btn_B3 = document.getElementById("btnB3");
let btn_B4 = document.getElementById("btnB4");
let btn_B5 = document.getElementById("btnB5");

tg.expand();

menu_1.style.display = "none";
menu_2.style.display = "none";

btn_menu_1.addEventListener("click", function() {
	var display = menu_1.style.display;
    if (display == "none" || display == "") {
        menu_1.style.display = "flex";
        menu_1.style.flexWrap = "wrap";
        Array.from(menu_1.children).forEach(child => {
            child.style.width = "50%";
        });
    } else {
        menu_1.style.display = "none";
    }
});

btn_menu_2.addEventListener("click", function() {
	var display = menu_2.style.display;
    if (display == "none" || display == "") {
        menu_2.style.display = "flex";
        menu_2.style.flexWrap = "wrap";
        Array.from(menu_2.children).forEach(child => {
            child.style.width = "50%";
        });
    } else {
        menu_2.style.display = "none";
    }
});


tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

btn_A1.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit 350");
	item_to_telegram = "A1";
	tg.MainButton.show();
});

btn_A2.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit 520");
	item_to_telegram = "A2";
	tg.MainButton.show();
});

btn_A3.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit 550");
		item_to_telegram = "A3";
	tg.MainButton.show();
});

btn_A4.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit 800");
	item_to_telegram = "A4";
	tg.MainButton.show();
});

btn_A5.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit 670");
	item_to_telegram = "A5";
	tg.MainButton.show();
});

btn_A6.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit 804 Remote Control");
	item_to_telegram = "A6";
	tg.MainButton.show();
});


btn_B1.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit CT 424-4");
	item_to_telegram = "B1";
	tg.MainButton.show();
});

btn_B2.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit CT 436-4 RL");
	item_to_telegram = "B2";
	tg.MainButton.show();
});

btn_B3.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit TT 1910-03");
		item_to_telegram = "B3";
	tg.MainButton.show();
});

btn_B4.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit RT 1000");
	item_to_telegram = "B4";
	tg.MainButton.show();
});

btn_B5.addEventListener("click", function() {
	tg.MainButton.setText("Перейти к Linolit RT 1001");
	item_to_telegram = "B5";
	tg.MainButton.show();
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
