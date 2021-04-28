<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>PK DAS HOSPITAL, PALAKKAD, BEST HOSPITAL IN PALAKKAD</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="shortcut icon" href="images/fav.png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/fontawesome-all.css">
    <link rel="stylesheet" href="css/linea-arrows.css">
    <link rel="stylesheet" href="fonts/flaticon/flaticon.css">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/animate.css">
    <link href="css/panelmenu.css" rel="stylesheet">
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slider.css">
    <link href="css/newsscroll.css" rel="stylesheet">
</head>

<body>

<div class="body_wraper">
<?php include 'header.php'?>  
    

<section>
<div class="careers_page in_bg">
<div class="container">
<div class="career_formsec">
<form name="carrer" method="post" action="email.php" enctype="multipart/form-data">
<div class="row">
<div class="col-12"><h4> Careers </h4></div>
<div class="col-lg-4">
<div class="site_inputsec">
<label >Your name <span>*</span></label>
<input class="" placeholder="Enter Your Name" type="text" name="name" required>
</div>
</div>
<div class="col-lg-4">
<div class="site_inputsec">
<label >Phone Number <span>*</span></label>
<input class="" placeholder="Enter your phone number" type="number" name="phone" required>
</div>
</div>
<div class="col-lg-4">
<div class="site_inputsec">
<label >Email Address <span>*</span></label>
<input class="" placeholder="Enter your email address" type="email" name="email">
</div>
</div>

<div class="col-lg-4">
<div class="site_inputsec ">
<label >Attach Your Resume <span>*</span></label>
<div class="file-select file_cv ">
     <input type="text" name="" value="" size="40" class="" id="" readonly="readonly" aria-invalid="false" placeholder="Upload cv"><br>
     <input type="file" name="resume" size="40" class="" id="" accept=".pdf,.doc,.docx" aria-invalid="false">
		 
	<button class="attach-button visible"><img src="images/paperclip.svg"> </button>
		 
        </div>
</div>
</div>

<div class="col-lg-4">
<div class="form_btn">
<input type="submit" value="Submit" name="submitcareer">
</div>
</div>
    
<div class="col-12">
<div class="send_your_resume">
<p>Send your resumes to: <a href="mailto:hr@pkdashospital.com">hr@pkdashospital.com</a></p>    
</div>    
</div>

</div>
</form>
</div>
</div>
</div>
</section>
    
<?php include 'footer.php'?>     

</div> <!-- bodywrapper-->
    

    

   <script src="js/jquery-1.12.4.min.js"></script>
   <script src="js/bootstrap.js"></script>
   <script src="js/panelmenu.js"></script>
   <script src="js/panel-custom.js"></script>
   <script src="js/stickynew.js"></script>
   <script src="js/totop.js"></script>
   <script src="js/slick.min.js"></script>	
   <script src="js/newsscroll.js"></script>
   <script>
        $(function () {
            $('.news-scrollbar').jConveyorTicker({
                reverse_elm: true
            });
        });
    </script>
   <script  src="js/wow.min.js"></script>   
   <script src="js/custom.js"></script>
 <script>
        $('a.mm-original-link').click( function(e) {e.preventDefault(); return false; } );
</script>
   
<script>

  jQuery(document).ready(function(){


      jQuery('.cv_label input[type="file"]').change(function(){



    var files = jQuery(this).prop('files');

    var flist = "";



    for(var i=0; i < files.length; i++)

    {

        if(flist!="")

            flist+=", ";

        flist+=files[i]['name'];

    }



    jQuery(this).closest('.cv_label').find('input[readonly="readonly"]').val( flist );

    });

});
</script>

</body>

</html>