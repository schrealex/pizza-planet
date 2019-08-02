import Firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDOUYH7Ylfl2SgrHRKJTG8PVusARk0pn0s",
	authDomain: "pizza-planet-61f51.firebaseapp.com",
	databaseURL: "https://pizza-planet-61f51.firebaseio.com",
	projectId: "pizza-planet-61f51",
	storageBucket: "",
	messagingSenderId: "864814546176",
	appId: "1:864814546176:web:6fa27611345c544a"
};
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
