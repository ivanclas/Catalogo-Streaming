// Importa Firebase App y Messaging
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

// Tu config de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD8Qixd8Q5DFYu0a5l5jiYC2ODrUbnjwuk",
  authDomain: "guardar-fotos-ec316.firebaseapp.com",
  projectId: "guardar-fotos-ec316",
  storageBucket: "guardar-fotos-ec316.appspot.com",
  messagingSenderId: "529201655026",
  appId: "1:529201655026:web:f10e873d825a72b5d8b46b"
});

// Inicializa Messaging
const messaging = firebase.messaging();

// Muestra notificación en segundo plano
messaging.onBackgroundMessage(payload => {
  console.log('Push background:', payload);
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title, {
    body,
    icon: icon || '/icono-notif.png'
  });
});
