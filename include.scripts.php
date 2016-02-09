<?php
/**
 * Created by PhpStorm.
 * User: metal-gogo
 * Date: 2/7/2016
 * Time: 10:40 PM
 */
?>
<script>
	var $buoop = {c:2};
	function $buo_f(){
		var e = document.createElement("script");
		e.src = "//browser-update.org/update.min.js";
		document.body.appendChild(e);
	};
	try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
	catch(e){window.attachEvent("onload", $buo_f)}
</script>
<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
<script src="app/js/script.js?v=0.1"></script>

<!--<script src="vendor/what-input.min.js"></script>-->
<!--<script src="https://cdn.jsdelivr.net/foundation/6.1.2/foundation.min.js"></script>-->
