<p>
    <img width="80" align="left" src="https://img.icons8.com/external-bearicons-flat-bearicons/256/external-notification-essential-collection-bearicons-flat-bearicons.png">
    <img align="right" src="https://api.visitorbadge.io/api/visitors?path=https://github.com/Ralex91/Simple-ToastNotification/edit/main/README.md&countColor=%2337d67a">
    <h1>Simple Toast Notification 🍞</h1>
</p>


<h3>Is a simple Notification Toast 🍞 JavaScirpt without any front-end libraries (except Font Awesome ), it can be used in any type of project and easily modified</h3>

<h2>

[👀 Preview Here](https://htmlpreview.github.io/?https://github.com/Ralex91/Simple-ToastNotification/blob/main/exemple.html)

</h2>

<h2>🛠 Installation</h2>

- Copy files from this repositorie in your website

  `./assets/toast.css`

  `./assets/toast.js`
  <br><br>

- Add these lines in your page 

  Page header :
  ```html
  <link rel="stylesheet" href="/assets/toast/toast.css"/>
  ```

  Page Body :
  ```html
  <div id="toasts"></div>
	...
  <script type="text/javascript" src="/assets/toast/toast.js"></script>
  ```

<h2>🧩 Usage</h2>
To insert a notification in your page use the JS code:

```js
toastNotif({
	text: 'Lorem Ipsum is simply dummy text of the printing', // Text
	color: '#5bc83f', // Color of Notification
	timeout: 5000, // Spawn time
	icon: 'valid' // Icon name (config in toast.js)
});
```

<h2>📚 Exemple</h2>

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Demo Toast Notification</title>
		
		<link rel="stylesheet" type="text/css" href="./toast.css">
	</head>
	<body>
		<script type="text/javascript" src="./toast.js"></script>
	</body>
</html>
```

<br>

## 🏷 Simplified by Ralex91
