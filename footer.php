

  <div class="adish-footer">
        <p>asdasd</p>
  </div>

<!-- JS LIST START -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="animation/aos.js"></script>
<script src="script.js"></script>
<script type="text/javascript">
    AOS.init({
        duration: 800,
    });

    $(document).ready(function(){

        $("a").on('click', function(event) {

            if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

            window.location.hash = hash;
      });
    }
  });
});
</script>
<!-- JS LIST END --> 

</body>
</html>