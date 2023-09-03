
ref = firebase.storage().ref().child('img/sample.jpg');
ref.getDownloadURL().then((url) => {
  document.getElementById('image').src = url;
});