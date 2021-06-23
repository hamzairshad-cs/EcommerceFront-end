    var mybutton = document.getElementById("myBtn");
 
      // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        }
        else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function myFunction(){
        var x= document.getElementById('mynav');
        if(x.className === "nav"){
            x.className +=" responsive";
        }
        else{
            x.className="nav";
        }
    }

    function imagechange()
	{
		document.getElementById('unk').src="./images/sneakers.png";
	}
	function imagechange1()
	{
		document.getElementById('unk').src="./images/shoe.png";
	}
	function imagechange2()
	{
		document.getElementById('unk').src="../images/sneakers.png";
	}
	function imagechange3()
	{
		document.getElementById('unk').src="../images/shoe.png";
	}

    	function home(){
    		window.location.href="../index.html";
    	}
    	function changeimg() {
    		document.getElementById('sh').src="../images/sneakers.png";
    	}
    	function changeimg1() {
    		document.getElementById('sh').src="../images/shoe.png";
    	}
    	function changeimg2() {
    		document.getElementById('sh').src="../images/iphone 2.png";
    	}
    	function changeimg3() {
    		document.getElementById('sh').src="../images/iphone.png";
    	}
    	function about()
    	{
    		window.location.href="./about us.html";
    	}

    	function product()
    	{
    		window.location.href="./products.html";
    	}

    	function details()
    	{
    		window.location.href="./product details.html";
    	}

    	function details2()
    	{
    		window.location.href="./details 2.html";
    	}
    	function contact()
    	{
    		window.location.href="./contact us.html";
    	}

  
  